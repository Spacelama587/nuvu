function getRandomColor() {
  const colors = [
    "#FFBE0B",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#9B5DE5",
    "#F15BB5",
    "#FEE440",
    "#FEE440",
    "#00BBF9",
    "#00F5D4",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeBackgroundColors() {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.style.backgroundColor = getRandomColor();
  });
}

setInterval(changeBackgroundColors, 700);
