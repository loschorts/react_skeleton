module.exports = {
  context: __dirname + "/lib",
  entry: "./entry.jsx",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
  // you can now require('file') instead of require('file.coffee')
  extensions: ['', '.js', '.jsx', '.json', '.coffee'] 
  },
  resolveLoader: __dirname + "node_modules"
};