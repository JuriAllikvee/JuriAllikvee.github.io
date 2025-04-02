document.addEventListener("DOMContentLoaded", function() {
  console.log("menu.js loaded");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function() {
      navigation.classList.toggle("active");
      console.log("Menu toggled", navigation.classList);
    });
  } else {
    console.error("Элементы menu-toggle или navigation не найдены");
  }
});
