import { foo } from './utils/foo';

export * from './utils';
export { default as Header } from './components/Header';

foo();
console.log(1);
