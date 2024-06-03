// https://dev.to/nexxeln/implementing-the-pipe-operator-in-typescript-30ip
type Fn = (...args: any[]) => any;
type LastReturnType<L extends Fn[]> = L extends [...any, infer Last extends Fn] ? ReturnType<Last> : never;

export const pipe = <T extends Fn[]>(...fns: T) => {
  return (value: any) => {
    return fns.reduce((prev, currFn) => currFn(prev), value) as LastReturnType<T>;
  };
};
