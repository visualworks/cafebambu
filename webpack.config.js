const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const package = require("./package.json");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react"]
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.(css|scss|less|sass)$/,
                include: [
                    path.resolve(__dirname, "src/css")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: ["file-loader"]
            },
            {
                test: /\.(jpeg|jpg|gif|png|svg)(\?.*$|$)/,
                loader: ["file-loader?name=/img/[name].[ext]"]
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve("./src")
        ],
        extensions: [".js", ".jsx", ".scss", ".json"]
    },
    performance: {
        hints: "warning",
        maxAssetSize: 600000,
        maxEntrypointSize: 600000,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
        }
    },
    devtool: "cheap-module-source-map", // "source-map" | eval" || "cheap-module-source-map" || "cheap-source-map" || "eval-source-map" || "inline-source-map"
    target: "web",
    stats: "detailed",
    plugins: [
        new UglifyJsPlugin(),
        new ExtractTextPlugin("./css/style.css"),
        new HTMLWebpackPlugin({
            title: "Café Bambú - Healthy, vegetarian and vegan food in Copenhagen, Denmark.",
            author: JSON.stringify(package.author),
            description: JSON.stringify(package.description),
            url: JSON.stringify(package.homepage),
            image: "http://cafebambu.dk/img/bambu-49-min.jpg",
            filename: path.resolve(__dirname, "dist/index.html"),
            template: path.resolve(__dirname, "src/index.html"),
            fbAppId: "977472475729200"
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "src/img"),
                to: path.resolve(__dirname, "dist/img")
            },
            {
                from: path.resolve(__dirname, "src/fonts"),
                to: path.resolve(__dirname, "dist/fonts")
            },
            {
                from: path.resolve(__dirname, "src/assets"),
                to: path.resolve(__dirname, "dist/assets")
            }
        ]),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        }),
    ],
    // advanced
    parallelism: 2,
    profile: true,
    cache: false,
    watch: true
};
