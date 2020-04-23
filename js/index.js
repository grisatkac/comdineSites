/*const initializeSlick = () => {
  $(".slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      mobileFirst: true,
      centerPadding: '60px',

      responsive: [
          {
              breakpoint: 768,
              settings: "unslick"
          }
      ]
  });

  $(".slider").slick("resize");
}

$(window).on("resize", () => {
  if (document.documentElement.clientWidth < 1200) {
      if (!$(".slider").hasClass("slick-initialized")) {
          $(".slider").slick({
              dots: true,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              arrows: false,
              slidesToScroll: 1,
              mobileFirst: true,
              responsive: [
                  {
                      breakpoint: 1000,
                      settings: {
                          slidesToShow: 2,
                      }
                  },
                  {
                      breakpoint: 1200,
                      settings: "unslick"
                  }
              ]
          });
      }
      $(".advantages-slider").slick("resize");
      $(".course-slider").slick("resize");
  }
});

$(document).ready(() => {
  initializeSlick();
});*/

const initializeSlick = () => {
  $(".slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
          {
              breakpoint: 768,
              settings: "unslick"
          }
      ]
      
  });

  $(".second-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
          breakpoint: 768,
          settings: "unslick"
      }
  ]
    
});

 
  $(".slider").slick("resize");
  $(".second-slider").slick("resize");
}

$(window).on("resize", () => {
  if (document.documentElement.clientWidth < 768) {
      $(".slider").slick("resize");
      $(".second-slider").slick("resize");
  }
});



$(document).ready(() => {
  initializeSlick();
});


const mobileMenu = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
let isOpened = false;

mobileMenu.addEventListener('click', () => {
    if (isOpened) {
        menu.style.transform = 'translateY(-101%)';
        isOpened = false;
    }
    else {
        menu.style.transform = 'translateY(-1%)';
        isOpened = true;
    }
});

/* slider */
/* -1- -2- -3- */



/*const container = document.querySelector('.container');*/
/*const demobtn = document.querySelector('.demo-btn');*/
/*const widthSlide = document.querySelector(".slide").offsetWidth;
console.log(document.querySelector(".slide"));
console.log(document.querySelector(".slide").offsetWidth);*/

/*demobtn.addEventListener('click',(e) => {
    e.preventDefault();
    document.querySelector("#slide2").setAttribute('checked', '');
});*/

/*const goRight = (currentSlide, targetSlide) => {
    position -= (targetSlide - currentSlide)*widthSlide;
    container.style.transform = `translateX(${position}px)`;
}

const goLeft = (currentSlide, targetSlide) => {
    position += (currentSlide - targetSlide)*widthSlide;
    container.style.transform = `translateX(${position}px)`;
}


const controls = document.querySelector('.controls');
controls.addEventListener('click', (e) => {  
  if(activeSlide == e.target.value) {      
      return;
  } else if (activeSlide < e.target.value ) {
      goRight(activeSlide, e.target.value);
      activeSlide = e.target.value;

  } else if (activeSlide > e.target.value ) {
      goLeft(activeSlide, e.target.value);
      activeSlide = e.target.value;
  }
});*/


let activeSlide = 1;
const controls = document.querySelector('.controls'),
      controls2 = document.querySelector('.childs').querySelector('.controls');
let position = 0;

var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('courses-list'),
    sliderItems2 = document.getElementById('courses-list2');
    console.log(sliderItems);
    console.log(sliderItems2);
    /*prev = document.getElementById('prev'),
    next = document.getElementById('next');*/
    console.log(slider);

function slide(control, items, prev, next) {
    console.log('function slide working');
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      
      slides = items.getElementsByClassName('slide1'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide1')[0].offsetWidth,
      threshold = slideSize / 2.5,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
      console.log(items.getElementsByClassName('slide1')[0]);

      console.log(slideSize);
      console.log(slidesLength);
      
  
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  /*wrapper.classList.add('loaded');*/
  
  // Mouse events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  /*prev.addEventListener('click', function () { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });*/
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);
  
  function dragStart (e) {
    console.log('----------------');
    console.log('function dragstart working');
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    /*console.log(window.event);*/
    console.log('start position:',posInitial);
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction (e) {
    console.log('function dragAction working');
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      /*console.log('posx1:', posX1); 
      console.log('posx2:', posX2);*/
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    console.log('function dragEnd working');
    posFinal = items.offsetLeft;
    /*console.log('final pos:', posFinal);
    console.log(posFinal - posInitial);*/
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    console.log('function shiftSlide working');
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }

      if (dir >= 1) {
        items.style.left = (posInitial - slideSize) + "px";
        index++;      
      } else if (dir <= -1) {
        items.style.left = (posInitial + slideSize) + "px";
        index--;  
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
    console.log('function checkIndex working');
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }
    console.log('index: ', index);
    
    allowShift = true;
  }

  const goRight = (currentSlide, targetSlide) => {
    console.log(currentSlide, targetSlide);
    position = -(targetSlide - currentSlide + 1)*slideSize;
    console.log('position',position);  
    /*container.style.transform = `translateX(${position}px)`;*/
    items.style.left = `${position}px`;
  }
  
  const goLeft = (currentSlide, targetSlide) => {
    position = -(currentSlide - targetSlide +1)*slideSize;
    /*container.style.transform = `translateX(${position}px)`;*/
    items.style.left = `${position}px`;
  }

  control.addEventListener(`${'click' || 'touchstart' }`, (e) => { 
    let targetPosition = +e.target.value;
    console.log(targetPosition);
    console.log('current position: ', index);
    console.log('target position', e.target.value); 
    /*if(index == e.target.value) {      
      console.log('ничего не перемещаем');
        return;
    } else if (index < e.target.value ) {
        console.log('перемещаем вправо');
        goRight(index, e.target.value);
        index = e.target.value;
  
    } else if (index > e.target.value ) {
      console.log('перемещаем влево');
        goLeft(index, e.target.value);
        index = e.target.value;
    } else {
      console.log('error');
    }*/
    if(index !== +e.target.value ) {
      console.log('ok');
      items.style.left = `${-targetPosition*slideSize}px`;
      index = e.target.value;
    }
  });
}
console.log('length doc: ', document.body.offsetWidth);
/*slide(slider, sliderItems, prev, next);*/
if ( document.body.offsetWidth < 768 ) {
  slide(controls,sliderItems );
  slide(controls2, sliderItems2);
}




