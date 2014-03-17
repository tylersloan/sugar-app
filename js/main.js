$(document).ready(function(){

  $('.sugars li').click(function(){
    $(this).toggleClass('active');
    
    var meta = $(this).find(".sugar-meta");
    meta.toggleClass('is-visible');

    // if(meta.hasClass('visually-hidden')) {
    //   meta.removeClass('visually-hidden');
    // }
    // else {
    //   meta.addClass('visually-hidden');
    // }
  });

  $('.toggle-menu').click(function(){
    $('.nav').addClass('is-visible');
  });

  $('.close-nav').click(function(){
    $('.nav').removeClass('is-visible');
  });
});