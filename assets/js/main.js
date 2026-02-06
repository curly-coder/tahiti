$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,         
    autoplaySpeed: 800,   
    arrows: false,
    infinite: true,          
    dots: false,            
    fade: true,   
  });
});

$(document).ready(function(){
  function initSlider() {
    if ($(window).width() < 1024) {
      if (!$('.islands-slider').hasClass('slick-initialized')) {
        $('.islands-slider').slick({
          slidesToShow: 2,  
          slidesToScroll: 1, 
          arrows: false,   
          dots: false,     
          infinite: false, 
          swipeToSlide: true,
          responsive: [
            {
              breakpoint: 490,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    } else {
      if ($('.islands-slider').hasClass('slick-initialized')) {
        $('.islands-slider').slick('unslick');
      }
    }
  }

  initSlider();
  $(window).resize(function(){
    initSlider();
  });
});

document.querySelector('.explore-btn').addEventListener('click', function() {
  const select = document.querySelector('.island-select');
  const value = select.value;
  if (value) {
    alert("You selected: " + value);
  }
});

