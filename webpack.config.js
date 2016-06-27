/**
 * Created by ASUS on 2016/6/23.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var commonLib = new webpack.optimize.CommonsChunkPlugin({
	name:"commons",
	filename:'commons.js?[chunkhash:8]',
	minChunks:2,  // 被至少 2 个 chunks 引用才会被提炼出来。
	chunks:["index","home"]
})

module.exports = {
	entry:{
		index:'./src/module/index.js',  // 入口文件
		home:'./src/module/home.js'
	},
	output:{
		path:'./dist',  // 最后输出地址
		filename:'[name].js?[chunkhash:8]',  // 输出文件名字,
		chunkFilename: "./async/[name].[id].js"
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			},
			// {
			// 	test: /\.css/,
			// 	loader: 'style!css'
			// },
			{
				test:/\.less$/,
				loader: ExtractTextPlugin.extract('style','css','less')
			},
		]
	},
	plugins:[
		// new webpack.optimize.DedupePlugin(),
		// new webpack.optimize.OccurrenceOrderPlugin(),
		// new webpack.optimize.UglifyJsPlugin(),
		commonLib,
		new ExtractTextPlugin('css/[name].css',{
			allChunks:true,
			disable:false
		}),
		new HtmlWebpackPlugin({
			filename:'index.html',
			chunks:['index','commons'],
			template:'./src/template/index.html',
			// hash:true
		}),
		new HtmlWebpackPlugin({
			filename:'home.html',
			chunks:['home','commons'],
			template:'./src/template/home.html',
			// hash:true
		})
	]
}