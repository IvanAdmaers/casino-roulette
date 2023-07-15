const path = require('path');

const presets = ['@babel/preset-env', '@babel/preset-typescript'];

const plugins = [
  [
    '@babel/plugin-transform-react-jsx',
    {
      runtime: 'automatic',
      importSource: path.join(__dirname, 'src', '__core'),
    },
  ],
];

module.exports = {
  presets,
  plugins,
};
