var exampleWithoutLS = false;
var testWithOutLS = {};

function saveStar(id) {
  if (!exampleWithoutLS) {
    localStorage.setItem("reviews", id);
  } else {
    testWithOutLS.reviews = id;
  }

  // Refresh our rating on screen
  loadData();
}

function loadData() {
  // Get stored rating on load
  var reviews;
  if (!exampleWithoutLS) {
    reviews = localStorage.getItem("reviews");
  } else {
    reviews = testWithOutLS.reviews;
  }

  if (!reviews) {
    return;
  }

  var s = parseInt(reviews);
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
