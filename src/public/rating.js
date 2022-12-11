var exampleWithoutLS = false;
var testWithOutLS = {};

function saveStar(id) {
  if (!exampleWithoutLS) {
    localStorage.setItem("rating", id);
  } else {
    testWithOutLS.rating = id;
  }

  // Refresh our rating on screen
  loadData();
}

function loadData() {
  // Get stored rating on load
  var rating;
  if (!exampleWithoutLS) {
    rating = localStorage.getItem("rating");
  } else {
    rating = testWithOutLS.rating;
  }

  if (!rating) {
    return;
  }

  var s = parseInt(rating);
  // Get all of our stars..
  var stars = document.getElementsByClassName("star");
  // Loop through, and based on rating int, apply style
  for (var i = 0; i < stars.length; i++) {
    if (i >= s) {
      stars[i].classList.remove("active");
    } else {
      stars[i].classList.add("active");
    }
  }
  // return s;
}

try {
  // Check we can access localstorage
  if (!window.localStorage) {
    console.log("Unable to access LS");
  }
} catch (e) {
  // Can't access LS
  exampleWithoutLS = true;
} finally {
  loadData();
}
