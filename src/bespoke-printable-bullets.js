bespoke.plugins.printableBullets = function(deck, options) {
  // copy from bullets
  var getBullets = function(slide, options){
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
    bullets.forEach(function(bullet){
      var clonedNextSlide = cloned.cloneNode(true)
      slide.parentNode.insertBefore(clonedNextSlide, slide)
      bullet.style.visibility = null
    })
	})
  //want rebuild form....
};
bespokeBullets = function(selectorOrElement, pluginOpt, cb){
  var parent = selectorOrElement.nodeType === 1 ? selectorOrElement : document.querySelector(selectorOrElement)
	var slides = [].filter.call(parent.children, function(el) { return el.nodeName !== 'SCRIPT'; })
  mockDeck = {
    slides : slides
  }
	bespoke.plugins.printableBullets(mockDeck, pluginOpt)
  cb(selectorOrElement, pluginOpt)
}
