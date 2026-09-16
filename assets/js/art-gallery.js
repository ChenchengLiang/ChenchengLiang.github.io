(() => {
  const dataElement = document.getElementById('art-gallery-data');
  const modal = document.getElementById('art-gallery-modal');

  if (!dataElement || !modal) return;

  let collections;

  try {
    collections = JSON.parse(dataElement.textContent);
  } catch (error) {
    console.error('Unable to read the art collection data.', error);
    return;
  }

  const collectionsById = new Map(
    collections.map((collection) => [collection.id, collection])
  );
  const cards = document.querySelectorAll('.art-gallery-card');
  const closeButton = modal.querySelector('.art-gallery-close');
  const previousButton = modal.querySelector('.art-gallery-prev');
  const nextButton = modal.querySelector('.art-gallery-next');
  const imageSlot = document.getElementById('art-gallery-image-slot');
  const title = document.getElementById('art-gallery-modal-title');
  const description = document.getElementById('art-gallery-modal-description');
  const currentImage = document.getElementById('art-gallery-current-image');
  const totalImages = document.getElementById('art-gallery-total-images');

  if (
    !closeButton ||
    !previousButton ||
    !nextButton ||
    !imageSlot ||
    !title ||
    !description ||
    !currentImage ||
    !totalImages
  ) {
    return;
  }

  const modalImage = new Image();
  modalImage.className = 'art-gallery-modal-image';
  modalImage.draggable = false;
  imageSlot.append(modalImage);

  let activeCollection = null;
  let activeImageIndex = 0;
  let activeTrigger = null;

  const preloadAdjacentImages = () => {
    if (!activeCollection || activeCollection.images.length < 2) return;

    const imageCount = activeCollection.images.length;
    const adjacentIndexes = [
      (activeImageIndex - 1 + imageCount) % imageCount,
      (activeImageIndex + 1) % imageCount
    ];

    adjacentIndexes.forEach((index) => {
      const image = new Image();
      image.src = activeCollection.images[index];
    });
  };

  const renderActiveImage = () => {
    if (!activeCollection) return;

    modalImage.src = activeCollection.images[activeImageIndex];
    modalImage.alt = `${activeCollection.card_title}, image ${activeImageIndex + 1}`;
    currentImage.textContent = String(activeImageIndex + 1);
    totalImages.textContent = String(activeCollection.images.length);
    preloadAdjacentImages();
  };

  const openGallery = (collectionId, trigger) => {
    const collection = collectionsById.get(collectionId);
    if (!collection || collection.images.length === 0) return;

    activeCollection = collection;
    activeImageIndex = 0;
    activeTrigger = trigger;
    title.textContent = collection.title;
    description.textContent = collection.description;
    renderActiveImage();

    modal.hidden = false;
    document.body.classList.add('art-gallery-open');
    closeButton.focus();
  };

  const closeGallery = () => {
    if (modal.hidden) return;

    modal.hidden = true;
    document.body.classList.remove('art-gallery-open');
    modalImage.removeAttribute('src');
    activeCollection = null;

    if (activeTrigger) activeTrigger.focus();
    activeTrigger = null;
  };

  const changeImage = (direction) => {
    if (!activeCollection) return;

    const imageCount = activeCollection.images.length;
    activeImageIndex = (activeImageIndex + direction + imageCount) % imageCount;
    renderActiveImage();
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      openGallery(card.dataset.collection, card);
    });
  });

  closeButton.addEventListener('click', closeGallery);
  previousButton.addEventListener('click', () => changeImage(-1));
  nextButton.addEventListener('click', () => changeImage(1));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeGallery();
  });

  document.addEventListener('keydown', (event) => {
    if (modal.hidden) return;

    if (event.key === 'Escape') {
      closeGallery();
      return;
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      changeImage(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
})();
