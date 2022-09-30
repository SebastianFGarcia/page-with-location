let productos = [
    {
        "id": 1,
        "nombre": "Producto 1",
        "img" : "img/img-2.jpg",
        'descripcion':  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem.",
    },
    {
        "id": 2,
        "nombre": "Producto 2",
        "img" : "img/img-3.jpg",
        'descripcion':  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem.",
    },
    {
        "id": 3,
        "nombre": "Producto 3",
        "img" : "img/img-4.jpg",
        'descripcion':  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem.",
    },
    {
        "id": 4,
        "nombre": "Producto 4",
        "img" : "img/img-5.jpg",
        'descripcion':  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem.",
    },{
        "id": 5,
        "nombre": "Producto 5",
        "img" : "img/img-6.jpg",
        'descripcion':  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet lorem.",
    },
];
const close = document.getElementById('close');
const cancelar = document.getElementById('cancelar');
const modal = document.getElementById('modal');
const select_producto = document.getElementById('select_producto');
close.addEventListener('click', () => {
    modal.classList.remove('modal-open');
    modal.classList.add('modal-close');
});
cancelar.addEventListener('click', () => {
    modal.classList.remove('modal-open');
    modal.classList.add('modal-close');
});
let nombre_p;
seleccionar.addEventListener('click', () => {
    const name_product = document.getElementById('name-product');
    const img_product = document.getElementById('img-product');
    const  description_product = document.getElementById('description-product');
    if (select_producto.value == 0){
        alert('Seleccione un producto');
    }else{  
        modal.classList.remove('modal-close');
        modal.classList.add('modal-open');
        let product = productos.find(producto => producto.id == select_producto.value);
        name_product.textContent = product.nombre;
        nombre_p = product.nombre;
        img_product.src = product.img;
        description_product.textContent = product.descripcion;
    }


});

const comprar = document.getElementById('comprar');
comprar.addEventListener('click', () => {
    window.location.href = 'compra.html';
    window.localStorage.setItem('nombre_p', nombre_p);
});




