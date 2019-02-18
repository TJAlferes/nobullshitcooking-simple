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
        targets: {"browsers": ["> 1%", "last 2 versions"]},
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties"
  ];
  return {presets: presets, plugins: plugins};
};