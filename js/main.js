$(document).ready(function() {
  //Chart active


  //exit project
  $('.exit-project,.buts-proj input[type="button"]').on('click',function(){
    $(this).closest('.dashboad-project').css('display','none');
  })

  //hide-project
  $('.hide-proj').append('<div class="hide-project"></div><div class="hide-project"></div>');
   $('.hide-proj').on('click',function(){
    if($(this).hasClass('hideProj')){
          $(this).find('.hide-project:first').css('transform','rotate(0deg)');
          $(this).removeClass('hideProj');
          $(this).closest('.dashboad-project').css({'height':'auto','overflow':'inhernit','min-height':'150px'});
      }else{
          $(this).find('.hide-project:first').css('transform','rotate(90deg)');
          $(this).addClass('hideProj');
          $(this).closest('.dashboad-project').css({'height':'37px','overflow':'hidden','min-height':'43px'});
      }
   })
  //dropzone
  $('.dz-default.dz-message span').html('Drop files here to attach them');
  $('.dz-default.dz-message').append('<br><a href="#">select files</a>');


  //checkbox begin
    $('input[type="checkbox"]').on('click',function(){
      if($(this).prop("checked")){
          $(this).addClass('check-active');
      } else{
          $(this).removeClass('check-active');
      }
    })
  //checkbox eng
  //select begin
  $('select').selectric();
  //select end

//left menu

  $('.menu-m').on('click',function(){
    if($('.side-bar').css('left') != '0px'){
      $('.side-bar').css({'left':'0'});
      $('.menu-m').css('background','url(img/menu-h.svg)no-repeat center');
    }else{
      $('.side-bar').css({'left':'-250px'});
      $('.menu-m').css('background','url(img/menu.svg)no-repeat center');
    }
  })




// left menu end
$('.a-menu').on('click',function(){
  $('.btn-group.visible-550.col-xs-6.no-padding').removeClass('open');
})

setTimeout(function(){
  $('.tracker-individual-container li').on('click', function(){
    var numbClick = $(this).find('div').text();
    var numbSlider = $('.tracker-individual-blip.tracker-individual-blip-selected').text();
    var nextSlide =  numbClick - numbSlider;

    if(nextSlide < 0){
     var thisSlide = -(nextSlide);
     var b = 0;
       function timeSet(){
         $('#carousel-left').trigger('click');
        b++;
         if(b == thisSlide){
            clearTimeout(intervalID);
            b = 0;
          }
       };
       var intervalID = setInterval(timeSet,1100);
    }

if(nextSlide > 0){
     var thisSlide = nextSlide
     var b = 0;
       function timeSet(){
        b++;
         $('#carousel-right').trigger('click');
         if(b == thisSlide){
            clearTimeout(intervalID);
            b = 0;
          }
       };
       var intervalID = setInterval(timeSet,1100);
    }
    
  });},500)


  var heightSlider = $('.owl-slider').height();

  //clear-header height=header-box
  var headerHeight = $('.header-container').height();
  var clearHeight = $('.clear-header-box');
  clearHeight.height(headerHeight);

  //buttom login
  $('.login-but').on('click',function(){
    if($('.popup-login').css('display') == 'none')
    $('.popup-login').css('display','block');
  else $('.popup-login').css('display','none');
  })


  //arrow-top
  var top_show = 150;
  var delay = 1000;
  $(document).ready(function() {
    $(window).scroll(function() {
      
      if ($(this).scrollTop() > top_show) $('.arrow-top').fadeIn()
      else $('.arrow-top').fadeOut()
    });
    $('.arrow-top').click(function() {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

  //anchor menu-click scroll
   $('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top - headerHeight+25
}, 1000);
e.preventDefault();
return false;
});

  // $(window).resize(function() {
  //   if ($(window).width() >= '995') {
  //     $('.contact-box').outerHeight(283);
  //   } else {
  //     var h_box = $('.feedback-box').height();
  //     $('.contact-box').height(h_box);
  //   }

  // });

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
       var minHeight = 100;
       if($('.menu').length > 0){
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
           $(window).unbind('scroll.once');
          $('#targetOne').animateNumber({ number: 3000},2000);
          $('#targetTwo').animateNumber({ number: 150000},3500);
          $('#targetThree').animateNumber({ number: 5000},2500);
        };
        setTimeout(function() {
        $('.tracker-summation-current,.tracker-summation-middle,.tracker-summation-total').css('display','none');
      },200)


     $(document).ready(function(){
        $(".owl-carousel").owlCarousel({ 
            center:true,
           loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        900:{
            items:3,
            nav:false
        }
    }
        });

      });
});
