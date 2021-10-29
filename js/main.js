var button = document.querySelector("button");
var ul = document.querySelector("ul");

function toggle() {
  ul.classList.toggle("active");
}

button.addEventListener("click", toggle);

var accordions = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
