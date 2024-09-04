document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const resetPasswordForm = document.getElementById('reset-password-form');
    const showSignupLink = document.getElementById('show-signup-link');
    const backToLoginFromSignup = document.getElementById('back-to-login-from-signup');
    const backToLoginFromReset = document.getElementById('back-to-login-from-reset');
    const forgotPasswordLink = document.getElementById('forgot-password-link');

    // Toggle between login and signup forms
    showSignupLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    backToLoginFromSignup.addEventListener('click', (event) => {
        event.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Toggle between login and reset password forms
    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginForm.classList.add('hidden');
        resetPasswordForm.classList.remove('hidden');
    });

    backToLoginFromReset.addEventListener('click', (event) => {
        event.preventDefault();
        resetPasswordForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Handle signup
    document.getElementById('signup').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Conta criada com sucesso!');
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Handle login
    document.getElementById('login').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
          location.href='https://big-loser.site'
            alert('Login bem-sucedido!');
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});
