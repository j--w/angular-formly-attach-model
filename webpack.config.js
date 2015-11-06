module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js",
    libraryTarget: "umd"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?optional[]=runtime',
      exclude: /node_modules/
    }]
  },
  externals: [
    'angular',
    'angular-formly'
  ]
};
