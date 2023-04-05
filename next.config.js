/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


// Configuracion de sass para next.js

const path = require('path')

module.exports = {
  webpack: (config, { webpack }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-loader',
          options: {
            additionalData: `@import "styles/globals";`,
            sassOptions: {
              includePaths: [path.join(__dirname, 'styles')],
            },
          },
        },
      ],
    })
    return config
  },
}