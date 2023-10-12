import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryHTML = galleryItems.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>        
    `;
}).join('');

const galleryList = document.querySelector('.gallery');
galleryList.innerHTML = galleryHTML;
galleryList.addEventListener('click', onClickGalleryList);

let imageModalWindow = null;

function onClickGalleryList(event) {
    event.preventDefault();    

    const imgUrl = event.target.dataset['source'];
    imageModalWindow = basicLightbox.create(
        `<img src="${imgUrl}" />`,
        {
            closable: false,
            className: 'active-modal',
            onClose: () => {
                disableImageClickListener();
                disableImageEscapeKeyListener();
            }
        }
    );
    imageModalWindow.show(() => {
        enableImageClickListener();
        enableImageEscapeKeyListener();
    });
}

function onClickActiveImage(event) {
    imageModalWindow.close();    
}

function onKeydownEscape(event) {
    event.preventDefault();

    if (event.code === 'Escape') {
        imageModalWindow.close();
    }
}

function enableImageClickListener() {
    document.querySelector('.active-modal').addEventListener('click', onClickActiveImage);
}

function disableImageClickListener() {
    document.querySelector('.active-modal').addEventListener('click', onClickActiveImage);
}

function enableImageEscapeKeyListener() {
    document.addEventListener('keydown', onKeydownEscape);
}

function disableImageEscapeKeyListener() {
    document.removeEventListener('keydown', onKeydownEscape);
}
