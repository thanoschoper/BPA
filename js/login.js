const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector(".form-box.register")
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', (e) => {
    registerForm.classList.add('active');
    loginForm.classList.remove('active')
});