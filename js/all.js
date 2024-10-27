$(document).ready(function(){
    $('.dropdown').click(function(event){
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
    });

    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    // Lightbox
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'maxHeight': 1024,
      'maxWeight': 1280,
    })
    // return to TOP button
    $('.returnTop').click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:0,opacity:0.8},700);
      $('html,body').animate({opacity:1});
    });
});