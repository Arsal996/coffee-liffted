const navbar = document.querySelector('nav');

window.addEventListener("scroll", function () {
    navbar.classList.toggle("sticky", window.scrollY > 20);
});


const mblMenu = document.querySelector('.menu-list');
const menuBar = document.querySelector('.mbl-menu-bar');

   menuBar.addEventListener('click', function(){
         mblMenu.classList.toggle('show-mbl-menu');
})

function searchFunction() {
    let sf = document.getElementById("search-bar-pc");
    if (sf.style.display === "block") {
      sf.style.display = "none";
    } else {
      sf.style.display = "block";
    }
  }


  function cartFunction() {
    let sf = document.getElementById("cart-side-bar");
    if (sf.style.display === "block") {
      sf.style.display = "none";
    } else {
      sf.style.display = "block";
    }
  }

  function closeFunction() {
    let cart = document.getElementById("cart-side-bar");
    let sf = document.getElementById("search-bar-pc");
    let cm = document.querySelector(".menu-list")
    if (cart.style.display = "block") {
      cart.style.display = "none";
    }
    if (sf.style.display = "block") {
        sf.style.display = "none";
      }
      if (cm.style.display = "block") {
        cm.style.display = "none";
      }
  }
