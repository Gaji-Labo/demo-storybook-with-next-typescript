module.exports = {
  // via. https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
  webpack: (config, { webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\.stor(ies|y).[tj]sx$/));
    return config;
  },
};
