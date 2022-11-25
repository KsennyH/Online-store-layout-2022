const btn = document.querySelectorAll('.js-btn');
const tab = document.querySelectorAll('.js-tab');

btn.forEach(el => {
  el.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget;
    let idTab = currentBtn.getAttribute('data-name');
    let currentTab = document.querySelector(idTab);

    if ( !currentBtn.classList.contains('active') ) {
      btn.forEach(el => {
        el.classList.remove('active');
      });

      tab.forEach(el => {
        el.classList.remove('active');
      });
    }

    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});
document.querySelector('.js-btn').click();

