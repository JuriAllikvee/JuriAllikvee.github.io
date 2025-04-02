document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('quoteModal');
    var openModalBtn = document.getElementById('openModal');
    var closeModalBtn = document.getElementById('closeModal');

    openModalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});