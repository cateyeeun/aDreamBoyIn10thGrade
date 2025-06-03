const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const section1 = document.querySelector(".section-1");
const section2 = document.querySelector(".section-2");

nextBtn.addEventListener("click", () => {
  section1.classList.add("hidden");
  section2.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  section2.classList.add("hidden");
  section1.classList.remove("hidden");
});
