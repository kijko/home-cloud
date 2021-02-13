const HtmlWebPackPlugin = require("html-webpack-plugin");
const DevServerConfig = require("./webpack-dev-server.config");

module.exports = {
    "mode": "development",
    "entry": "./src/index.tsx",
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js"
    },
    // "devtool": "source-map",
    "module": {
        "rules": [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader"
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                "test": /\.html$/,
                "use": [
                    {
                        "loader": "html-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    "plugins": [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    "devServer": DevServerConfig,
};
