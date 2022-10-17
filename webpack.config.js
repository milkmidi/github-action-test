const webpack = require('webpack');
const path = require('path');
const BUILD_ENTRY = {
  // components
  aabbcc: './src/abc.js',
};

module.exports = (env, argv) => {
  console.log(`mode:${argv.mode}`);
  const IS_DEV_MODE = argv.mode === 'development';
  return {
    mode: process.env.NODE_ENV,
    devtool: IS_DEV_MODE ? 'inline-source-map' : false,
    entry: BUILD_ENTRY,
    output: {
      filename: '[name].bundle.js',
      chunkFilename: `[name]-chunk.bundle.js`,
      path: path.resolve(__dirname, 'assets'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', 'jsx'],
      alias: {
        '@': path.resolve('src'),
      },
    },    
  };
};
