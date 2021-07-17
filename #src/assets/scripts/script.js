/*_Function  support browser webp css_*/

@@include('main/_header-burger.js');
@@include('vendors/owl.carousel.min.js');

const querySell = x => document.querySelector(x);
const leftArrow = '<div class="receipts__wrapArrow receipts__wrapArrow_left"> <img src = "./assets/images/svg/arrow-left.svg" alt="left" class="receipts__arrowLeft">Чоловічий <br> одяг</div>';
const rightArrow = '<div class="receipts__wrapArrow receipts__wrapArrow_right">Жіночий <br> одяг <img src = "./assets/images/svg/arrow-right.svg" alt="right" class="receipts__arrowRight"></div>';

$(document).ready(function(){

  $('.receipts__carousel.owl-carousel').owlCarousel({
      items:1,
      dots: false,
      autoplay: true,
      nav: true,
      navText:[
          leftArrow,
          rightArrow

      ]
  });


  $('.reviewed__carousel.owl-carousel').owlCarousel({
    items:2,
    dots: false,
    autoplay: true,
    nav: false,
    loop: true,
    autoplayHoverPause:true,
    smartSpeed:500,
    autoplayTimeout:5000,

    responsive:{

      0:{
        items:1.2,
        margin: 15,
  

      },

      576:{
        items:3,
        margin: 15,
        stagePadding: 0,
      },

      768:{
        items:3,
        margin: 20
      },

      992:{
        items:4,
        margin: 30
      }


    }

  });

});

document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('resize' , debounce(resizePage,  11));

  resizePage()
  
  function resizePage(){
    console.log('1')
    if(window.innerWidth < 576) querySell('.cardsBox').appendChild(querySell('.card.card__4'));
    else querySell('.attention').appendChild( querySell('.card.card__4'));

    let footerDtat  =  document.querySelectorAll(".footer__date");
    (window.innerWidth < 768)? footerDtat.forEach(item => item.open = false): footerDtat.forEach(item => item.open = true)

    if(window.innerWidth < 400) querySell('.rights__wrapData').insertBefore(querySell('.rights__confidentiality'), querySell('.rights__protected') );
    else querySell('.rights').appendChild( querySell('.rights__confidentiality'));
  } 


  // Function debonce
  function debounce(callback , delay){
    let timer;
    return function(...args){
      clearTimeout(timer);
      timer = setTimeout(()=> {
        callback.apply(this , args)
      }, delay);
    }
  }


  // function throttle(callback , delay){

  //   let isWaiting = false;

  //   return function(...args){
  //         if(isWaiting) return;
  //         callback.apply(this , args);
  //         isWaiting = true;

  //         setTimeout(()=> isWaiting = false, delay)
  //   }

  // }

})


