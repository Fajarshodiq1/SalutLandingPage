// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
// typing aninmation
const dynamicText = document.querySelector("h1 span");
const words = ["Kapan Saja", "Dimana Saja", "Fleksibel"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();
// accordion
document.addEventListener("alpine:init", () => {
  Alpine.store("accordion", {
    tab: 0,
  });

  Alpine.data("accordion", (idx) => ({
    init() {
      this.idx = idx;
    },
    idx: -1,
    handleClick() {
      this.$store.accordion.tab =
        this.$store.accordion.tab === this.idx ? 0 : this.idx;
    },
    handleRotate() {
      return this.$store.accordion.tab === this.idx ? "rotate-180" : "";
    },
    handleToggle() {
      return this.$store.accordion.tab === this.idx
        ? `max-height: ${this.$refs.tab.scrollHeight}px`
        : "";
    },
  }));
});

// // scroll reveal
// const srLeft = ScrollReveal({
//   origin: "left",
//   distance: "80px",
//   duration: 800,
// });

// srLeft.reveal(".hero__img", { delay: 500 });
// srLeft.reveal(".items__accordions1", { delay: 500 });
// srLeft.reveal(".info__register1", { delay: 500 });

// const srRight = ScrollReveal({
//   origin: "right",
//   distance: "80px",
//   duration: 800,
// });
// srRight.reveal(".hero__text", { delay: 500 });
// srLeft.reveal(".items__accordions2", { delay: 500 });
// srLeft.reveal(".info__register2", { delay: 500 });

// const srTop = ScrollReveal({
//   origin: "top",
//   distance: "80px",
//   duration: 800,
// });
// srLeft.reveal(".info__accordions", { delay: 500 });
// srLeft.reveal(".info__register", { delay: 500 });

// const srBottom = ScrollReveal({
//   origin: "bottom",
//   distance: "80px",
//   duration: 800,
// });
// srBottom.reveal(".stats__item", { delay: 200 });
// srBottom.reveal(".stats__item1", { delay: 300 });
// srBottom.reveal(".stats__item2", { delay: 400 });
// srBottom.reveal(".stats__item3", { delay: 500 });
// srBottom.reveal(".stats__item4", { delay: 600 });
// srLeft.reveal(".button__register", { delay: 500 });

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  function animateNumber(element, targetNumber) {
    const duration = 2000; // Duration of animation in milliseconds
    const framesPerSecond = 30;
    const frameDuration = 1000 / framesPerSecond;
    const totalFrames = Math.round(duration / frameDuration);
    const increment = targetNumber / totalFrames;

    let currentNumber = 0;
    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(interval);
      }
      element.textContent = Math.round(currentNumber);
    }, frameDuration);
  }

  // Get the elements and target numbers
  const facultyCountElement = document.getElementById("facultyCount");
  const programCountElement = document.getElementById("programCount");
  const teacherCountElement = document.getElementById("teacherCount");

  const targetFacultyCount = 4; // Set your target numbers here
  const targetProgramCount = 37;
  const targetTeacherCount = 99;

  // Animate the numbers
  animateNumber(facultyCountElement, targetFacultyCount);
  animateNumber(programCountElement, targetProgramCount);
  animateNumber(teacherCountElement, targetTeacherCount);
});
