/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    var $html = $("html");
    var $navbarMenu = $(".navbar-menu");
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible";
      getSidebar.style.overflow = "visible";

      getSidebarLinks.forEach((item, index)=>{
        console.log(item);
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
      getSidebar.style.width = "60%";
      getSidebar.style.overflow = "visible";
      $html.addClass("clicked");
      $navbarMenu.addClass("clicked")
      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.overflow = "visible";
        getSidebar.style.width = "0";
        $navbarMenu.removeClass("clicked")
        $html.removeClass("clicked");
        toggleNavStatus = false;
    }
}

// gallery toggle functionality 

/* Modals collected in variables */

// Residential Modals
var $modalOne = $(".modal-one");
var $modalTwo = $(".modal-two");
var $modalThree = $(".modal-three");
var $modalFour = $(".modal-four");
var $modalFive = $(".modal-five");
var $modalSix = $(".modal-six");
var $modalSeven = $(".modal-seven");
var $modalEight = $(".modal-eight");
var $modalNine = $(".modal-nine");
var $modalTen = $(".modal-ten");
var $modalEleven = $(".modal-eleven");
var $modalTwelve = $(".modal-twelve");
var $modalThirteen = $(".modal-thirteen");
var $modalFourteen = $(".modal-fourteen");
var $modalFifteen = $(".modal-fifteen");
var $modalSixteen = $(".modal-sixteen");
var $modalSeventeen = $(".modal-seventeen");
var $modalEighteen = $(".modal-eighteen");
var $modalNineteen = $(".modal-nineteen");
var $modalTwenty = $(".modal-twenty");
var $modalTwentyOne = $(".modal-twenty-one");
var $modalTwentyTwo = $(".modal-twenty-two");
var $modalTwentyThree = $(".modal-twenty-three");
var $modalTwentyFour = $(".modal-twenty-four");
var $modalTwentyFive = $(".modal-twenty-five");
var $modalTwentySix = $(".modal-twenty-six");
var $modalTwentySeven = $(".modal-twenty-seven");
var $modalTwentyEight = $(".modal-twenty-eight");
var $modalTwentyNine = $(".modal-twenty-nine");
var $modalThirty = $(".modal-thirty");
var $modalThirtyOne = $(".modal-thirty-one");
var $modalThirtyTwo = $(".modal-thirty-two");

/* Images collected in variables */

var $homeIcon = $(".home-icon");
var $html = $("html");

// Residential
var $one = $("#one");
var $two = $("#two");
var $three = $("#three");
var $four = $("#four");
var $five = $("#five");
var $six = $("#six");
var $seven = $("#seven");
var $eight = $("#eight");
var $nine = $("#nine");
var $ten = $("#ten");
var $eleven = $("#eleven");
var $twelve = $("#twelve");
var $thirteen = $("#thirteen");
var $fourteen = $("#fourteen");
var $fifteen = $("#fifteen");
var $sixteen = $("#sixteen");
var $seventeen = $("#seventeen");
var $eighteen = $("#eighteen");
var $nineteen = $("#nineteen");
var $twenty = $("#twenty");
var $twentyOne = $("#twenty-one");
var $twentyTwo = $("#twenty-two");
var $twentyThree = $("#twenty-three");
var $twentyFour = $("#twenty-four");
var $twentyFive = $("#twenty-five");
var $twentySix = $("#twenty-six");
var $twentySeven = $("#twenty-seven");
var $twentyEight = $("#twenty-eight");
var $twentyNine = $("#twenty-nine");
var $thirty = $("#thirty");
var $thirtyOne = $("#thirty-one");
var $thirtyTwo = $("#thirty-two");

/* Add Clicked Class */

//Residential
$one.on("click", function (e) {
  $modalOne.addClass("clicked");
  $html.addClass("clicked");
});

$two.on("click", function (e) {
  $modalTwo.addClass("clicked");
  $html.addClass("clicked");
});

$three.on("click", function (e) {
  $modalThree.addClass("clicked");
  $html.addClass("clicked");
});

$four.on("click", function (e) {
  $modalFour.addClass("clicked");
  $html.addClass("clicked");
});

$five.on("click", function (e) {
  $modalFive.addClass("clicked");
  $html.addClass("clicked");
});

$six.on("click", function (e) {
  $modalSix.addClass("clicked");
  $html.addClass("clicked");
});

$seven.on("click", function (e) {
  $modalSeven.addClass("clicked");
  $html.addClass("clicked");
});

$eight.on("click", function (e) {
  $modalEight.addClass("clicked");
  $html.addClass("clicked");
});

$nine.on("click", function (e) {
  $modalNine.addClass("clicked");
  $html.addClass("clicked");
});

$ten.on("click", function (e) {
  $modalTen.addClass("clicked");
  $html.addClass("clicked");
});

$eleven.on("click", function (e) {
  $modalEleven.addClass("clicked");
  $html.addClass("clicked");
});

$twelve.on("click", function (e) {
  $modalTwelve.addClass("clicked");
  $html.addClass("clicked");
});

$thirteen.on("click", function (e) {
  $modalThirteen.addClass("clicked");
  $html.addClass("clicked");
});

$fourteen.on("click", function (e) {
  $modalFourteen.addClass("clicked");
  $html.addClass("clicked");
});

$fifteen.on("click", function (e) {
  $modalFifteen.addClass("clicked");
  $html.addClass("clicked");
});

$sixteen.on("click", function (e) {
  $modalSixteen.addClass("clicked");
  $html.addClass("clicked");
});

$seventeen.on("click", function (e) {
  $modalSeventeen.addClass("clicked");
  $html.addClass("clicked");
});

$eighteen.on("click", function (e) {
  $modalEighteen.addClass("clicked");
  $html.addClass("clicked");
});

$nineteen.on("click", function (e) {
  $modalNineteen.addClass("clicked");
  $html.addClass("clicked");
});

$twenty.on("click", function (e) {
  $modalTwenty.addClass("clicked");
  $html.addClass("clicked");
});

$twentyOne.on("click", function (e) {
  $modalTwentyOne.addClass("clicked");
  $html.addClass("clicked");
});

$twentyTwo.on("click", function (e) {
  $modalTwentyTwo.addClass("clicked");
  $html.addClass("clicked");
});

$twentyThree.on("click", function (e) {
  $modalTwentyThree.addClass("clicked");
  $html.addClass("clicked");
});

$twentyFour.on("click", function (e) {
  $modalTwentyFour.addClass("clicked");
  $html.addClass("clicked");
});

$twentyFive.on("click", function (e) {
  $modalTwentyFive.addClass("clicked");
  $html.addClass("clicked");
});

$twentySix.on("click", function (e) {
  $modalTwentySix.addClass("clicked");
  $html.addClass("clicked");
});

$twentySeven.on("click", function (e) {
  $modalTwentySeven.addClass("clicked");
  $html.addClass("clicked");
});

$twentyEight.on("click", function (e) {
  $modalTwentyEight.addClass("clicked");
  $html.addClass("clicked");
});

$twentyNine.on("click", function (e) {
  $modalTwentyNine.addClass("clicked");
  $html.addClass("clicked");
});

$thirty.on("click", function (e) {
  $modalThirty.addClass("clicked");
  $html.addClass("clicked");
});

$thirtyOne.on("click", function (e) {
  $modalThirtyOne.addClass("clicked");
  $html.addClass("clicked");
});

$thirtyTwo.on("click", function (e) {
  $modalThirtyTwo.addClass("clicked");
  $html.addClass("clicked");
});

/* Remove Clicked Class */

$homeIcon.on("click", function (e) {
  // Residential
  $modalOne.removeClass("clicked");
  $modalTwo.removeClass("clicked");
  $modalThree.removeClass("clicked");
  $modalFour.removeClass("clicked");
  $modalFive.removeClass("clicked");
  $modalSix.removeClass("clicked");
  $modalSeven.removeClass("clicked");
  $modalEight.removeClass("clicked");
  $modalNine.removeClass("clicked");
  $modalTen.removeClass("clicked");
  $modalEleven.removeClass("clicked");
  $modalTwelve.removeClass("clicked");
  $modalThirteen.removeClass("clicked");
  $modalFourteen.removeClass("clicked");
  $modalFifteen.removeClass("clicked");
  $modalSixteen.removeClass("clicked");
  $modalSeventeen.removeClass("clicked");
  $modalEighteen.removeClass("clicked");
  $modalNineteen.removeClass("clicked");
  $modalTwenty.removeClass("clicked");
  $modalTwentyOne.removeClass("clicked");
  $modalTwentyTwo.removeClass("clicked");
  $modalTwentyThree.removeClass("clicked");
  $modalTwentyFour.removeClass("clicked");
  $modalTwentyFive.removeClass("clicked");
  $modalTwentySix.removeClass("clicked");
  $modalTwentySeven.removeClass("clicked");
  $modalTwentyEight.removeClass("clicked");
  $modalTwentyNine.removeClass("clicked");
  $modalThirty.removeClass("clicked");
  $modalThirtyOne.removeClass("clicked");
  $modalThirtyTwo.removeClass("clicked");

  $html.removeClass("clicked");
});


// ------------------------------------------------- DARK MODE -----------------------------

/* Dark Mode Toggle */
var $DTspan = $(".DTspan");
var $darkToggle = $(".dark-toggle");
var $wire = $(".wire");
var $triangle = $(".triangle");
var $topDarkModeToggle = $(".top-dark-mode-button");

/* Navigation */
var $navbarMenu = $(".navbar-menu");
var $sideNavA = $(".side-nav a");
var $isActiveHamburger = $(".hamburger.is-active .hamburger-inner::after");
var $hamburgerInner = $(".hamburger-inner");
var $neon = $(".neon");
var $blue = $(".blue");
var $white = $(".white");

/* Body and Core Elements */
var $body = $("body");

var $h2 = $("h2");
var $h3 = $("h3");
var $p = $("p");

var $universe = $(".universe");

var $button = $(".button-solid");
var $submit = $("#contact button");

/* Landing */
var $clippy = $(".clippy");
var $iconGraphicMiddle = $(".icon-graphic-middle");

// About
var $triangleTop = $(".triangle-top");
var $box1 = $(".box1");
var $box2 = $(".box2");
var $box3 = $(".box3");
var $box4 = $(".box4");
var $middleButton = $(".middle button");
var $aboutH4 = $(".about-info h4");

// Call Strip
var $cardSection = $(".card-section");

// Benefits
var $benefitsH3 = $("#benefits h3");

// Reviews
var $reviewsH4 = $("#reviews h4");

// Contact
var $chevron = $(".chevron-graphic");

//
// ABOUT PAGE --------------------------------------------------
//

// Values
var $valuesLi = $(".statement ul li");

//
// SERVICES PAGE --------------------------------------------------
//

var $serviceContent = $(".service-content");
var $serviceContentLi = $(".service-content li");


// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');
const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

const enableDarkMode = () => {

  /* Dark Mode Toggle */
  $darkToggle.addClass("dark-mode");
  $DTspan.addClass("dark-mode");
  $topDarkModeToggle.addClass("dark-mode");

  $body.addClass("dark-mode");

  $h2.addClass("dark-mode");
  $h3.addClass("dark-mode");
  $p.addClass("dark-mode");

  // Navigation 
  $navbarMenu.addClass("dark-mode");
  $sideNavA.addClass("dark-mode");
  $isActiveHamburger.addClass("dark-mode");
  $hamburgerInner.addClass("dark-mode");

  // Landing
  $clippy.addClass("dark-mode");
  $iconGraphicMiddle.addClass("dark-mode");
  
  // About
  $triangleTop.addClass("dark-mode");
  $box1.addClass("dark-mode");
  $box2.addClass("dark-mode");
  $box3.addClass("dark-mode");
  $box4.addClass("dark-mode");
  $middleButton.addClass("dark-mode");
  $aboutH4.addClass("dark-mode");

  // Call Strip
  $cardSection.addClass("dark-mode");

  // Benefits
  $benefitsH3.addClass("dark-mode");

  // Reviews
  $reviewsH4.addClass("dark-mode");

  // Contact
  $chevron.addClass("dark-mode");

  //
  // ABOUT PAGE --------------------------------------------------
  //

  // Values
  $valuesLi.addClass("dark-mode");

  //
  // SERVICES PAGE --------------------------------------------------
  //

  // Service Content
  $serviceContent.addClass("dark-mode");
  $serviceContentLi.addClass("dark-mode");


  localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {

  /* Dark Mode Toggle */
  $darkToggle.removeClass("dark-mode");
  $DTspan.removeClass("dark-mode");
  $topDarkModeToggle.removeClass("dark-mode");

  $body.removeClass("dark-mode");

  $h2.removeClass("dark-mode");
  $h3.removeClass("dark-mode");
  $p.removeClass("dark-mode");

  // Navigation 
  $navbarMenu.removeClass("dark-mode");
  $sideNavA.removeClass("dark-mode");
  $isActiveHamburger.removeClass("dark-mode");
  $hamburgerInner.removeClass("dark-mode");
  $blue.removeClass("dark-mode");
  $white.removeClass("dark-mode");

  // Landing
  $clippy.removeClass("dark-mode");
  $iconGraphicMiddle.removeClass("dark-mode");

  // About
  $triangleTop.removeClass("dark-mode");
  $box1.removeClass("dark-mode");
  $box2.removeClass("dark-mode");
  $box3.removeClass("dark-mode");
  $box4.removeClass("dark-mode");
  $middleButton.removeClass("dark-mode");
  $aboutH4.removeClass("dark-mode");

  // Call Strip
  $cardSection.removeClass("dark-mode");

  // Benefits
  $benefitsH3.removeClass("dark-mode");

  // Reviews
  $reviewsH4.removeClass("dark-mode");

  // Contact
  $chevron.removeClass("dark-mode");

  //
  // ABOUT PAGE --------------------------------------------------
  //

  // Values
  $valuesLi.removeClass("dark-mode");

  //
  // SERVICES PAGE --------------------------------------------------
  //

  // Service Content
  $serviceContent.removeClass("dark-mode");
  $serviceContentLi.removeClass("dark-mode");
  

  localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})

darkModeToggleFooter.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})