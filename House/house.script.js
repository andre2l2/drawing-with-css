const $window = document.querySelector(".window");

let light = true;

$window.addEventListener("click", () => {
  light = light ? false : true;

  if (light) $window.style.background = "black";
  else $window.style.background = "#a8dadc";
});
