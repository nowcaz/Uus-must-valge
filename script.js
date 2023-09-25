document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light');
            themeToggleBtn.classList.remove('btn-dark');
            themeToggleBtn.classList.add('btn-light');
            themeToggleBtn.textContent = 'Muuda teemat tumedaks';
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
            themeToggleBtn.classList.remove('btn-light');
            themeToggleBtn.classList.add('btn-dark');
            themeToggleBtn.textContent = 'Muuda teemat heledaks';
        }
    });
});
