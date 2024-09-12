//----------------------------------------------- DATOS DE USUARIO --------------------------------
var spanFecha = document.getElementById('fecha');
var fechaActual = new Date();

var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1;
var año = fechaActual.getFullYear();

var fechaFormato = dia + '/' + mes + '/' + año;

spanFecha.textContent = fechaFormato;

function obtenerCookie(nombre) {
    let nombreEQ = nombre + '=';
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++){
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if(c.indexOf(nombreEQ) == 0) return c.substring(nombreEQ.length, c.length);
    }
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    const usuario = document.getElementById('nombre');
    const nombreUsuario = obtenerCookie('nombreUsuario');
    if (nombreUsuario) {
        usuario.textContent = nombreUsuario;
    } else {
        usuario.textContent = 'Invitado';
    }
});
//-------------------------------------------------------------------------------------------------
const prod1 = document.getElementById('producto-1');
const prod2 = document.getElementById('producto-2');
const prod3 = document.getElementById('producto-3');
const prod4 = document.getElementById('producto-4');
const prod5 = document.getElementById('producto-5');
const prod6 = document.getElementById('producto-6');

prod1.addEventListener('click', ()=>{
    window.location.href = './pic-1.html';
});
prod2.addEventListener('click', ()=>{
    window.location.href = './pic-2.html';
});
prod3.addEventListener('click', ()=>{
    window.location.href = './pic-3.html';
});
prod4.addEventListener('click', ()=>{
    window.location.href = './pic-4.html';
});
prod5.addEventListener('click', ()=>{
    window.location.href = './pic-5.html';
});
prod6.addEventListener('click', ()=>{
    window.location.href = './pic-6.html';
});

//-------------------------------------------------------------------------------------------------
function cerrarSesion(){
    const si = document.getElementById('si');
    const no = document.getElementById('no');
    const botones = document.getElementById('botones');
    botones.removeAttribute('class');

    if(si.addEventListener('click', function(){
      window.location.href = '../index.html';
    })){
    }else(no.addEventListener('click', function(){
      botones.setAttribute('class', 'botones');
    }));
  }