import merge from "webpack-merge";
import common from "./webpack.common.js";

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./",
        watchContentBase: true,
        open: "Google Chrome"
    }
});
