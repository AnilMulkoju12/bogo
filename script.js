var firstContainer = document.querySelector(".first-container-layout");
var firstBottomContainer = document.querySelector(".first-container-bottom-section");
var firstInput = document.querySelector(".first-input");

var secondContainer = document.querySelector(".second-container-top-section");
var secondBottomContainer = document.querySelector(".second-container-bottom-section");
var secondInput = document.querySelector(".second-input");

var mostPopularContainer = document.querySelector(".most-popular-container");

var thirdContainer = document.querySelector(".third-container-top-section");
var thirdBottomContainer = document.querySelector(".third-container-bottom-section");
var thirdInput = document.querySelector(".third-input"); // Assuming you have a third radio button or similar element

// Initially hide all containers
firstBottomContainer.style.display = "none";
secondBottomContainer.style.display = "none";
thirdBottomContainer.style.display = "none";

firstContainer.addEventListener("click", () => {
  // Close other containers
  secondBottomContainer.style.display = "none";
  secondInput.checked = false;
  thirdBottomContainer.style.display = "none";
  mostPopularContainer.style.top = "-20%";

  // Toggle the first container
  if (firstBottomContainer.style.display === "none") {
    firstBottomContainer.style.display = "";
    firstInput.checked = true;
  } else {
    firstBottomContainer.style.display = "none";
    firstInput.checked = false;
  }
});

secondContainer.addEventListener("click", () => {
  // Close other containers
  firstBottomContainer.style.display = "none";
  firstInput.checked = false;
  thirdBottomContainer.style.display = "none";

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

thirdContainer.addEventListener("click", () => {
  // Close other containers
  firstBottomContainer.style.display = "none";
  firstInput.checked = false;
  secondBottomContainer.style.display = "none";
  secondInput.checked = false;
  mostPopularContainer.style.top = "-20%"; // Reset position if needed

  // Toggle the third container
  if (thirdBottomContainer.style.display === "none") {
    thirdBottomContainer.style.display = "";
    thirdInput.checked = true;
  } else {
    thirdBottomContainer.style.display = "none";
    thirdInput.checked = false;
  }
});
