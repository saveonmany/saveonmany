$(function(){
	//修改dom结构
	$('body').addClass('saveonmany')
	$('.sub-nav').prepend($('.lev1'))
	$('.indexTabBox').append($('#CentralArea'))
	$('.indexTabRight').append($('.v4topleft>table, .v4topright>table'))
	$('.indexTabRight').append($('#LeftPanel'))

	//sub-nav display
	$('.menu-category').hover(function(){
    $('.sub-nav').show()
    },function(){
    $('.sub-nav').hide()
  });

	//banner carousel
	$(".carousel-control-prev").click(function(){
	  $("#carousel").carousel("prev");
	});
	$(".carousel-control-next").click(function(){
	  $("#carousel").carousel("next");
	});
})