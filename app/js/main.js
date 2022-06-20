$(function() {
  
  $('.shop-content__filter-btn').on('click', function() {
    $('.shop-content__filter-btn').toggleClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function() {
    $('.product-item').addClass('product-item--list');
      
  })

  $('.button-grid').on('click', function() {
    $('.product-item').removeClass('product-item--list');
      
  })

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

$(function() {
	$('.select-style').styler();
});


$(function() {
  var mixer = mixitup('.categories__items');
});

$(function() {
 $('.filter-price__input').ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 100,
    to: 500,
    step: 5,
    prefix: "$",
     onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
     },
      onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
        },
    });
});

