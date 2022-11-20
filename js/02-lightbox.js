import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const items = [];

const createElementGallery = function (item) {
  const itemLi = document.createElement("li");
  const itemLink = document.createElement("a");
  const itemImg = document.createElement("img");
  itemImg.classList = "gallery__image";
  itemImg.alt = item.description;
  itemImg.src = item.preview;
  itemImg.style.width = "340px";
  itemLink.classList = "gallery__item";
  itemLink.href = item.original;
  itemLink.append(itemImg);
  itemLi.append(itemLink);
  items.push(itemLi);
};


galleryItems.forEach((item) => {
  createElementGallery(item);
});

galleryEl.append(...items);

const galleryLightbox = new SimpleLightbox(".gallery .gallery__item", {
  captions: true,
  captionDelay: 250,  
  captionPosition: 'bottom',
  captionsData: 'alt',
});

galleryLightbox.on();

