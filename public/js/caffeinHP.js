// FOR TYPWRITING WHEN CLICK

var i = 0;
var txt = 'Caffeine Paradise'; 
var speed = 300; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}




// FOR STICKY NAV BAR, When the user scrolls the page, execute myFunction

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbarHP");

var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}