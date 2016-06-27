/**
 * Created by ASUS on 2016/6/23.
 */



var Animal = function(options){

	this.name = "无名",
	this._setOptions(options);
}

Animal.prototype = Object.assign({},Animal.prototype,{
	constructor:Animal,
	_setOptions:function(options){
		this.options = Object.assign(this,options)
	},
	say:function(message){
		console.log(this.name+":  "+message);
	}
})

module.exports = Animal;