document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('topbar-theme-icon');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');
    });

});