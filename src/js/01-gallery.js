import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galeryListEl = document.querySelector(".gallery");

const imgPreview = galleryItems.map((item) => item.preview);
const imgOriginal = galleryItems.map((item) => item.original);
const imgDescription = galleryItems.map((item) => item.description);

console.log(imgOriginal);
console.log(imgDescription);

galleryItems.forEach(function (item, i) {
	const li = document.createElement("li");
	galeryListEl.append(li);
	const newImg = document.createElement("img");
	li.append(newImg);
	item = newImg;
	console.log(item);
	newImg.setAttribute("src", imgPreview[i]);
	newImg.setAttribute("alt", imgDescription[i]);
});
