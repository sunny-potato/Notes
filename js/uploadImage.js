const uploadImage = document.querySelector(".uploadImage"); // filelist!
const displayImages = document.querySelector(".displayImages");
uploadImage.addEventListener("change", () => {
  const selectedImage = uploadImage.files[0];
  const imageReader = new FileReader();
  imageReader.readAsDataURL(selectedImage);
  imageReader.onload = function () {
    const img = document.createElement("img");
    img.src = imageReader.result;
    const imgDiv = document.createElement("div");
    imgDiv.className = "addedImage";
    imgDiv.appendChild(img);
    displayImages.appendChild(imgDiv);
    addDeleteIcon(imgDiv);
  };
});

function addDeleteIcon(imgDiv) {
  const deleteSpan = document.createElement("span");
  deleteSpan.className = "material-symbols-outlined";
  deleteSpan.textContent = "delete";
  imgDiv.appendChild(deleteSpan);
}

// before updating image = no elements related to image such as img, span here
// it means that it returns empty "document.querySelector" of the related elements
displayImages.addEventListener("mouseenter", () => {
  const addedImages = document.querySelectorAll(".addedImage");
  const deleteImageIcons = document.querySelectorAll(".addedImage span");
  deleteImageIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      displayImages.removeChild(addedImages[index]);
    });
  });
});
