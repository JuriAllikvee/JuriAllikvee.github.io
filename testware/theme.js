document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeBtn = document.querySelector(".toggle-theme");
    const body = document.body;

    // Функция для применения сохранённой темы
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark-theme");
            if (toggleThemeBtn) {
                toggleThemeBtn.textContent = "Light Mode";
            }
        } else {
            body.classList.remove("dark-theme");
            if (toggleThemeBtn) {
                toggleThemeBtn.textContent = "Dark Mode";
            }
        }
    };

    // Применяем сохранённую тему при загрузке страницы
    applySavedTheme();

    // Событие переключения темы
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener("click", () => {
            body.classList.toggle("dark-theme");

            // Сохраняем текущую тему в localStorage
            if (body.classList.contains("dark-theme")) {
                localStorage.setItem("theme", "dark");
                toggleThemeBtn.textContent = "Light Mode";
            } else {
                localStorage.setItem("theme", "light");
                toggleThemeBtn.textContent = "Dark Mode";
            }
        });
    }
});
