const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /(scss)$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader', {
					loader: 'postcss-loader',
					options: {
						plugins: [require('autoprefixer')]
					}
				}]
			})
		}]
	},
  plugins: [
    new ExtractTextPlugin("styles.css"),
	],
	devServer: {
		host: '0.0.0.0'
	}
}