let elMenu = document.querySelector(".header__menu-btn");
let elModal = document.querySelector(".modal");
let elLine2 = document.querySelector(".line2");
let elLine1 = document.querySelector(".line1");
let elLine3 = document.querySelector(".line3");
let item = document.querySelectorAll('.navigation__link')
let modalLink = document.querySelectorAll('.modal__item');
const elSort = document.querySelectorAll('.port-sort__item')

elMenu.addEventListener("click",function(){
  elModal.classList.toggle("hero__modal-height");
  elLine2.classList.toggle("remove-line");
  elLine1.classList.toggle("rotate1")
  elLine3.classList.toggle("rotate3")
});

modalLink.forEach(e => {
  e.addEventListener('click', ()=> {
    elModal.classList.remove("hero__modal-height");
    elLine2.classList.toggle("remove-line");
    elLine1.classList.toggle("rotate1")
    elLine3.classList.toggle("rotate3")
  })
})

window.addEventListener("scroll",function() {
  header = document.querySelector("header");
  header.classList.toggle("header-bg",window.scrollY > 60);
})



item.forEach(item => {
  item.addEventListener('click', ()=> {
    removeActive();
    item.classList.add('navigation__link-activ');
  })
})
function removeActive() {
  item.forEach(item => {
    item.classList.remove('navigation__link-activ')
  })
}
elSort.forEach(sortItem => {
  sortItem.addEventListener('click', ()=> {
    sortRemoveActive()
    sortItem.classList.add('port-sort__item--active')
  })
})

function sortRemoveActive() {
  elSort.forEach(sortItem => {
    sortItem.classList.remove('port-sort__item--active')
  })
}

let typed = new Typed('.animate', {
  strings: [
    "Sohibjon",
    "Developer",
    "Web Designer",
    "Freelancer",
    "Creative"
  ],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true
});

