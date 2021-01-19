module.exports = {
  webpack: (config, options) => {
    const isServer = options.isServer
    config.module.rules.push({
      test:/\.(png|jpg|jpeg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'static',
            publicPath: '_next/static'
          }
        }
      ],
    })

    return config
  },
}