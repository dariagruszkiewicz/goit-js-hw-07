import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galeryListEl = document.querySelector(".gallery");

const imgPreview = galleryItems.map((item) => item.preview);
const imgOriginal = galleryItems.map((item) => item.original);
const imgDescription = galleryItems.map((item) => item.description);

galleryItems.forEach(function (item, i) {
	const li = document.createElement("li");
	galeryListEl.append(li);
	const div = document.createElement("div");
	div.classList.add("gallery__item");
	li.append(div);
	const a = document.createElement("a");
	a.classList.add("gallery__link");
	a.setAttribute("href", imgOriginal[i]);
	div.append(a);
	const newImg = document.createElement("img");
	a.append(newImg);
	item = newImg;
	newImg.classList.add("gallery__image");
	newImg.setAttribute("src", imgPreview[i]);
	newImg.setAttribute("alt", imgDescription[i]);
	newImg.setAttribute("data-source", imgOriginal[i]);
});

galeryListEl.addEventListener("click", (e) => {
	const instance = basicLightbox.create(`
	<img src=${e.target.dataset.source}>
	`);
	console.log(e.target.dataset.source);
	instance.show();
	e.preventDefault();

	galeryListEl.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			instance.close();
		}
	});
});
