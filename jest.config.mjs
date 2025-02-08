export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
      global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
      },
  },
  testEnvironment: 'node',
  transform: {
      '^.+\\.js$': 'babel-jest', // Add this to transform ES modules
  },
};