const photoFallbacks = [
  ...document.querySelectorAll(".polaroid img, .memory-card img"),
];

photoFallbacks.forEach((image, index) => {
  const swapMissingPhoto = () => {
    const label = index < 2 ? "Add letter photo" : `Add memory ${index - 1}`;
    image.replaceWith(createPhotoPlaceholder(label));
  };

  image.addEventListener("error", swapMissingPhoto, { once: true });

  if (image.complete && image.naturalWidth === 0) {
    swapMissingPhoto();
  }
});

function createPhotoPlaceholder(label) {
  const placeholder = document.createElement("div");
  placeholder.className = "photo-placeholder";
  placeholder.textContent = label;
  placeholder.setAttribute("aria-label", label);
  return placeholder;
}

document.querySelector(".confetti-btn").addEventListener("click", () => {
  const colors = ["#f25f7f", "#f5a742", "#65c6a4", "#6aa7ff", "#8e6ad8"];

  for (let i = 0; i < 90; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    if (i % 5 === 0) {
      piece.classList.add("heart");
    }
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.45}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    document.body.append(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
});
