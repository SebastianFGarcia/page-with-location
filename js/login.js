const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('login');
const errorUser = document.getElementById('errorUser');
const errorPassword = document.getElementById('errorPassword');

function validateForm() {
    let isValid = true;
   
    if (username.value != 'carlitos' || password.value != '123456789') {
        errorUser.textContent = 'El usuario no es correcto';
        errorPassword.textContent = 'La contraseña no es correcta';
        username.classList.add('is-invalid');
        password.classList.add('is-invalid');
        isValid = false;
    }else {
        errorUser.textContent = '';
        errorPassword.textContent = '';
        username.classList.remove('is-invalid');
        password.classList.remove('is-invalid');
    }
    return isValid;
}