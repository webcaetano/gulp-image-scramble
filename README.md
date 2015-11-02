# Gulp Image Scramble

GulpJS module for image-scramble with seed

[![npm version](https://img.shields.io/npm/v/gulp-image-scramble.svg?style=flat-square)](https://www.npmjs.com/package/gulp-image-scramble) 
[![Build Status](https://img.shields.io/travis/webcaetano/gulp-image-scramble.svg?style=flat-square)](https://travis-ci.org/webcaetano/gulp-image-scramble) 
[![npm donwloads](https://img.shields.io/npm/dt/gulp-image-scramble.svg?style=flat-square)](https://www.npmjs.com/package/gulp-image-scramble) 

Scramble/Unscramble Images

Very useful for protect canvas spritesheets.

### Example

#### Scramble (Server-Side)
![](http://i.imgur.com/4oReaij.png)

#### Unscramble (Client-Side)
![](http://i.imgur.com/AwfN1Gq.png)

### Usage Example

```javascript
var imgScramble = require('gulp-image-scramble');

gulp.src(mainFile)
.pipe(imgScramble({
	seed:'Kappa',
	sliceSize:5
}))
.pipe(gulp.dest('./dist'))
```

## Options

#### seed
- Seed to shuffle in same sequence

#### sliceSize
- size of each slice

### Installation 

```
npm install gulp-image-scramble
```


## UnsrcambleImg (Client-Side)

#### Installation
```
bower install unscramble-img
```

#### Usage 

```javascript
// unscrambleImg(src,sliceSize,seed)

var canvas = unscrambleImg(img,sliceSize,'Kappa');
```

#### Phaser Example

```javascript
var bmp = unscrambleImg(img,sliceSize,'Kappa',game.add.bitmapData(img.width,img.height));
var sprite = game.add.sprite(0, 0, bmp);
```
