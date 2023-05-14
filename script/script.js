let navbar = document.querySelector(".menu-list");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#shopping").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".inputs");

document.querySelector("#search-script").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

Window.onscroll = () => {
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};
