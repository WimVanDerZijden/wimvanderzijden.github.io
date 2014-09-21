"use strict";
// Add class 'show-mobile' to display the menu when in mobile mode, when
// menu-button was clicked.
var toggleMobileMenu = function () {
  document.getElementById("menu").classList.toggle('show');
};

document.getElementById('menu-button').addEventListener('click', toggleMobileMenu, false);

// Show the login dialog when clicking login
var showLoginDialog = function () {
  document.getElementById('login').style.display = 'block';
  document.getElementById('dark').style.display = 'block';
};

document.getElementById('login-link').addEventListener('click', showLoginDialog, false);

// Hide the login dialog when cliking on the area around it (#dark)
var hideLoginDialog = function () {
  document.getElementById('login').style.display = 'none';
  document.getElementById('dark').style.display = 'none';
};

document.getElementById('dark').addEventListener('click', hideLoginDialog, false);

window.onkeyup = function (e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if (key === 27) {
    hideLoginDialog();
  }
};

/* Playfully rotate the article images */

var articles = document.getElementsByTagName('article');
// The higher the dullness, the smaller the rotations.
// The maximum rotation angle is PI over dullness over 2 radians.
var DULLNESS = 12;
var n, i;
for (n = 0; n < articles.length; n += 1) {
  var images = articles[n].getElementsByTagName('img');
  for (i = 0; i < images.length; i += 1) {
    var rad = Math.random() * Math.PI / DULLNESS - Math.PI / DULLNESS / 2;
    images[i].style.transform = 'rotate(' + rad + 'rad)';
    // For debugging: maximum rotation
    //images[i].style.transform = 'rotate(' + (-Math.PI / DULLNESS / 2) + 'rad)';
  }
}