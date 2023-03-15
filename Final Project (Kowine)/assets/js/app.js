$('.section7_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  

  $('.section2_slider_about').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  
  $('.section5_slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.section3_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.section1_slider_shop').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.section3_slider_details').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.main_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

function initSlider(){
    $('.references').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
    });
}


jQuery(document).ready(function(){


  var slickobject = null;
   jQuery(window).trigger('resize');
   jQuery(window).resize(function() {
      if(jQuery(window).width() < 640){
          $slickobject = jQuery('#slider').slick({}); 
          jQuery('.date-nav-1').click(function(){
              $slickobject.slick('slickGoTo','0');
          });
          jQuery('.date-nav-2').click(function(){
              $slickobject.slick('slickGoTo','1');
          });
          jQuery('.date-nav-3').click(function(){
              $slickobject.slick('slickGoTo','2');
          });

          jQuery('#slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
              if(currentSlide == '0'){
                  jQuery('.date-nav-1').addClass('active');
                  jQuery('.date-nav-3').removeClass('active');
                  jQuery('.date-nav-2').removeClass('active');
              }
              else if(currentSlide == '1'){
                  jQuery('.date-nav-2').addClass('active');
                  jQuery('.date-nav-1').removeClass('active');
                  jQuery('.date-nav-3').removeClass('active');
              }
              else if(currentSlide == '2'){
                  jQuery('.date-nav-3').addClass('active');
                  jQuery('.date-nav-2').removeClass('active');
                  jQuery('.date-nav-1').removeClass('active');
              } 
               console.log(currentSlide);
          });
            // left
      }
      else if((jQuery(window).width() > 639) && (jQuery(window).width() < 960))
      {
              $slickobject = jQuery('#slider').slick({slidesToShow: 2});
              jQuery('.date-nav-1').click(function(){
                  $slickobject.slick('slickGoTo','0');
              });
              jQuery('.date-nav-3').click(function(){
                  $slickobject.slick('slickGoTo','1');
              });                         
              jQuery('#slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
              if(currentSlide == '0'){
                  jQuery('.date-nav-1').addClass('active');
                  jQuery('.date-nav-3').removeClass('active');
              }
              else if((currentSlide == '1') || (currentSlide == '2')){
                  jQuery('.date-nav-3').addClass('active');
                  jQuery('.date-nav-1').removeClass('active');
              }
              console.log(currentSlide);
          });
      }
      else {
          $slickobject.slick('unslick');
      }
});

});


const sections = document.querySelectorAll('.section1, .section2, .section3');
const links = document.querySelectorAll('.bottom-links a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const selectedLink = e.target;
    const selectedSectionClass = `.section${selectedLink.textContent}`;
    
    sections.forEach(section => section.style = 'opacity: (0); visibility: hidden;');
    document.querySelector(selectedSectionClass).style = 'opacity: (1); visibility: visible;';
    
    links.forEach(link => link.classList.remove('active'));
    selectedLink.classList.add('active');
  });
});

const slider = document.querySelector('.slider');
const bigImage = document.querySelector('.big-image');
const images = slider.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', () => {
    bigImage.style.backgroundImage = `url(${image.src})`;
  });
});


let counter=Number(document.getElementById('counter_h1').textContent);
let button2=document.getElementById('plus_button');
let button3=document.getElementById('minus_button');
button2.onclick=function(){
    if(counter>=0){
        counter++;
        document.getElementById('counter_h1').innerHTML=counter;
    }
}
button3.onclick=function(){
    if(counter>0){
        counter--;
        document.getElementById('counter_h1').innerHTML=counter;
    }
}

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
