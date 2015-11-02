var expect = require('chai').expect;
var imgScramble = require('./');
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var rename = require('gulp-rename');
var through = require('through2');


describe('image-scramble', function() {
	var mainFile = ['./examples/sample3.png'];
	var outputFile = './examples/sample3-crop.png';

	it('should scramble an image with default options', function(done) {
		this.timeout(5000);
		return gulp.src(mainFile)
		.pipe(imgScramble())
		.pipe(rename(function (path) {
			path.basename += "-crop";
		}))
		.pipe(gulp.dest('./examples'))
		.pipe(through.obj(function (file, enc, callback) {
			expect(fs.readFileSync(outputFile)).to.be.an('object');
			fs.unlinkSync(outputFile);
			done();
		}));
	});

	it('should scramble an image with default seed (null)', function(done) {
		this.timeout(5000);
		return gulp.src(mainFile)
		.pipe(imgScramble({
			sliceSize:5
		}))
		.pipe(rename(function (path) {
			path.basename += "-crop";
		}))
		.pipe(gulp.dest('./examples'))
		.pipe(through.obj(function (file, enc, callback) {
			expect(fs.readFileSync(outputFile)).to.be.an('object');
			fs.unlinkSync(outputFile);
			done();
		}));
	});


	it('should scramble an image with seed', function(done) {
		this.timeout(5000);
		return gulp.src(mainFile)
		.pipe(imgScramble({
			seed:'Kappa',
			sliceSize:5
		}))
		.pipe(rename(function (path) {
			path.basename += "-crop";
		}))
		.pipe(gulp.dest('./examples'))
		.pipe(through.obj(function (file, enc, callback) {
			expect(fs.readFileSync(outputFile)).to.be.an('object');
			fs.unlinkSync(outputFile);
			done();
		}));
	});
})
