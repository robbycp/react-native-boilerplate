module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    jest: true,
  },
  plugins: ['jest', 'detox'],
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
    },
  ],
};
