function setMensaje(msg){
    localStorage.setItem("mensaje", msg);
}

function mostrarMensaje(){
    alert(localStorage.getItem("mensaje"));
}

setMensaje("Hola Mundo!");
mostrarMensaje();
