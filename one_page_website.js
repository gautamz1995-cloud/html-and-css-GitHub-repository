document.addEventListener("DOMContentLoaded", function () {

  // Select all images on the page
  const images = document.querySelectorAll("img");

  // Create the modal background
  const modal = document.createElement("div");
  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.8)";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "9999";

  // Create the modal image
  const modalImg = document.createElement("img");
  modalImg.style.maxWidth = "90%";
  modalImg.style.maxHeight = "90%";
  modalImg.style.border = "4px solid white";

  // Add image to modal
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  // Open modal on image click
  images.forEach(function (img) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      modalImg.src = img.getAttribute("data-full") || img.src;
      modal.style.display = "flex";
    });
  });

  // Close modal when clicking anywhere
  modal.addEventListener("click", function () {
    modal.style.display = "none";
  });

});
