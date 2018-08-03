const config = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // redirect all 404s to application
    // entry point (index.html) and let
    // react-router handle routing
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(scss|sass)/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};

module.exports = config;