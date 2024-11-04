let hidden = true;

function toggleText(){
    const textoAdicional = document.getElementById("textoAdicional");
    textoAdicional.classList.toggle("additional-hidden");

    const toggleText=document.getElementById("toggleText");

    if(hidden) {
        toggleText.innerHTML = "Ocultar exceso de texto"
    }else{
        toggleText.innerHTML = "Seguir leyendo"
    }

    hidden = !hidden;
}