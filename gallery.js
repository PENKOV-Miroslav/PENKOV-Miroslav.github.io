// Sélectionnez toutes les collections de cartes
const cardCollections = document.querySelectorAll('.card-collection');

// Parcourez chaque collection de cartes
cardCollections.forEach(collection => {
  const cardWrapper = collection.querySelector('.card-wrapper');
  const prevButton = collection.querySelector('.prev-button');
  const nextButton = collection.querySelector('.next-button');

  let scrollPosition = 0;
  const cardWidth = cardWrapper.offsetWidth;

  prevButton.addEventListener('click', () => {
    scrollPosition += cardWrapper.offsetWidth;
    if (scrollPosition > 0) {
      scrollPosition = 0;
    }
    cardWrapper.style.transform = `translateX(${scrollPosition}px)`;
  });

  nextButton.addEventListener('click', () => {
    const maxScroll = -(cardWrapper.scrollWidth - cardWrapper.offsetWidth);
    scrollPosition -= cardWrapper.offsetWidth;
    if (scrollPosition < maxScroll) {
      scrollPosition = maxScroll;
    }
    cardWrapper.style.transform = `translateX(${scrollPosition}px)`;
  });
});
