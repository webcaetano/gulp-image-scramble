var through = require('through2');
var imageScramble = require('image-scramble');

var utils = {
	extend:function(destObj) {
		for (var i = 1; i < arguments.length; i++) for (var key in arguments[i]) destObj[key] = arguments[i][key];
		return destObj;
	}
};

var defaults = {
	seed:'null',
	sliceSize:5
}

var self = function(options){
	options = utils.extend({},defaults,options);
	return through.obj(function (file, enc, callback) {
		imageScramble({
			image:file.contents,
			seed:options.seed,
			sliceSize:options.sliceSize,
			buffer:true
		},function(err,results){
			file.contents = results;
			callback(err,file)
		})
	})
}

module.exports = self;
