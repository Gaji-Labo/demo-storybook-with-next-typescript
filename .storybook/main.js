// from: https://storybook.js.org/docs/configurations/typescript-config/#setting-up-typescript-with-babel-loader

module.exports = {
  stories: ["../components/**/*.stor{ies,y}.{t,j}sx"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
