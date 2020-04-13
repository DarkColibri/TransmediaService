let webpack = require("webpack");

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // Fichero de entrada a Webpack
  entry: './src/cliente/index.js',
  // Ficnero de salida.
  output: {
    path: __dirname + '/src/public/js',
    // publicPath: "",
    filename: 'bundle.js'
  },
  // Reglas para traducir archivos.
  module: {
    rules: [
      { // Reglas para JS
        test: /\.js$/,
        use: { loader: 'babel-loader'},
        exclude: /node_modules/
      },
      { // Reglas para VUE
        test: /\.vue$/,        // Tipos de archivo
        loader: 'vue-loader'
      }
      // ,{ // Reglas para CSS
      //   test: /\.css$/,  // Tipos de archivo
      //   use: ["vue-style-loader", "css-loader"]
      // },
      // ,{ // Reglas para Imagenes
      //     test: /\.(png|jpg|gif|svg)$/,
      //     loader: "file-loader",
      //     options: {
      //       name:"[name].[text]?[hash]" // >> logo.jpg?6546546464
      //     }
      // }
    ]
  },
  resolve: {
    // ERROR: [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    // Add this line: 
    alias: {
      // vue: "vue/dist/vue.js"
      vue$: 'vue/dist/vue.esm.js' // Queremos leer los templates dentro de VUE.
    },
    extensions: ["*", ".js",".vue",".json"]
  },
  // Configuracion para desarrollo. Como se va a comportar el servidor de desarrollo
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  // Rendimiento: 
  // El bundle tiene un max de tamaño de 250kb puede dar un warning. Lo eliminamos.
  performance:{ 
    hints: false, 
  },
  // Como genera los fuentes. Si hay un error, que nos diga en que módulo se produce.
  devtool: "#eval-source-map",

  plugins: [
    new VueLoaderPlugin()
  ]
  
  /**
   * Aquí vendría la configuración para producción
   */
};