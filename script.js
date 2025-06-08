const sections = document.querySelectorAll(".section");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

const nextTexts = [
  "yes!",
  "mau",
  "lanjut",
  "lanjut",
  "lanjut",
  "lanjut",
  "lanjut",
  "yes!",
  "Last Step",
  "Finish",
];

let current = 0;

function updateSections() {
  sections.forEach((sec, idx) => {
    sec.classList.toggle("active", idx === current);
  });

  // Update next button text
  nextBtn.textContent = nextTexts[current] || "yes!";

  // Disable back button on first section
  backBtn.disabled = current === 0;

  // Optional: Hide next button on last section
  nextBtn.style.display =
    current === sections.length - 1 ? "none" : "inline-block";

  applyFadeUp(sections[current]);
}

nextBtn.addEventListener("click", () => {
  if (current < sections.length - 1) {
    current++;
    updateSections();
  }
});

backBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    updateSections();
  }
});

updateSections();

// fade up
function applyFadeUp(section) {
  const fadeElements = section.querySelectorAll(".fade-up");
  const extraFadeElements = []; // untuk elemen tambahan seperti tombol

  // Cek jika nextBtn ada dan visible
  if (
    nextBtn &&
    nextBtn.classList.contains("fade-up") &&
    nextBtn.style.display !== "none"
  ) {
    extraFadeElements.push(nextBtn);
  }

  const allFadeElements = [...fadeElements, ...extraFadeElements];

  allFadeElements.forEach((el, i) => {
    el.classList.remove("fade-up");
    void el.offsetWidth; // trigger reflow agar animasi bisa diulang
    el.classList.add("fade-up");
    el.style.animationDelay = `${i * 0.3}s`; // delay bertahap
  });
}

// SLIDESHOW
let slideIndex = 2; // Mulai dari slide ke-3
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

// Buat navigasi dots hanya untuk slide ke-3 hingga ke-16
for (let i = 2; i <= 15; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.setAttribute("onclick", `currentSlide(${i})`);
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  if (n > 15) slideIndex = 2; // Jika sudah sampai slide ke-13, kembali ke slide ke-3
  if (n < 2) slideIndex = 15; // Jika mundur sebelum slide ke-3, kembali ke slide ke-16

  document.querySelector(".slides").style.transform = `translateX(-${
    slideIndex * 100
  }%)`;

  // Hapus efek aktif dari semua slide
  slides.forEach((slide) => slide.classList.remove("active"));

  // Tambahkan efek ke slide yang sedang aktif
  slides[slideIndex].classList.add("active");

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex - 2].classList.add("active"); // Index dots mulai dari 3 (slide ke-3 menjadi index 0)
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

function autoSlide() {
  changeSlide(1);
  setTimeout(autoSlide, 4000);
}

// Jalankan slideshow dari slide ke-3
showSlide(slideIndex);
setTimeout(autoSlide, 4000);
