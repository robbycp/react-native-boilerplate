const presets = ['@babel/preset-env', 'module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'babel-plugin-root-import',
  {
    rootPathSuffix: 'src',
  },
]);

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '~': './src',
    },
  },
]);

module.exports = {
  presets,
  plugins,
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
