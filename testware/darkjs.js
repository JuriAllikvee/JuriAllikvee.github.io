document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeBtn = document.querySelector(".toggle-theme");
    const body = document.body;

    toggleThemeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        toggleThemeBtn.textContent = body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
    });
});