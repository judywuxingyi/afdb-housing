const HtmlWebpackPlugin = require("html-webpack-plugin");
const fileURLToPath = require('url');
const path = require('path');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

module.exports = {
  mode: "development",
  entry: "./src/client/index.tsx",
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: "bundle.js",
      publicPath: "/",
  },
  resolve: {
      // extensions: ['.js', '.jsx'],
      extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: "./src/client/index.html"
      })
  ],
  devServer: {
      static: {
          publicPath: '/build',
          directory: path.resolve(__dirname, 'build')
      },
      historyApiFallback: true,
      hot: true,
      proxy: {
          '/graphql':"http://localhost:3000"
      }
  },
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   options:{
      //       presets: ['@babel/preset-env', '@babel/preset-react']
      //   }
      // },
      { 
        test: /\.(t|j)sx?$/,
        use: { loader: 'ts-loader' },
        exclude: /node_modules/ },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
}

