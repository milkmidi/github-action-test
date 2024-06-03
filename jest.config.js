/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts'],
  testMatch: ['<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.[jt]sx?$': ['ts-jest', { tsconfig: './tsconfig.json' }],
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    // '<rootDir>/internal/__mocks__/fileMock.js',
    // '\\.(css|less|scss)$': '<rootDir>/internal/__mocks__/cssTransform.js',
  },
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
};
