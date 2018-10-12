/*
For now, we are using the @babel/polyfill package rather than the
@babel/runtime and @babel/plugin-transform-runtime packages.
*/
module.exports = function() {
  const presets = [
    [
      "@babel/env",
      {
        targets: {"browsers": ["> 1%", "last 2 versions"]},
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ];
  const plugins = [
    "@babel/plugin-syntax-dynamic-import"
  ];
  return {presets, plugins};
};