const { override,babelInclude } = require("customize-cra");
const path = require("path");

const customizeCraOverride = override(
  babelInclude([
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "../shared"),
  ])
)
const webpack = (config, env) => {
  const webpackConfig = customizeCraOverride(config, env);

  return {
    ...webpackConfig,
  };
};

module.exports = {
  webpack
}
