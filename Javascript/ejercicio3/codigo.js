function setMensaje(msg){
    localStorage.setItem("mensaje", msg);
}

function mostrarVentana(){
    if (confirm(localStorage.getItem("mensaje"))){
        console.log("Has clicado OK");
    } else {
        console.log("Has clicado Cancelar")
    }
}

setMensaje("Hola Mundo!");
mostrarVentana();
