const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.html',
      filename: './index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
  },
};
