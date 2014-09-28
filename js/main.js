"use strict";

// We don't support <= IE 8.
// Hide the entire site and display a sarcastic message
if (document.getElementById('ie8') !== null) {
  document.getElementById("wrapper").style.display = 'none';
} else {
  /*
  HTML5 Form-validatie werkt wel in Opera, maar de message wordt niet weergegeven,
  waardoor deze functionaliteit erg verwarrend werkt voor de gebruiker.
  Onderstaande link suggereert dat dit opgelost wordt door een "gewoon lettertype"
  te gebruiken, maar dit blijkt niet te werken, dus deze code is weer uitgecomment.

  http://stackoverflow.com/a/16254439

  if (navigator.userAgent.indexOf("Opera")) {
    var inputs = document.getElementsByTagName("input");
    var n;
    for (n = 0; n < inputs.length; n += 1) {
      inputs[n].style.fontFamily = 'Arial';
    }
  }
  */
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

  // Hide the login dialog when clicking on the area around it (#dark)
  var hideLoginDialog = function () {
    document.getElementById('login').style.display = 'none';
    document.getElementById('dark').style.display = 'none';
  };

  document.getElementById('dark').addEventListener('click', hideLoginDialog, false);

  window.onkeyup = function (e) {
    var key;
    if (e.keyCode) {
      key = e.keyCode;
    } else {
      key = e.which;
    }
    if (key === 27) {
      hideLoginDialog();
    }
  };

  /* Playfully rotate the article images */

  var articles = document.getElementsByTagName('article');
  // The higher the dullness, the smaller the rotations.
  // The maximum rotation angle is PI over dullness over 2 radian.
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

  /* Pretend we've just submitted the contact form with AJAX */
  var submitForm = function () {
    document.getElementById("form-fill-in").style.display = 'none';
    document.getElementById("form-sent").style.display = 'block';
  };
}