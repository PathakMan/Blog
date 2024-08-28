const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".s-container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const categories = document.querySelectorAll(".category");
const subcategories = document.querySelectorAll(".subcategories");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const categoryName = category.getAttribute("data-category");
    const activePosts = document.querySelectorAll(
      `.blog-post[data-category="${categoryName}"]`
    );

    categories.forEach((cat) => cat.classList.remove("active"));
    category.classList.add("active");

    blogPosts.forEach((post) => post.classList.remove("active"));
    activePosts.forEach((post) => post.classList.add("active"));

    if (category.querySelector(".subcategories")) {
      subcategories.forEach((subcat) => subcat.classList.remove("active"));
      category.querySelector(".subcategories").classList.add("active");
    }
  });
});

$(document).ready(function () {
  $("#myDropdown").select2();
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // We'll add the code to send the form data to the server here
});
