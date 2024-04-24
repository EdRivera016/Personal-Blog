const themechange = document.getElementById('themechange');
const lightmode = document.querySelector('.lightmode');

let mode = 'light';

themechange.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        lightmode.className = 'dark';
        themechange.textContent = <i class="fa-solid fa-moon"></i>
        console.log('dark mode')
    } else {
        mode = 'light';
        lightmode.className = 'light';
        themechange.textContent = <i class="fa-solid fa-sun"></i>
        console.log('light mode');
    }
});