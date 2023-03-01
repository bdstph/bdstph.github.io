// content
function setMenuButtons() {
  $("#v-menu-home-tab").click(function (event) {
    event.preventDefault();
    goTo("home");
  });
  $("#v-menu-about-tab").click(function (event) {
    event.preventDefault();
    goTo("about");
  });
  $("#v-menu-experience-tab").click(function (event) {
    event.preventDefault();
    goTo("experience");
  });
  $("#v-menu-projects-tab").click(function (event) {
    event.preventDefault();
    goTo("projects");
  });
}
function goTo(target) {
  var origin = window.location.origin;
  window.location.href = origin + "#" + target;
  setContent();
}

function setContent() {
  var hash = window.location.hash.substring(1);

  // set content
  if (hash == "home") {
    $("div.content").load("views/home.html");
  } else if (hash == "about") {
    $("div.content").load("views/about.html");
  } else if (hash == "experience") {
    $("div.content").load("views/experience.html", function () {
      loadExpPage(8);
    });
  } else if (hash == "projects") {
    $("div.content").load("views/projects.html");
  } else {
    // default
    hash = "home";
    $("div.content").load("views/home.html");
  }

  // set menu active
  $("#v-menu-tab a").removeClass("active");
  $("#v-menu-" + hash + "-tab").addClass("active");
}
function loadExpPage(page) {
  var last = 8;

  var pageName = "views/experience/" + page + ".html";
  
  $.get(pageName, function(html) {
    $("#experience").append(html);
    if (page > 1) {
      loadExpPage(page - 1);
    }
  });
}

$(window).ready(function () {
  $("div.menu").load("views/menu.html", function () {
    setMenuButtons();
    setContent();
  });
});
