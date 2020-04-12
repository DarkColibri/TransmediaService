const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: __dirname + '/src/public/js',
    filename: 'bundle.js'
  },
  // Reglas para traducir
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  // ERROR: [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
  // Add this line:
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
  },
  plugins: [
    new VueLoaderPlugin()
  ]
  
};