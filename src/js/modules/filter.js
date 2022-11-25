module.exports = (btn) => {
    btn.forEach(el => {
        el.addEventListener('click', function(evt) {
            let currentBtn = evt.currentTarget;
            let currentArrow = currentBtn.querySelector('.js-spoiler-arrow');
            currentArrow.classList.toggle('open');
            currentBtn.nextElementSibling.classList.toggle('show');
        });
    });
}