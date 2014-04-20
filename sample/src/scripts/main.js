bespokeBullets('article','li, .bullet', function(from, b){
  bespoke.from(from, {
    keys: true,
    touch: true,
    //bullets: b,
    scale: true,
    hash: true,
    progress: true,
    state: true,
    forms: true
  });
})
