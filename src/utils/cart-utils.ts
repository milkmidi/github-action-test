type ProductType = {
  id: number;
  title: string;
  price: number;
  sku: string;
};
type CartType<T extends ProductType> = {
  lineItems: T[];
  totalPrice: number;
};

type NormalizeProductType = ProductType & {
  canChangeQuantity: boolean;
  originalPrice: number;
  price: number;
  currency: string;
  discount: number;
  limit: number;
};

/**
 * 從購物車 API 拿到資料後要做以下事情
 * 1 部份商品不能更改數量
 * 2 取得商品原價
 * 3 currency 轉換
 * 4 計算省了多少錢
 * 5 商品數量限制
 * 6 新的其他規則
 */
export const fetchCartData = (): Promise<CartType<NormalizeProductType>> => {
  return fetch('/some-mock-api/cart')
    .then((response) => response.json())
    .then((cart: CartType<ProductType>) => {
      const lineItems = cart.lineItems.map((product) => {
        const canChangeQuantity = product.sku !== '123';
        const originalPrice = product.price;
        const price = product.price * 30;
        const currency = 'TWD';
        const discount = originalPrice - price;
        const limit = 10;
        return {
          ...product,
          canChangeQuantity,
          originalPrice,
          price,
          currency,
          discount,
          limit,
        } as NormalizeProductType;
      });
      const totalPrice = lineItems.reduce((total, product) => total + product.price, 0);
      return { lineItems, totalPrice };
    });
};
