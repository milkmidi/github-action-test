import _ from 'lodash';

export const add = (a: number, b: number) => {
  return a + b;
};

export const sub = (a: number, b: number) => {
  return a - b;
};

export const getValue = (value: any) => {
  return _.get(value, ['a']);
};
