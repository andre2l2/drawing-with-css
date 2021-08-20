const shine1 = document.querySelector(".shine-1");
const shine2 = document.querySelector(".shine-2");
const shine3 = document.querySelector(".shine-3");
const shine4 = document.querySelector(".shine-4");

let lightState = true;

const turnOnOff = () => {
  lightState = lightState ? false : true;

  if (lightState) {
    setColor(shine1, "rgb(253, 252, 220)");
    setColor(shine2, "rgba(253, 252, 220, 0.541)", 500);
    setColor(shine3, "rgba(253, 252, 220, 0.356)", 700);
    setColor(shine4, "rgba(253, 252, 220, 0.100)", 900);
  } else {
    setColor(shine1, "rgb(124, 124, 109)");
    setColor(shine2, "rgba(253, 252, 220, 0)");
    setColor(shine3, "rgba(253, 252, 220, 0)");
    setColor(shine4, "rgba(253, 252, 220, 0)");
  }
};

const setColor = (element, color, timeOut) => {
  if (typeof timeOut === "number") {
    setTimeout(() => {
      element.style.background = color;
    }, timeOut);
  } else {
    element.style.background = color;
  }
};

shine1.addEventListener("click", turnOnOff);
