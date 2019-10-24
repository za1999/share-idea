$(document).ready(function () {
	$('.slider').tilesSlider('start');
	setInterval(function(){
		 $('.slider').tilesSlider('start');
	},4700)


})

var $slider = $('.slider-wrap');
var html = $slider.html();

// Options

var defaults = {

};

var effects = {
    'default': {
        x: 6,
        y: 4,
        random: true
    },
    simple: {
        x: 6,
        y: 4,
        effect: 'simple',
        random: true
    },
    left: {
        x: 1,
        y: 8,
        effect: 'left'
    },
    up: {
        x: 20,
        y: 1,
        effect: 'up',
        rewind: 60,
        backReverse: true
    },
    leftright: {
        x: 1,
        y: 8,
        effect: 'leftright'
    },
    updown: {
        x: 20,
        y: 1,
        effect: 'updown',
        cssSpeed: 500,
        backReverse: true
    },
    switchlr: {
        x: 20,
        y: 1,
        effect: 'switchlr',
        backReverse: true
    },
    switchud: {
        x: 1,
        y: 8,
        effect: 'switchud'
    },
    fliplr: {
        x: 20,
        y: 1,
        effect: 'fliplr',
        backReverse: true
    },
    flipud: {
        x: 20,
        y: 3,
        effect: 'flipud',
        reverse: true,
        rewind: 75
    },
    reduce: {
        x: 6,
        y: 4,
        effect: 'reduce'
    },
    360: {
        x: 1,
        y: 1,
        effect: '360',
        fade: true,
        cssSpeed: 600
    }
};
//var effect = 'defalut'
$('.slider').tilesSlider($.extend({}, defaults, effects['default']));