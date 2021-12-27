window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").className = "navbar-top";
  } else {
    document.getElementById("navbar").className = "nav-bar";
  }
}