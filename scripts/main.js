bespokePrintableBullets('article','li, .bullet', function(from, b){
  bespoke.from(from, {
    keys: true,
    touch: true,
    bullets: ".disabled",
    scale: true,
    hash: true,
    progress: true,
    state: true,
    forms: true
  });
})
