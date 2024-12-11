const path = require('path');

module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出目录
        filename: 'bundle.js', // 输出文件名
        publicPath: '/'
    },
    devServer: {
        static: path.join(__dirname, 'public'), // 静态文件目录
        historyApiFallback: true, // 支持HTML5 History API
        port: 3001, // 端口号
        open: true // 自动打开浏览器
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // 处理JS和JSX文件
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/, // 处理SCSS文件
                use: [
                    'style-loader', // 将CSS注入到DOM中
                    'css-loader',   // 解析CSS
                    'sass-loader'   // 编译Sass到CSS
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // 处理图片文件
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'] // 解析文件扩展名
    }
};
