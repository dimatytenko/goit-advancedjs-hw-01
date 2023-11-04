import constants from './constants';

export function createGalleryMarkup(galleryItems, getMurkup) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return getMurkup(preview, original, description);
    })
    .join('');
}

export const getLightboxMurkup = (preview, original, description) => {
  return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
      `;
};

export function timeUpdateHandler({ seconds }) {
  localStorage.setItem(constants.PLAYER_TIME_KEY, seconds);
}

export function getLocalStorageTime() {
  return localStorage.getItem(constants.PLAYER_TIME_KEY);
}
