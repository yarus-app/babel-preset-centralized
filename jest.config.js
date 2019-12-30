module.exports = {
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
  collectCoverageFrom: ['<rootDir>/src/**/*.{mjs,js,jsx,ts,tsx}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['json', 'js', 'jsx', 'mjs', 'ts', 'tsx'],
  moduleNameMapper: {
    '~': '<rootDir>/src/index',
    '~/(.*)': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest'
  }
};
