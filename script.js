const sections = document.querySelectorAll('.section');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');

const nextTexts = [
  'yes!', 'Continue', 'Go On', 'Keep Going', 'More',
  'Almost There', 'Don’t Stop', 'Nearly Done', 'Last Step', 'Finish'
];

let current = 0;

function updateSections() {
  sections.forEach((sec, idx) => {
    sec.classList.toggle('active', idx === current);
  });

  // Update next button text
  nextBtn.textContent = nextTexts[current] || 'yes!';

  // Disable back button on first section
  backBtn.disabled = current === 0;

  // Optional: Hide next button on last section
  nextBtn.style.display = current === sections.length - 1 ? 'none' : 'inline-block';
}

nextBtn.addEventListener('click', () => {
  if (current < sections.length - 1) {
    current++;
    updateSections();
  }
});

backBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateSections();
  }
});

updateSections();
