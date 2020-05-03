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
const header = document.querySelector('.header');
const contactUsBtn = document.querySelector('#contact-us');
const modalContactUs = document.querySelector('.modal-contact-us-wrapper');
let menuOpened = false;
let previousPosition = 0;

mobileMenu.addEventListener('click', () => {
    if (menuOpened) {
        menu.style.transform = 'translateY(-101%)';
        menuOpened = false;
    }
    else {
        menu.style.transform = 'translateY(-1%)';
        menuOpened = true;
    }
});

window.addEventListener("scroll", () => {
        const currentScrollPosition = pageYOffset + document.documentElement.clientHeight;
        if (document.documentElement.clientWidth < 1025) return;
        if (pageYOffset < 70) {
            header.classList.remove("scroll-down");
            header.style.boxShadow = 'none';
        }
        else {
            if (currentScrollPosition > previousPosition) {
                header.classList.add("scroll-down");
                header.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.12)';
            }
            else if (currentScrollPosition < previousPosition) {
                header.classList.remove("scroll-down");
                header.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.12)';
            }
            previousPosition = currentScrollPosition;
        }
});

window.addEventListener("resize", () => {
        if (document.documentElement.clientWidth < 1000) {
            header.classList.remove("scroll-down");
            header.style.boxShadow = 'none';
        }
        if (document.documentElement.clientWidth > 1000 && pageYOffset > 70) {
            header.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.12)';
        }
});

const jumpToLink = (link) => {
    let top = document.getElementsByClassName(link)[0].offsetTop;

    window.scrollTo(0, top);
    /*document.querySelector(".mobile-menu-wrap").style.transform = "translateY(-100%)";*/
    menu.style.transform = "translateY(-101%)";
    menuOpened = false;
};

contactUsBtn.addEventListener('click', () => {
    modalContactUs.style.display = "flex";
    document.getElementById('html').style = 'overflow-y: hidden';

})





