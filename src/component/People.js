/**
 * Created by ASUS on 2016/6/23.
 */

var Animal = require('../common/Animal');

var People = function(options){
	Animal.call(this,options)
}

People.prototype = Object.assign({},Animal.prototype,{
	constructor:People,
	job:function(job){
		console.log("I'm people my job is " + job);
	}
})

module.exports = People;