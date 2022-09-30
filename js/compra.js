const aceptar = document.getElementById('aceptar');
let nombre = window.localStorage.getItem('nombre_p');
const compra = document.getElementById('compra');
compra.textContent = nombre;
aceptar.addEventListener('click', () => {
    window.location.href = 'principal.html';

});