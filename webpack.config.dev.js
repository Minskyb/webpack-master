/**
 * Created by ASUS on 2016/6/27.
 */

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var commonLib = new webpack.optimize.CommonsChunkPlugin({
	name:"commons",
	filename:'commons.js',
	minChunks:2,  // 被至少 2 个 chunks 引用才会被提炼出来。
	chunks:["index","home"]
});

module.exports = {
	devtool:'source-map',
	entry:{
		index:'./src/module/index.js',
		home:'./src/module/home.js',
	},
	output:{
		path:'./dist',
		filename:'[name].js',
		publicPath:'/static/',
		chunkFilename:"./async/[name].js"
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader'
			},
			{
				test:/\.less$/,
				loader: ExtractTextPlugin.extract('style','css?sourceMap','less?sourceMap')
			},
		]
	},
	plugins:[
		commonLib,
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('css/[name].css')
	],
	devServer:{
		hot:true
	}
}