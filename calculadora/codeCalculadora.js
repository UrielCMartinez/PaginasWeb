const displayValorAnterior=document.getElementById('valor-anterior');
const displayValorActual=document.getElementById('valor-actual');
const botonesNumeros =document.querySelectorAll('.numero');
const botonesOperadores=document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);
botonesNumeros.forEach(boton => {
   boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML)); 
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});

const cambiobtn =document.querySelector('.cambioModo');
const calculadora=document.querySelector('.calculadora');
const iconoCambio=document.querySelector('.iconoCambio');
let isoscuro=true;
cambiobtn.onclick = () => {
    calculadora.classList.toggle('oscuro');
    cambiobtn.classList.toggle('active');
    isDark=!isDark;
}