import { pipe } from '../pipe-utils';

describe('pipe', () => {
  it('should return the result of applying all functions in sequence', () => {
    const addOne = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    const square = (x: number) => x * x;

    const pipeline = pipe(addOne, double, square);

    expect(pipeline(2)).toBe(36); // (2 + 1) * 2 = 6, 6^2 = 36
    expect(pipeline(5)).toBe(144); // (5 + 1) * 2 = 12, 12^2 = 144
    expect(pipeline(0)).toBe(4); // (0 + 1) * 2 = 2, 2^2 = 4
  });

  it('should return the input value if no functions are provided', () => {
    const pipeline = pipe();

    expect(pipeline(10)).toBe(10);
    expect(pipeline('hello')).toBe('hello');
    expect(pipeline(true)).toBe(true);
  });
});
