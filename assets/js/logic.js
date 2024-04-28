//Functionality for toggling between light and dark mode
const themechange = document.getElementById('themechange');
const lightmode = document.querySelector('.lightmode');

let mode = 'light';

//Event listener to toggle theme on click
themechange.addEventListener('click', function () {
    if (mode === 'light') {
        //switch to dark mode 
        mode = 'dark';
        lightmode.className = 'dark';
        themechange.innerHTML = '<i class="fa-solid fa-moon"></i>'
        console.log('dark mode')
    } else {
        //switch to light mode 
        mode = 'light';
        lightmode.className = 'light';
        themechange.innerHTML = '<i class="fa-solid fa-sun"></i>'
        console.log('light mode');
    }
});