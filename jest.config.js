export default {
  clearMocks: true,

  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  transform: {
<<<<<<< HEAD
    '\\.[jt]sx?$': 'babel-jest',
=======
    '\\.[tj]sx?$': 'babel-jest',
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '\\.pnp\\.[^\\/]+$'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
<<<<<<< HEAD

  moduleNameMapper: {
    '\\.(css|s[ac]ss)$': '<rootDir>/src/__mocks__/styles.js',
    '\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/files.js',
=======
  moduleNameMapper: {
    '\\.(css|s[ac]ss)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
>>>>>>> 4ae91bd9836e9b901830936481b4df651e2054c6
    '\\.svg$': '<rootDir>/src/__mocks__/svg.js',
  },
};
