const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "none",
    entry: "./src/entry.ts",
    target: "node",
    devtool: "source-map",
    externals: [
        nodeExternals({
            whitelist: [/ask-sdk/, /dayjs/]
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"]
    },
    output: {
        libraryTarget: "commonjs",
        path: path.resolve(__dirname, "lambda/custom"),
        filename: "index.js"
    }
};