const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = document.getElementById('caption');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const thumbs = Array.from(document.querySelectorAll('.lightbox-thumb'));
let currentIndex = 0;

function showImage(index) {
  const img = thumbs[index];
  if (!img) return;

  lightboxImg.src = img.src;
  lightboxCaption.textContent = img.alt || '';
  currentIndex = index;
  lightbox.classList.remove('hidden');
}

thumbs.forEach((img, index) => {
  img.addEventListener('click', () => {
    showImage(index);
  });
});

prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showImage((currentIndex - 1 + thumbs.length) % thumbs.length);
});

nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showImage((currentIndex + 1) % thumbs.length);
});

lightbox.addEventListener('click', () => {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
  lightboxCaption.textContent = '';
});

document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('hidden')) return;

  if (e.key === 'ArrowRight') {
    showImage((currentIndex + 1) % thumbs.length);
  } else if (e.key === 'ArrowLeft') {
    showImage((currentIndex - 1 + thumbs.length) % thumbs.length);
  } else if (e.key === 'Escape') {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
    lightboxCaption.textContent = '';
  }
});
