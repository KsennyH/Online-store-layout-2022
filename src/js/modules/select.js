module.exports = (name) => {
    const element = document.querySelector(name);
    const choices = new Choices(element, {
      searchEnabled: false,
    });
  
    let ariaLabel = element.getAttribute('aria-label');
    element.closest('.choices').setAttribute('aria-label', ariaLabel);
};