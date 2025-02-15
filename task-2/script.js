document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleButton.innerText = 'Dark Mode';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleButton.innerText = 'Light Mode';
        }

    });
});