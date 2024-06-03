import { pipe } from './pipe-utils';

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

const adjustProductLimit = (cart: CartType<ProductType>) => {
  return cart.lineItems.map((product) => {
    const canChangeQuantity = product.sku !== '123';
    return {
      ...product,
      canChangeQuantity,
    };
  });
};

const adjustProductPrice = (cart: CartType<ProductType>) => {
  return cart.lineItems.map((product) => {
    const originalPrice = product.price;
    const price = product.price * 30;
    const currency = 'TWD';
    const discount = originalPrice - price;
    return {
      ...product,
      originalPrice,
      price,
      currency,
      discount,
    };
  });
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

export const fetchCartData = (): Promise<CartType<ProductType>> => {
  return fetch('/some-mock-api/cart').then((response) => response.json());
};

export const getCartData = async (): Promise<CartType<NormalizeProductType>> => {
  const pipeline = pipe(adjustProductLimit, adjustProductPrice);

  const cart = await fetchCartData();
  // @ts-ignore
  return pipeline(cart) as CartType<NormalizeProductType>;
};
