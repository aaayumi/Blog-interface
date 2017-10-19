(function ($) {
    'use strict';

jQuery(document).ready(function () {

// Preloader 
$( ".preloader" ).delay(800).fadeOut( "slow", function() {
});
   
// Show scroll up bar
  $(window).scroll(function() {
    if ($(this).scrollTop()< 100)
     {
        $('.scroll').fadeOut();
     }
    else
     {
      $('.scroll').fadeIn();
     }
 });

// Scroll up to top
$(".scroll").click(function(){
    $("html, body").animate({ scrollTop: 0}, "slow");
});

// load post
$(".loadPost").click(function(){
    $("#postFifth").css({ 'display' : '' });
    $(this).html("End");
    console.log("click")
})

// load portfolio
$(".loadPortfolio").click(function(){
    $("#portfolioFourth").css({ 'display' : '' });
    $(this).html("End");
    console.log("click")
})

// show nav bar {
$("#navBar .navShow").click(function(){
    if( $("#navBar .nav").hasClass( "show" )) {
         $("#navBar .nav").css({ 'display' : '' });
         $("#navBar .nav").removeClass("show");
    } else {
         $("#navBar .nav").css({ 'display' : 'none' });
         $("#navBar .nav").addClass("show");
    }
     console.log("click")
})

});

})(jQuery);
