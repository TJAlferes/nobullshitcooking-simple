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
    "@babel/plugin-transform-runtime"
  ];
  return {presets, plugins};
};