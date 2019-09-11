var carousels = document.querySelectorAll('#carousels .carousel');
var currentCarousel = 0;
var carouselInterval = setInterval(nextCarousel,5000); /* Интервал между картинками */
function nextCarousel(){
carousels[currentCarousel].className = 'carousel';
currentCarousel = (currentCarousel+1)%carousels.length;
carousels[currentCarousel].className = 'carousel demonstration';
}

function expand(id) {
      var tabs = document.querySelectorAll("div.tab"),
      texts = document.querySelectorAll("div.tab>p");
      console.log(id);

      if (texts[id].className == "displayed") {
        texts[id].className = "hidden";
        tabs[id].classList.remove("expanded");
      } else {
        for (var i = 0; i < texts.length; i++) {
          texts[i].className = "hidden";
          tabs[i].classList.remove("expanded");
          texts[id].className = "displayed";
          tabs[id].classList.add("expanded");
        }
      }
    };
