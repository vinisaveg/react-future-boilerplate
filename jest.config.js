module.exports = {
  roots: ['<rootDir>/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '<rootDir>/test/**/*.{ts,tsx}', '!**/*.d.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/test/cypress'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom', 
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy'
  },
  "setupFilesAfterEnv": [
    "<rootDir>/test/config/setupTests.ts"
  ]
}
