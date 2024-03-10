let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let namefield = document.querySelector(".namefield");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");

signInBtn.addEventListener('click', () => {
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    // Removed reference to .text
    // text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click', () => {
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    // Removed reference to .text
    // text.innerHTML = 'Password Suggestion';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});





    