let body = document.querySelector("body");

const createSnow = () => {
  let snow = document.createElement("span");

  snow.className = "snow";

  let minSize = 3;
  let maxSize = 6;

  let snowSize = Math.random() * (maxSize - minSize) + minSize;

  snow.style.width = snowSize + "px";
  snow.style.height = snowSize + "px";

  snow.style.left = Math.random() * 100 + "%";

  body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 10000);
};

setInterval(createSnow, 100);
