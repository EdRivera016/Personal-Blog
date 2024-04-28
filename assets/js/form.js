// Event listener to ensure the DOM content is fully loaded 
document.addEventListener('DOMContentLoaded', function () {
    //collect user input elements 
    const usernameEl = document.getElementById("username");
    const titleEl = document.getElementById("title");
    const contentEl = document.getElementById("content");

    // function to attach event listener to submit button 
    const attachSubmitListener = () => {
        const submitButton = document.getElementById("submit-btn");
        if (submitButton) {
            submitButton.addEventListener("click", submitHandler);
        } else {
            console.error('submit button not found')
        }
    };

    //fucntion to handle form submission
    const submitHandler = (event) => {
        event.preventDefault();
        if (validateInput()) {
            savePost();
            clearInputFields();
            alert('Post Saved Successfully!');
            return false
        }
    };

    //function to clear input fields
    const clearInputFields = () => {
        usernameEl.value = '';
        titleEl.value = '';
        contentEl.value = '';
    };

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
    // call function to attach event listener
    attachSubmitListener(); 
});
