// hero banner section
const slides = document.querySelectorAll('.hero-slide');
const slider = document.querySelector('.hero-slider');
const nextbtn = document.querySelector('.next');
const prevbtn = document.querySelector('.prev');

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

nextbtn.addEventListener('click', nextSlide);
prevbtn.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 5000);

updateSlider();
// Planner modal
const modal = document.getElementById("plannerModal");
const btn = document.getElementById("planBtn");
const closeBtn = document.querySelector(".close");
btn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
}

// Submit planner form and scroll to gifts
document.getElementById("plannerSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  const occasion = document.getElementById("occasionSelect").value;
  const timeframe = document.getElementById("timeframe").value;

  if (!occasion || !timeframe) {
    alert("Please select at least Occasion and Timeframe!");
    return;
  }

  modal.style.display = "none"; // Close modal

  const giftsSection = document.getElementById("gifts");
  if (giftsSection) giftsSection.scrollIntoView({ behavior: "smooth" });
});


    // Curated slider
  let curatedIndex=0;
  function slideCurated(dir){
    const slider=document.getElementById('curatedSlider');
    const cardWidth=slider.children[0].offsetWidth+12;
    curatedIndex+=dir;
    if(curatedIndex<0) curatedIndex=0;
    if(curatedIndex>slider.children.length-3) curatedIndex=slider.children.length-3;
    slider.style.transform=`translateX(-${curatedIndex*cardWidth}px)`;
  }

  // Occasion Tabs
  function switchOccasionTab(e){
    document.querySelectorAll('.u-tab').forEach(t=>t.classList.remove('active'));
    e.currentTarget.classList.add('active');
    const key=e.currentTarget.dataset.tab;
    document.querySelectorAll('#occasionContent .occasion-panel').forEach(p=>{
      p.style.display = p.dataset.panel === key ? 'grid' : 'none';
    });
  }


  // Placeholder functions
  function quickView(name){alert('Quick view: '+name)}
  function addToCart(name){alert('Added to cart: '+name)}

// FAQs
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const active = button.classList.contains('active');
    document.querySelectorAll('.faq-question').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    
    if (!active) {
      button.classList.add('active');
      button.nextElementSibling.style.display = 'block';
    }
  });
});

// curated packs
const carousel = document.getElementById('curatedCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Get initial cards
let cards = Array.from(carousel.children);
const cardWidth = cards[0].offsetWidth + 24; // width + gap

// Clone first and last two cards for seamless looping
const cloneFirst = cards.slice(0, 2).map(card => card.cloneNode(true));
const cloneLast = cards.slice(-2).map(card => card.cloneNode(true));

cloneFirst.forEach(card => carousel.appendChild(card));
cloneLast.reverse().forEach(card => carousel.insertBefore(card, carousel.firstChild));

// Update cards after cloning
cards = Array.from(carousel.children);

let index = 2; // start on first real card
carousel.style.transform = `translateX(${-cardWidth * index}px)`;

// Functions
function moveToNext() {
  index++;
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${-cardWidth * index}px)`;
}

function moveToPrev() {
  index--;
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${-cardWidth * index}px)`;
}

// Reset for infinite loop effect
carousel.addEventListener('transitionend', () => {
  if (index >= cards.length - 2) {
    carousel.style.transition = 'none';
    index = 2;
    carousel.style.transform = `translateX(${-cardWidth * index}px)`;
  }
  if (index <= 1) {
    carousel.style.transition = 'none';
    index = cards.length - 3;
    carousel.style.transform = `translateX(${-cardWidth * index}px)`;
  }
});

// Button events
nextBtn.addEventListener('click', moveToNext);
prevBtn.addEventListener('click', moveToPrev);

// Optional: drag/swipe support
let startX = 0;
let isDragging = false;

carousel.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX;
  carousel.style.cursor = 'grabbing';
});

carousel.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const walk = e.pageX - startX;
  carousel.style.transition = 'none';
  carousel.style.transform = `translateX(${-cardWidth * index + walk}px)`;
});

carousel.addEventListener('mouseup', e => {
  if (!isDragging) return;
  isDragging = false;
  carousel.style.cursor = 'grab';
  const diff = e.pageX - startX;

  if (diff > 50) moveToPrev();
  else if (diff < -50) moveToNext();
  else carousel.style.transform = `translateX(${-cardWidth * index}px)`;
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
  carousel.style.cursor = 'grab';
});

// Authentication
const authBtn = document.getElementById('authSignInBtn');
  const authModal = document.getElementById('auth-modal');
  const authClose = document.getElementById('authClose');
  const authTabBtns = document.querySelectorAll('.auth-tab-btn');
  const authForms = document.querySelectorAll('.auth-form');

  // Open Modal
  authBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
  });

  // Close Modal
  authClose.addEventListener('click', () => {
    authModal.style.display = 'none';
  });

  // Close when clicking outside the modal
  window.addEventListener('click', (e) => {
    if (e.target === authModal) {
      authModal.style.display = 'none';
    }
  });

  // Switch between Sign In and Sign Up tabs
  authTabBtns.forEach(button => {
    button.addEventListener('click', () => {
      authTabBtns.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const tab = button.getAttribute('data-tab');
      authForms.forEach(form => {
        form.classList.remove('active');
        if (form.id === `auth-${tab}-form`) {
          form.classList.add('active');
        }
      });
    });
  });




