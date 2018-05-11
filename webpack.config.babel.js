import {DefinePlugin} from 'webpack'
import config from './src/config'

const superStringify = str => `'${str}'`

export default {
	devtool: `eval-cheap-module-source-map`,
	entry: `./src/client.js`,
	output: {
		path: `${__dirname}/public/js`,
		filename: `app.js`,
		libraryTarget: `var`,
		library: `MyApp`
	},
	plugins: [
		new DefinePlugin({
			__STUDENT_ID__: superStringify(config.studentId),
			__BACKEND__: superStringify(config.backend),
		}),
	],
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: `babel-loader` }
		]
	}
}
