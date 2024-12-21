const path = require("path");
   
module.exports = {
    mode: "development",
    entry: "./app/index.jsx", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, "./public"),     // путь к каталогу выходных файлов - папка public
        publicPath: "/public/",
        filename: "bundle.js",       // название создаваемого файла
        //clean: true
    },
    devServer: {
        /*proxy: {
            '/api': {
                target: 'https://localhost:44325',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true,
            }},*/
     historyApiFallback: true,
     static: {
      directory: path.join(__dirname, "/"),
    },
     port: 8070,
     open: true
   },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:[ "@babel/preset-react"]    // используемые плагины
                }
            },
            {
                test: /\.css$/, // определяем тип файлов
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            } 
        ]
    }
}