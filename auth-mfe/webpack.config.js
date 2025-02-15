const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "codenv",
    projectName: "auth-mfe",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        // other rules

        {
          test: /\.scss$/,
          use: [
            "style-loader", // Injects styles into the DOM
            "css-loader", // Resolves CSS imports and dependencies
            "sass-loader", // Compiles SCSS to CSS
          ],
        },
      ],
    },
  });
};
