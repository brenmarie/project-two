var button = document.querySelector("button");
var ul = document.querySelector("ul");

function toggle() {
  ul.classList.toggle("active");
}

button.addEventListener("click", toggle);
