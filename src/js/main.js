const Spoiler = document.querySelectorAll('.js-spoiler-btn');

const select = require('./modules/select');
const spoiler = require('./modules/filter');
const mainSlider = require('./modules/main-slider');
const slider = require('./modules/slider');
const cardSlider = require('./modules/card-slider');

select('.js-city');
spoiler(Spoiler);
mainSlider();
slider();
cardSlider();
select('.js-type');
select('.js-value');

