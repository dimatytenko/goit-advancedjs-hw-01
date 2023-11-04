import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import refs from './refs.js';
import { galleryItems } from './gallery-items';
import { createGalleryMarkup, getLightboxMurkup } from './functions.js';

const galleryMarkup = createGalleryMarkup(galleryItems, getLightboxMurkup);

refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
