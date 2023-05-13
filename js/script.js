var icon =  document.querySelector('.humberger__icon');
var navbar = document.querySelector('nav');
var body = document.body

icon.addEventListener('click', () => {
    if(navbar.classList.contains('is-active'))  {
        navbar.classList.remove('is-active');
        body.classList.remove('no-scroll');
    }
    else {
        navbar.classList.add('is-active');
        body.classList.add('no-scroll');
    }
});