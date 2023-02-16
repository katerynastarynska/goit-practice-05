import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

function createItemsMarkUp(items) {
    return items.map((item) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" 
            src="${item.preview}" 
            alt="${item.description}" 
            title="${item.description}" 
            data-source="${item.original}" />   
        </a>
    </div>`
    }).join('')
}

galleryEl.insertAdjacentHTML("beforeend", createItemsMarkUp(galleryItems));

const options = {
    captionDelay: 250,
    captionPosition: 'bottom',
}

const lightbox = new SimpleLightbox('.gallery a', options);

 console.log(lightbox);