let elMenu = document.querySelector(".header__menu-btn");
let elModal = document.querySelector(".modal");
let elLine2 = document.querySelector(".line2");
let elLine1 = document.querySelector(".line1");
let elLine3 = document.querySelector(".line3");

elMenu.addEventListener("click",function(){
  elModal.classList.toggle("hero__modal-height");
  elLine2.classList.toggle("remove-line");
  elLine1.classList.toggle("rotate1")
  elLine3.classList.toggle("rotate3")
})