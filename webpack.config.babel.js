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
			__STUDENT_ID__: JSON.stringify(config.studentId),
			__BACKEND__: JSON.stringify(config.backend),
		}),
	],
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: `babel-loader` }
		]
	}
}