module.exports = {
  setupFilesAfterEnv: ['./src/library/utilities/test/jest.setup.ts'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/library/utilities/test/__mocks__/svgrMock.ts',
    '^@components(.*)$': '<rootDir>/src/library/components$1',
    '^@images(.*)$': '<rootDir>/src/assets/images$1',
    '^@utilities(.*)$': '<rootDir>/src/library/utilities$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@library(.*)$': '<rootDir>/src/library$1',
    '^@stores(.*)$': '<rootDir>/src/stores$1',
    '^@modules(.*)$': '<rootDir>/src/modules$1',
    '^@api(.*)$': '<rootDir>/src/api$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test|integration).ts?(x)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  roots: [
    '<rootDir>/src/library/components/',
    '<rootDir>/src/library/utilities/test',
    '<rootDir>/node_modules',
    '<rootDir>/src/modules',
  ],
  snapshotSerializers: ['@emotion/jest/serializer'],
  "clearMocks": true
};
