import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const items = [];

const createElementGallery = function (item) {
  const itemLink = document.createElement("a");
  const itemImg = document.createElement("img");
  itemImg.classList = "gallery__image";
  itemImg.alt = item.description;
  itemImg.src = item.preview;
  itemImg.style.width = "340px";
  itemImg.dataset.source = item.original;
  itemLink.classList = "gallery__link";
  itemLink.href = item.original;
  itemLink.append(itemImg);
  items.push(itemLink);
};

galleryItems.forEach((item) => {
  createElementGallery(item);
});

galleryEl.append(...items);

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img alt = ${e.target.alt} src = ${e.target.dataset.source}>`
  );
  instance.show();
  window.addEventListener("keydown", (pressKey) => {
    if (pressKey.key === "Escape") {
      instance.close();
    }
  });
});
