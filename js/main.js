let icon = document.getElementById("toggle");

let ul = document.getElementById("ul");

let navs = document.querySelectorAll("#ul li");

icon.onclick = function () {
  ul.classList.toggle("active");
};

navs.forEach(function (ele) {
  ele.onclick = function () {
    ul.classList.remove("active");
  };
});
