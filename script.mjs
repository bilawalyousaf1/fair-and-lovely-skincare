function handle_change_image(event) {
  event.preventDefault();
  event.target.src = "images/img2.jpeg";
}
function previous_images_back(event) {
  event.preventDefault();
  event.target.src = "images/img1.jpeg";
}

document.addEventListener("mousemove", function (event) {
  const image = document.querySelector(".cursor-follower");

  if (image) {
    image.style.position = "fixed";
    image.style.left = event.clientX + 10 + "px";
    image.style.top = event.clientY + 10 + "px";
  }
});

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
