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
        // loop: true,
        navText:[
            leftArrow,
            rightArrow

        ]
    });

  });



window.addEventListener('resize' ,resizePage )
 
  resizePage()

  function resizePage(){

    if(window.innerWidth < 576) {

            querySell('.cardsBox').appendChild( querySell('.card.card__4'))
     
    }
    else if(window.innerWidth > 576){

         querySell('.attention').appendChild( querySell('.card.card__4'))
    }

  }





