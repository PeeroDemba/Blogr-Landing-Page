"use strict";

const opener = document.getElementById("open");
const close = document.getElementById("close");
const dropdown = document.getElementById("dropdown");
const main = document.getElementsByTagName("main")[0];
const footer = document.getElementsByTagName("footer")[0];

function switcher() {
  if (opener.className == "show") {
    opener.className = "hide";
    dropdown.className = "show";
    main.style.display = "none";
    footer.style.display = "none";
  } else if (opener.className == "hide") {
    opener.className = "show";
    dropdown.className = "hide";
    main.style.display = "block";
    footer.style.display = "grid";
  }
}

function resizer() {
  let mq = window.matchMedia("(max-width: 768px)");
  if (mq.matches && dropdown.className == "show") {
    main.style.display = "none";
    footer.style.display = "none";
  } else if (mq.matches == false) {
    main.style.display = "block";
    footer.style.display = "grid";
  }
}

opener.addEventListener("click", switcher);
close.addEventListener("click", switcher);
window.addEventListener("resize", resizer);
