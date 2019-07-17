const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateWebpackConfig = ({
  // eslint-disable-next-line no-unused-vars
  stage,
  // eslint-disable-next-line no-unused-vars
  getConfig,
  // eslint-disable-next-line no-unused-vars
  rules,
  // eslint-disable-next-line no-unused-vars
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};
