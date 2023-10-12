import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryHTML = galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>        
    `;
}).join('');

const galleryList = document.querySelector('.gallery');
galleryList.innerHTML = galleryHTML;

let gallery = new SimpleLightbox(
    '.gallery a',
    {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250
    }
);
