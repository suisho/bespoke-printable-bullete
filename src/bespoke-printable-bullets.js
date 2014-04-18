bespoke.plugins.printableBullets = function(deck, options) {
  var getBullets = function(slide, options){
    // copy from bullets
    return [].slice.call(slide.querySelectorAll( (typeof options === 'string' ? options : '[data-bespoke-printable-bullet]') ), 0);

  }
  var appendNext = function(slide, nextSlide){
    slide.parentNode.insertBefore(nextSlide, slide.nextElementSibling)
  }
  deck.slides.forEach(function(slide) {
    var cloned = slide.cloneNode(true)
    //cloned.classList.add("bespoke-inactive")
    var bullets = getBullets(cloned, options)

    if(bullets.length < 1) return

    bullets.forEach(function(bullet){
      bullet.style.visibility = "hidden"
    })
    bullets.reverse().forEach(function(bullet){
      bullet.style.visibility = "visible"
      var c = cloned.cloneNode(true)
      appendNext(slide, c)
    })
	})
  // retake
  bespoke.from("article")
};
