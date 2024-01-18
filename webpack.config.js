const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle-js', 
        path: path-resolve(__dirname, '/dist'),
        clean : true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', 'js'],
    }
    plugins: [
        new HtmlwebpackPlugin({
            title: "KRUPA-ASSIGNMENT"
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/, 
                use: ['style-loader' , 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[ext]'
                        },
                    },
                ],
            },
        ],
    },
    devserver: {
        static: {
            directory: path-join(__dirname, 'dist'),
        },
        compress: true, 
        port: 3000,
    }
};
