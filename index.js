/*
    _           __              _
   (_)___  ____/ /__  _  __    (_)____
  / / __ \/ __  / _ \| |/_/   / / ___/
 / / / / / /_/ /  __/>  <_   / (__  )
/_/_/ /_/\__,_/\___/_/|_(_)_/ /____/
                         /___/

*/

$('.link-trigger').click( function() {
    var slug = $(this).attr('data-id');
    $('.main-content--copy, .modal--module').removeClass('show');
    setTimeout( function() {
        $('.footer--back').addClass('show');
        $('#' + slug).addClass('show');
    }, 10)
}) 

// 
$('.footer--back').click( function() {
	$('.modal--module').removeClass('show');
    $('.main-content--copy').addClass('show');
    setTimeout( function() {
        $('.footer--back').removeClass('show');
    }, 10)
})

$(document).ready( function() {
    setTimeout( function () {
        $('.letter').addClass('page-title__animate');
    }, 300)    
})

//

$.fn.equalize = function() {
    var maxHeight = 0;
    this.each(function(){
        if( $(this).height() > maxHeight ) {
            maxHeight = $(this).height();
        }
    });
    this.height(maxHeight);
};
// $('.bg img').equalize('.main-content--wrapper');


