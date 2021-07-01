const withSass = require('@zeit/next-sass');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {

    webpack(config, ...args) {
        config = withSass().webpack(config, ...args);
        config.plugins = config.plugins || [];
        config.plugins = [
          ...config.plugins,
          new Dotenv({
            path: path.join(__dirname, '.env'),
            systemvars: true,
          }),
        ];
    
    
        return config;
      },
    // Webpack 5 is enabled by default
    // You can still use webpack 4 while upgrading to the latest version of Next.js by adding the "webpack5: false" flag
    webpack5: false,
  }