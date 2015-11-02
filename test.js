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
	var expected = fs.readFileSync('./examples/expected.png');
	var timeout = 12000;

	it('should scramble an image with default options', function(done) {
		this.timeout(timeout);
		return gulp.src(mainFile)
		.pipe(imgScramble())
		.pipe(rename(function (path) {
			path.basename += "-crop";
		}))
		.pipe(gulp.dest('./examples'))
		.pipe(through.obj(function (file, enc, callback) {
			expect(fs.readFileSync(outputFile)).to.not.be.null;
			fs.unlinkSync(outputFile);
			done();
		}));
	});

	it('should scramble an image with default seed (null)', function(done) {
		this.timeout(timeout);
		return gulp.src(mainFile)
		.pipe(imgScramble({
			sliceSize:5
		}))
		.pipe(rename(function (path) {
			path.basename += "-crop";
		}))
		.pipe(gulp.dest('./examples'))
		.pipe(through.obj(function (file, enc, callback) {
			expect(fs.readFileSync(outputFile)).to.not.be.null;
			fs.unlinkSync(outputFile);
			done();
		}));
	});


	it('should scramble an image with seed', function(done) {
		this.timeout(timeout);
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
			expect(fs.readFileSync(outputFile)).to.not.be.null;
			expect(fs.readFileSync(outputFile)).to.deep.equal(expected);
			fs.unlinkSync(outputFile);
			done();
		}));
	});
})
