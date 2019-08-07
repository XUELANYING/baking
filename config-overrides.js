const {
    override,
    fixBabelImports,
    addWebpackAlias
} = require("customize-cra")

const path = require("path")

module.exports = override(
    //利用antd按需加载
    fixBabelImports('import',{
        libraryName:'antd-mobile',
        libraryDirectory:"es",
        style:'css',
    }),
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "./src"),
        ["@views"]: path.resolve(__dirname, "./src/views"),
        ["@component"]: path.resolve(__dirname, "./src/component"),
        ["@router"]:path.resolve(__dirname,"./src/router"),
        ["@store"]:path.resolve(__dirname,"./src/store"),
        ["@asset"]:path.resolve(__dirname,"./src/asset")
    })
)



