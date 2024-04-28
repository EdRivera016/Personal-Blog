// Event listener to ensure the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    //define varieables
    const blogMain = document.getElementById("blog");

    //function to render a single blog post
    function renderBlogPost(blog, index) {
        const li = document.createElement('li');
        li.setAttribute('data-index', index);

        const title = document.createElement('h4');
        const username = document.createElement('p');
        const content = document.createElement('p');

        content.classList.add('content');
        title.textContent = blog.title;
        content.textContent = blog.content;
        content.setAttribute('id', 'content');
        username.textContent = `By: ${blog.username}`
        username.setAttribute('id', 'username');

        li.append(title, username, content);
        blogMain.appendChild(li);
    }

    //function to render all blog posts
    function renderAllBlogPost() {
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts'))

        if (blogPosts) {
            blogPosts.forEach((blog, index) => {
                renderBlogPost(blog, index);
            });
        }
    }
    //render all blog posts when the  page loads
    renderAllBlogPost();

    // event listener for back button 
    const backButtonLink = document.getElementById("back-button");
    if (backButtonLink) {
        backButtonLink.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    //initialize the page 
    function init() {
        renderAllBlogPost();
    }
});