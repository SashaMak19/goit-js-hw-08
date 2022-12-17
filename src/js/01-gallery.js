import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, description, original }) => `<li>
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a></li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

const arrLinks = document.querySelectorAll('a');
arrLinks.forEach(link => {
  link.style.boxShadow = 'none';
});

new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
