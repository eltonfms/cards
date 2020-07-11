// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      },
      { 
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, 
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
}