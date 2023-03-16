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
let burger = document.querySelector(".burger");
var x1 = document.querySelector(".hamb-content");
burger.onclick = function() {
  if (x1.style.display === "block") {
    x1.style.display = "none"; 
  } else {
    x1.style.display = "block";
  }
}



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

