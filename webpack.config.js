const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getWebpackConfig = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  const mode = isProduction === true ? 'production' : 'development';

  return {
    entry: path.join(__dirname, 'dist', 'index.js'),
    mode,
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: 'asset/inline',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/example/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
  };
};

module.exports = getWebpackConfig;
