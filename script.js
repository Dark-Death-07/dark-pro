let burger=document.querySelector(".burger");
let links = document.querySelector(".nav-links");
let text=document.querySelector(".text-content");
let hide=document.querySelector(".gfl");
let hied=document.querySelector(".sk-content")
let hid=document.querySelector(".education-content")
burger.addEventListener('click',()=> {
    links.classList.toggle("nav-show");
    text.classList.toggle("textareahide");
    hide.classList.toggle("hidee");
    hied.classList.toggle("hidee");
    hid.classList.toggle("hidee");
})
