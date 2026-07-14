// filter album category
function filterCards(region) {
  const tabs = document.querySelectorAll('.collections__tab');
  for (const tab of tabs) {
    const tabLabel = tab.textContent.trim();

    if (tabLabel === region) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  }

  const cards = document.querySelectorAll('.album-card');

  for (const card of cards) {
    const cardRegion = card.dataset.region;
    let shouldShow;

    if (region === 'All Regions') {
      shouldShow = true;
    } else if (cardRegion === region) {
      shouldShow = true;
    } else {
      shouldShow = false;
    }

    if (shouldShow) {
      card.style.display = ''; // back to the default from the CSS
    } else {
      card.style.display = 'none';
    }
  }
}

//zoom into image for pop up tab
document.querySelectorAll('.photo-row__img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    document.getElementById('photo-modal__img').src = img.src;
    openModal();
  });
});

const modalOverlay = document.getElementById('photo-modal');

function openModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on overlay by click background
if (modalOverlay) {
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

