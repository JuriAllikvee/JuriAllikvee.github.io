        // Переключение темы
        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
        }

        // Пример сдвига для отзывов (review-slider)
        function moveSlide(direction) {
            const slidesContainer = document.querySelector('.slides');
            const slideWidth = slidesContainer.offsetWidth;
            // Простейшая реализация: считываем текущий transform, либо 0
            const style = window.getComputedStyle(slidesContainer);
            const matrix = new WebKitCSSMatrix(style.transform);
            let currentX = matrix.m41; // текущий translateX

            // Расчёт нового X (± половину или целую ширину)
            // Можно менять логику под ваши нужды
            const newX = currentX + (direction * slideWidth);

            // Лимиты (не дать уехать дальше концов)
            // Это демо, можно улучшить, сохраняя индекс в переменной
            slidesContainer.style.transform = `translateX(${newX}px)`;
        }

        // Модальное окно
        document.addEventListener('DOMContentLoaded', () => {
            const signupForm = document.querySelector('.signup form');
            const modal = document.getElementById('popupModal');
            const closeBtn = document.querySelector('.closeModal');
            const popupForm = document.getElementById('popupForm');

            // При нажатии на Submit (в секции Sign Up) открываем модалку
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault(); // чтобы не перезагружать страницу
                modal.style.display = 'block';
            });

            // Закрыть модалку по нажатию на «крестик»
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            // Закрыть модалку при клике вне её содержимого
            window.addEventListener('click', (e) => {
                if (e.target == modal) {
                    modal.style.display = 'none';
                }
            });

            // При сабмите формы внутри модального окна
            popupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Данные из всплывающего окна отправлены!');
                // Закрываем модалку
                modal.style.display = 'none';
            });
        });