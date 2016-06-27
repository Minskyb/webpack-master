/**
 * Created by ASUS on 2016/6/23.
 */

var Animal = require('../common/Animal');

var Cat = function(options){
	Animal.call(this,options)
}

Cat.prototype = Object.assign({},Animal.prototype,{
	constructor:Cat,
	say:function(message){
		console.log(this.name+": miao~~~~");
	}
})

module.exports = Cat;