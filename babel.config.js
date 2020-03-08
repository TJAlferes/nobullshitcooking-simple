module.exports = function(api) {
  api.cache(true);  // ?
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {"browsers": ["> 1%", "last 2 versions"]},
        useBuiltIns: "usage",
        "corejs": "3"
      }
    ],
    "@babel/preset-react"
  ];
  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {"regenerator": true}
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-export-default-from"
  ];
  return {presets, plugins};
};