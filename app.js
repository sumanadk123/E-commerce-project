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

// Clone first and last cards for infinite loop
const cards = carousel.querySelectorAll('.card');
carousel.appendChild(cards[0].cloneNode(true));
carousel.insertBefore(cards[cards.length-1].cloneNode(true), cards[0]);

let index = 1;
const cardWidth = cards[0].offsetWidth + 24; // width + gap
carousel.style.transform = `translateX(${-cardWidth * index}px)`;

// Auto-scroll
let autoScroll = setInterval(() => {
  moveToNext();
}, 7000);

function moveToNext(){
  index++;
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${-cardWidth * index}px)`;
}

function moveToPrev(){
  index--;
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${-cardWidth * index}px)`;
}

carousel.addEventListener('transitionend', () => {
  if(index === 0){
    carousel.style.transition = 'none';
    index = cards.length;
    carousel.style.transform = `translateX(${-cardWidth * index}px)`;
  }
  if(index === cards.length+1){
    carousel.style.transition = 'none';
    index = 1;
    carousel.style.transform = `translateX(${-cardWidth * index}px)`;
  }
});

// Buttons
nextBtn.addEventListener('click', () => {
  clearInterval(autoScroll);
  moveToNext();
  autoScroll = setInterval(moveToNext, 3000);
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoScroll);
  moveToPrev();
  autoScroll = setInterval(moveToNext, 3000);
});

// Drag/Swipe
let startX, isDragging = false;
carousel.addEventListener('mousedown', e => {
  clearInterval(autoScroll);
  startX = e.pageX;
  isDragging = true;
  carousel.style.cursor = 'grabbing';
});

carousel.addEventListener('mousemove', e => {
  if(!isDragging) return;
  const x = e.pageX;
  const walk = x - startX;
  carousel.style.transform = `translateX(${-cardWidth * index + walk}px)`;
});

carousel.addEventListener('mouseup', e => {
  isDragging = false;
  carousel.style.cursor = 'grab';
  const endX = e.pageX;
  const diff = endX - startX;
  if(diff > 50) moveToPrev();
  else if(diff < -50) moveToNext();
  else carousel.style.transform = `translateX(${-cardWidth * index}px)`;
  autoScroll = setInterval(moveToNext, 3000);
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
  carousel.style.cursor = 'grab';
  carousel.style.transform = `translateX(${-cardWidth * index}px)`;
  autoScroll = setInterval(moveToNext, 3000);
});


