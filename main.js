const cursor = document.getElementById("cursor");
const cursorText = document.querySelector(".cursor-text");

let timeout;

document.addEventListener("mousemove", (e) => {
  // TODO: move the cursor element to follow e.clientX and e.clientY
  // use cursor.style.left and cursor.style.top

  let left = e.clientX;
  let top = e.clientY;
  cursor.style.left = left + "px";
  cursor.style.top = top + "px";

  // TODO: grow the cursor (e.g. 80px width/height) and show the text when moving
  // clear any existing timeout

  cursor.style.height = "80px";
  cursor.style.width = "80px";
  cursorText.innerText = "X-RAY";
  cursorText.style.opacity = 1;
  clearTimeout(timeout);

  timeout = setTimeout(function () {
    cursor.style.height = "40px";
    cursor.style.width = "40px";
    cursorText.style.opacity = 0;
  }, 300);

  // TODO: after 300ms of no movement, shrink back to 40px and hide text
});
