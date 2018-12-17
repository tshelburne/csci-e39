import fs from 'fs'
import {promisify as p} from 'util'

import {DefinePlugin} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import config from './src/config'

export default async (env, argv) => {
	const production = argv.mode === `production`

	const studentId = await p(fs.readFile)(`${__dirname}/.id`, `utf8`)
	const backend = production ? `csci-e39.herokuapp.com` : `localhost:${config.port}`

	return {
		devtool: `eval-cheap-module-source-map`,
		entry: `./src/client.js`,
		output: {
			path: `${__dirname}/public`,
			filename: `app.js`,
			libraryTarget: `var`,
			library: `MyApp`
		},
		plugins: [
			new DefinePlugin({
				__STUDENT_ID__: JSON.stringify(studentId),
				__BACKEND__: JSON.stringify(backend),
			}),
			new HtmlWebpackPlugin({template: `src/index.html`}),
			new MiniCssExtractPlugin({
				filename: `[name].css`,
				chunkFilename: `[id].css`
			})
		],
		module: {
			rules: [
				{ test: /\.js$/, exclude: /node_modules/, loader: `babel-loader` },
				{
					test: /\.css$/,
					use: [`style-loader`, `css-loader`],
				},
				{
					test: /\.scss$/,
					use: [
						production ? `style-loader` : MiniCssExtractPlugin.loader,
						`css-loader`,
						`sass-loader`,
					],
				},
				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					use: [{
						loader: `file-loader`,
						options: {
							name: `[name].[ext]`,
							outputPath: `fonts/`,
						},
					}],
				},
			],
		}
	}
}