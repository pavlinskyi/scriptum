'use strict';
if (!window.console) window.console = {};
if (!window.console.memory) window.console.memory = function() {};
if (!window.console.debug) window.console.debug = function() {};
if (!window.console.error) window.console.error = function() {};
if (!window.console.info) window.console.info = function() {};
if (!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if (!Modernizr.flexbox) {
    (function() {
        var
            $pageWrapper = $('#page-wrapper'),
            $pageBody = $('#page-body'),
            noFlexboxStickyFooter = function() {
                $pageBody.height('auto');
                if ($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
                    $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
                } else {
                    $pageWrapper.height('auto');
                }
            };
        $(window).on('load resize', noFlexboxStickyFooter);
    })();
}
if (ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
    (function() {
        var
            $pageWrapper = $('#page-wrapper'),
            $pageBody = $('#page-body'),
            ieFlexboxFix = function() {
                if ($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
                    $pageWrapper.height($(window).height());
                    $pageBody.removeClass('flex-none');
                } else {
                    $pageWrapper.height('auto');
                }
            };
        ieFlexboxFix();
        $(window).on('load resize', ieFlexboxFix);
    })();
}

$(function() {

$('.hamburger').click(function(e) {
    console.log("1");
    $(this).toggleClass('close');
});


var $container = $('#container');
// Инициализация
var width = $(".item").outerWidth();
console.log(width);
$container.masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.item'
});

var progressbar = $('.progressbar');
console.log(progressbar.length);

progressbar.each(function(i, elem) {
    console.log($(this).find('progress'));
    var value = $(this).find('progress').val();
    console.log("value=", value);
    $(this).find('.bar__value').append(value + '%');
    $(this).find(".bar__value").css("left", value + '%');
});



$('.slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
});
});
// value = progressbar2.val();
// console.log(value);
// $('#progressbar2 .bar__value')




// value = progressbar3.val();
// console.log(value);
// $('#progressbar3 .bar__value').append(value + '%');
// $("#progressbar3 .bar__value").css("left", value + '%');

// // placeholder
// //-----------------------------------------------------------------------------


