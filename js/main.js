$(document).ready(function(){

  $('.sugar-name').click(function(){
    $(this).toggleClass('active');
    
    var meta = $(this).next(".sugar-meta");
    meta.toggleClass('visually-hidden');

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