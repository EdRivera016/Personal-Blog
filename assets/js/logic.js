const themechange = document.getElementById('themechange');
const lightmode = document.querySelector('.lightmode');

let mode = 'light';

themechange.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        lightmode.className = 'dark';
        themechange.innerHTML = '<i class="fa-solid fa-moon"></i>'
        console.log('dark mode')
    } else {
        mode = 'light';
        lightmode.className = 'light';
        themechange.innerHTML = '<i class="fa-solid fa-sun"></i>'
        console.log('light mode');
    }
});

// //function to display blog posts from local storage
// function displayPosts() {
//     const blogPosts = JSON.parse(localStorage.getItem('Blog-Posts')) || [];
//     console.log(blogPosts);
//         const blogPostsContainer = document.getElementById('blog-posts');
//     blogPostsContainer.innerHTML = '';

//     blogPosts.forEach(post => {
//         const postElement = document.createElement('div');
//         postElement.innerHTML = `
//         <h3>${post.title}</h3>
//         <p><strong>Author:</strong> ${post.username}</p>
//         <p>${post.content}</p>
//         `;
//         blogPostsContainer.appendChild(postElement);
//     });
// }

// //Event listener for the display post btn
// const displayPostsBtn = document.getElementById('display-post-btn');
// if (displayPostsBtn) {
// displayPostsBtn.addEventListener('click', displayPosts);
// } else {
//     console.error('Element with Id Display-post-btn not found!!')
// }