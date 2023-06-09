const carouselImages = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;

setInterval(() => {
  carouselImages[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
  carouselImages[currentImageIndex].classList.add('active');
}, 3000);

const body=document.querySelector("body");
const sidebar=body.querySelector(".sidebar");
const toggle=body.querySelector(".toggle");

toggle.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});