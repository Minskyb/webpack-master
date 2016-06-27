/**
 * Created by ASUS on 2016/6/23.
 */
require('babel-polyfill');
require('../less/common.less')
require('../less/home.less')

var $ = require('jquery');
var People = require('../component/People');

var man = new People();

$(function(){
	man.say("hello");
	$(".but").click(function(){

		// 异步加载模块 ，
		// 第一参数为执行回调的前提，必须把 [] 中的模块全部载入（只需载入无需执行）后在执行
		// 第三参数为模块 chunk name
		// 里面所有 require 会被 chunk 到一起，当然要除掉 CommonsChunkPlugin 作用到的 require
		// 注意比较：require.amd
		require.ensure(['../component/Niu'],function(){
			var Niu = require('../component/Niu');
			new Niu().say();
		},'niu');
	})
})