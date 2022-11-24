export { scrollLoad, onToTopBtn };

const toTopBtn = document.querySelector('.btn-to-top');

window.addEventListener('scroll', onScroll);
toTopBtn.addEventListener('click', onToTopBtn);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    toTopBtn.style.display = 'block';
  }
  if (scrolled < coords) {
    toTopBtn.style.display = 'none';
  }
}

function onToTopBtn() {
  window.scrollTo({ top: 200, behavior: 'smooth' });
}

function scrollLoad(multiplier) {
  const { height: cardHeight } = document
    .querySelector('.cards')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * multiplier,
    behavior: 'smooth',
  });
}

export default scroll;
