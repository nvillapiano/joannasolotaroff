
$('.link-trigger').click( function() {
	var slug = $(this).attr('data-id');
	$('.main-content--copy, .modal--module').removeClass('show');
	setTimeout( function() {
        $('.footer--back').addClass('show');
		$('#' + slug).addClass('show');
	}, 10)
})

$('.footer--back').click( function() {
	$('.modal--module').removeClass('show');
    $('.main-content--copy').addClass('show');
    setTimeout( function() {
        $('.footer--back').removeClass('show');
    }, 10)
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
