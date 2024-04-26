//define varieables
const backButtonLink = document.getElementById("back-button");
const blogMain = document.getElementById("blog");

//function to handle back button click
function handleBackButtonClick() {
    window.location.href = 'index.html';
}

//function to render a single blog post
function renderBlogPost(blog) {
    const li = document.createElement('li');
    li.setAttribute('data-index', i);

    const title = document.createElement('h4');
    const username = document.createElement('p');
    const content = document.createElement('p');

    content.classList.add('content');
    title.textContent = blog.title;
    content.textContent = blog.content;
content.id = ('content');
username.textContent = `By: ${blog.username}`
username.id = 'username';

li.append(title, username, content);
blogMain.appendChild(li);
}

//function to render all blog posts
function renderAllBlogPost() {
    const blogPosts = JSON.parse(localStorage.getItem('blogposts'))

    if (blogPosts) {
        blogPosts.forEach(blog => {
            renderBlogPost(blog);
        });
    }
}

// event listener for back button 
backButtonLink.addEventListener('click', handleBackButtonClick);

//initialize the page 
function init() {
    renderAllBlogPosts();
}

//call the init function when the page is loaded 
document.addEventListener('DOMContentLoaded', init);


//finish readme 
//try to fix alert