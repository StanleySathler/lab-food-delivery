export default {
  rootDir: __dirname,
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx|js)$': '@swc/jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
};
