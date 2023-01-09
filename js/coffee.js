const navbar = document.querySelector('nav');

window.addEventListener("scroll", function () {
    navbar.classList.toggle("sticky", window.scrollY > 40);
});


const mblMenu = document.querySelector('ul');
const menuBar = document.querySelector('.mbl-menu-bar');
const closeMenu = document.querySelector('.close-menu')

   menuBar.addEventListener('click', function(){
         mblMenu.classList.toggle('show-mbl-menu');
   })
    
   closeMenu.addEventListener('click', function(){
        ul.style.display = 'none';
   })