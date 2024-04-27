//collect user input elements 
const usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");

//collect submit button element
const submitButton = document.getElementById("submit-btn");

// add event listener to submit button 
const attachSubmitListener = () => {
    submitButton.addEventListener("click", submitHandler);
};

const submitHandler = (event) => {
        event.preventDefault();
        if (validateInput()) {
            savePost();
       
    }
};
// call function to attach event listener 
attachSubmitListener();
// function to be called when navigating back to landing page
const handlePageLoad = () => {
    attachSubmitListener();
};
// call handlePageLoad when the page loads
window.addEventListener('load', handlePageLoad);

//validate user input 
    const validateInput = () => {
        console.log('Validatin Input...')
        if (usernameEl.value.trim() === `` || titleEl.value.trim() === ``) {
            alert('Please enter all data!');
            return false;
        }
        return true;
    };

    //save post to localstorage
    const savePost = () => {
        const blogInput = {
            username: usernameEl.value.trim(),
            title: titleEl.value.trim(),
            content: contentEl.value.trim()
        };

        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogInput);

        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        console.log('post saved to local storage!');

        window.location.href = 'blog.html';
    };

    const data = () => {

    }

