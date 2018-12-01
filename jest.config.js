module.exports = {
  verbose: true,
  coverageThreshold: {
    global: {
      functions: 60,
      lines: 60,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
  ],
  resolver: 'jest-pnp-resolver',
  setupFiles: [
    'react-app-polyfill/jsdom',
    '<rootDir>/test/config/setup.js',
  ],
  testMatch: [
    '<rootDir>/test/**/?(*.)(spec|test).{js,jsx}',
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
};
