const colors = [
  "#990099",
  "#ffcc66",
  "#990000",
  "#99cc99",
  "#99cccc",
  "#ccccff",
];

const allSlide = document.querySelectorAll(".slide");

for (const slide of allSlide) {
  slide.addEventListener("mouseenter", () => {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIndex];
    slide.style.setProperty("--bg-color", randomColor);
  });

  slide.addEventListener("mouseleave", () => {
    slide.style.removeProperty("--bg-color");
  });
}
