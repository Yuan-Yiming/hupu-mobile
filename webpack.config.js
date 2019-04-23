
var webpack = require('webpack');
var path = require('path');

module.exports = {
	// 页面入口文件
	entry: path.join(__dirname, 'src/index.js'),
	// 入口文件输出配置
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'./dist'),
	},
	// 
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.scss/,
				// 跟上面use数组用法一样
				loader: 'style-loader!css-loader!sass-loader',
			},
			{
				test:/\.(png|jpg)$/,
				loader: 'url-loader?limit=1024',
			},
		]
	}

};