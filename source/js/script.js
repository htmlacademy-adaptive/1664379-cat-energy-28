let navList = document.querySelector(".main-nav__list");
console.log(navList);
let buttonClose = document.querySelector(".main-nav__toggle--close");
console.log(buttonClose);
let buttonOpen = document.querySelector(".main-nav__toggle--open");
console.log(buttonOpen);

navList.classList.remove('main-nav__list--nojs');
buttonClose.classList.remove('main-nav__toggle--nojs');
buttonOpen.classList.remove('main-nav__toggle--nojs');
navList.classList.add('main-nav__list--js');

buttonOpen.addEventListener('click', function () {
  if (navList.classList.contains('main-nav__list--nojs')) {
    return
  } else {
    navList.classList.add('main-nav__list--nojs');
    buttonOpen.classList.add('main-nav__toggle--nojs');
    buttonClose.classList.add('main-nav__toggle--nojs');
  }
});

buttonClose.addEventListener('click', function () {
  if (navList.classList.contains('main-nav__list--nojs')) {
    navList.classList.remove('main-nav__list--nojs');
    buttonOpen.classList.remove('main-nav__toggle--nojs');
    buttonClose.classList.remove('main-nav__toggle--nojs');
  } else {
    return
  }
});
