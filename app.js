const img1 = document.querySelector(".img-1");
const video1 = document.querySelector(".video-1");
const img2 = document.querySelector(".img-2");
const video2 = document.querySelector(".video-2");

const videoToggle = () => {
  img1.classList.add("hidden");
  video1.classList.remove("hidden");
  video1.setAttribute(
    "src",
    "https://www.youtube.com/embed/xkmM6h32lnM?autoplay=1"
  );
};

img1.addEventListener("click", videoToggle);

const videoToggle2 = () => {
  img2.classList.add("hidden");
  video2.classList.remove("hidden");
  video2.setAttribute(
    "src",
    "https://www.youtube.com/embed/ckub1RSlhic?autoplay=1"
  );
};

img2.addEventListener("click", videoToggle2);
