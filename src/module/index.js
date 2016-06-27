/**
 * Created by ASUS on 2016/6/23.
 */
require('babel-polyfill');
require('../less/common.less')
require('../less/index.less')


var $ = require('jquery');

var Cat = require('../component/Cat');

var cat = new Cat({name:"猫猫"});

$(function(){
	cat.say("hello");
})