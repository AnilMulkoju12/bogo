var firstContainer = document.querySelector(".first-container-layout");
var firstBottomContainer = document.querySelector(".first-container-bottom-section");
var firstInput = document.querySelector(".first-input");

var secondContainer = document.querySelector(".second-container-top-section");
var secondBottomContainer = document.querySelector(".second-container-bottom-section");
var secondInput = document.querySelector(".second-input");

var mostPopularContainer = document.querySelector(".most-popular-container");

var thirdContainer = document.querySelector(".third-container-top-section");
var thirdBottomContainer = document.querySelector(".third-container-bottom-section");
var thirdInput = document.querySelector(".third-input");

// Initially hide all containers
firstBottomContainer.style.display = "none";
secondBottomContainer.style.display = "none";
thirdBottomContainer.style.display = "none";

// Function to clear all inputs
function clearAllInputs() {
  firstInput.checked = false;
  secondInput.checked = false;
  thirdInput.checked = false;
}

// Toggle the first container
firstContainer.addEventListener("click", () => {
  // Close other containers and clear inputs
  secondBottomContainer.style.display = "none";
  thirdBottomContainer.style.display = "none";
  clearAllInputs();

  // Toggle the first container
  if (firstBottomContainer.style.display === "none") {
    firstBottomContainer.style.display = "";
    firstInput.checked = true;
    mostPopularContainer.style.top = "-20%";
  } else {
    firstBottomContainer.style.display = "none";
    firstInput.checked = false;
  }
});

// Toggle the second container
secondContainer.addEventListener("click", () => {
  // Close other containers and clear inputs
  firstBottomContainer.style.display = "none";
  thirdBottomContainer.style.display = "none";
  clearAllInputs();

  // Toggle the second container
  if (secondBottomContainer.style.display === "none") {
    secondBottomContainer.style.display = "";
    secondInput.checked = true;
    mostPopularContainer.style.top = "-8%";
  } else {
    secondBottomContainer.style.display = "none";
    secondInput.checked = false;
    mostPopularContainer.style.top = "-20%";
  }
});

// Toggle the third container
thirdContainer.addEventListener("click", () => {
  // Close other containers and clear inputs
  firstBottomContainer.style.display = "none";
  secondBottomContainer.style.display = "none";
  clearAllInputs();

  // Toggle the third container
  if (thirdBottomContainer.style.display === "none") {
    thirdBottomContainer.style.display = "";
    thirdInput.checked = true;
    mostPopularContainer.style.top = "-20%";
  } else {
    thirdBottomContainer.style.display = "none";
    thirdInput.checked = false;
  }
});
