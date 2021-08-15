module.exports = {
  roots: ['<rootDir>/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '<rootDir>/test/**/*.{ts,tsx}', '!**/*.d.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy'
  }
}
