/*
For now, we are using the @babel/polyfill package rather than the
@babel/runtime and @babel/plugin-transform-runtime packages.

    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-regenerator",
*/
module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          //node: "10",
          "browsers": ["> 1%", "last 2 versions"]
        },
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ];
  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ];
  return {presets, plugins};
};