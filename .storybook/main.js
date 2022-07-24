const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/')
    config.module.rules.push({
      test: /\.s[ac]ss$/,
      use: [{
        loader: 'sass-loader',
        options: {
          additionalData: '@import "@/assets/style/variables.scss";',
        },
      }]
    })
    return config
  },
};