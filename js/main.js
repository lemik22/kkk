const burger = document.querySelector('.header__burger-menu')
const nav = document.querySelector('.header__nav')
const navItem = document.querySelectorAll('.header__nav-item')
const cross = document.querySelector('.header__burger-cross')
const overlay = document.querySelector('.overlay')
const burgerBtn = document.querySelector('.header__burger-btn')
const body = document.querySelector('body')


burger.addEventListener('click', function() {
  nav.classList.toggle('is-show')
  overlay.classList.toggle('active')
  body.classList.toggle('hidden')
})
cross.addEventListener('click', function() {
  nav.classList.remove('is-show')
  overlay.classList.remove('active')
  body.classList.remove('hidden')
})
burgerBtn.addEventListener('click', function() {
  nav.classList.remove('is-show')
  overlay.classList.remove('active')
  body.classList.remove('hidden')
})
overlay.addEventListener('click', function() {
  nav.classList.remove('is-show')
  overlay.classList.remove('active')
  body.classList.remove('hidden')
})
navItem.forEach(function(item) {
  item.addEventListener('click', function () {
    nav.classList.remove('is-show')
    overlay.classList.remove('active')
    body.classList.remove('hidden')
  })
});

$('.header__nav-item a, .footer__nav-item').on('click', function (e) {
  var id = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({ scrollTop : top }, 600);
})