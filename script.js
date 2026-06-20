// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}



// ================= NAVBAR EFFECT =================

window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if (!nav) return;

  if (window.scrollY > 20) {

    nav.classList.add(
      "backdrop-blur-xl",
      "bg-black/30",
      "shadow-lg"
    );

  } else {

    nav.classList.remove(
      "backdrop-blur-xl",
      "bg-black/30",
      "shadow-lg"
    );

  }

});



// ================= IMAGE HOVER EFFECT =================

const images = document.querySelectorAll("img");

images.forEach((image) => {

  image.classList.add(
    "transition-all",
    "duration-500"
  );

  image.addEventListener("mouseenter", () => {
    image.classList.add("scale-105");
  });

  image.addEventListener("mouseleave", () => {
    image.classList.remove("scale-105");
  });

});



// ================= INPUT EFFECT =================

const inputs = document.querySelectorAll(
  "input, textarea"
);

inputs.forEach((input) => {

  input.addEventListener("focus", () => {

    input.classList.add(
      "shadow-2xl",
      "shadow-purple-500/20"
    );

  });

  input.addEventListener("blur", () => {

    input.classList.remove(
      "shadow-2xl",
      "shadow-purple-500/20"
    );

  });

});



// ================= GITHUB HOVER =================

const githubBtns =
  document.querySelectorAll(".github-btn");

const githubBoxes =
  document.querySelectorAll(".github-box");

githubBtns.forEach((btn, index) => {

  btn.addEventListener("mouseenter", () => {

    githubBoxes[index]?.classList.remove(
      "opacity-0",
      "invisible"
    );

    githubBoxes[index]?.classList.add(
      "opacity-100",
      "visible"
    );

  });

  btn.addEventListener("mouseleave", () => {

    githubBoxes[index]?.classList.remove(
      "opacity-100",
      "visible"
    );

    githubBoxes[index]?.classList.add(
      "opacity-0",
      "invisible"
    );

  });

});



// ================= BUTTON HOVER =================

const buttons =
  document.querySelectorAll("button, .btn");

buttons.forEach((btn) => {

  btn.classList.add(
    "transition-all",
    "duration-300"
  );

});