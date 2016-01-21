$(document).ready(function() {

  //clear-header height=header-box
  var headerHeight = $('.header-container').height();
  var clearHeight = $('.clear-header-box');
  clearHeight.height(headerHeight);



  //arrow-top
  var top_show = 150;
  var delay = 1000;
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > top_show) $('.arrow-top').fadeIn();
      else $('.arrow-top').fadeOut();
    });
    $('.arrow-top').click(function() {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

  //anchor menu-click scroll
  $('a[href^="#"]').click(function() {
    var el = $(this).attr('href');
    $('body').animate({
      scrollTop: $(el).offset().top - headerHeight
    }, 1000);
    return false;
  });
  $(window).resize(function() {
    if ($(window).width() >= '995') {
      $('.contact-box').outerHeight(283);
    } else {
      var h_box = $('.feedback-box').height();
      $('.contact-box').height(h_box);
    }

  });

  //active menu
  $('.menu>ul>li>a').on('click',function(){
  $('.menu>ul>li>a.active').removeClass();
    $(this).addClass('active');
  });

    $(window).scroll(function() {
       var hedOffset = $('.login-container').offset();
       var bordOffset = $('.border-b').offset();
       var pricOffset = $('.pricing ').offset();
       var regOffset = $('.registration-container').offset();
       var conOffset = $('body').height();
       var minHeight = 65;
       if($(this).scrollTop() > hedOffset.top-minHeight)
       {
         $('.menu>ul>li>a.active').removeClass();
          $('.menu>ul>li>a:eq(0)').addClass('active');
       }
       if($(this).scrollTop() > bordOffset.top-minHeight)
       {
         $('.menu>ul>li>a.active').removeClass();
          $('.menu>ul>li>a:eq(1)').addClass('active');
       }
       if($(this).scrollTop() > pricOffset.top-minHeight)
       {
         $('.menu>ul>li>a.active').removeClass();
          $('.menu>ul>li>a:eq(2)').addClass('active');
       }
       if($(this).scrollTop() > regOffset.top-minHeight)
       {
         $('.menu>ul>li>a.active').removeClass();
          $('.menu>ul>li>a:eq(3)').addClass('active');
       }
       if($(this).scrollTop() > regOffset.top+50)
       {
         $('.menu>ul>li>a.active').removeClass();
          $('.menu>ul>li>a:eq(4)').addClass('active');
       }
       if($(this).scrollTop() > 1200)
       {
          $('.contact-box').addClass('bounceInLeft animated');
          $('.feedback-box').addClass('bounceInRight animated');
       }
    });
        var carousel = $("#carousel").featureCarousel({
          // include options like this:
          // (use quotes only for string values, and no trailing comma after last option)
          // option: value,
          // option: value
        });
        

        $(window).bind('scroll.once', function(){ 
           show_graphics();        
        });
        function show_graphics() {
           $(window).unbind('scroll.once')
          $('#targetOne').animateNumber({ number: 3000},2000)
          $('#targetTwo').animateNumber({ number: 150000},3500)
          $('#targetThree').animateNumber({ number: 5000},2500)
        };
        setTimeout(function() {
        $('.tracker-summation-current,.tracker-summation-middle,.tracker-summation-total').css('display','none');
      },500)
});
