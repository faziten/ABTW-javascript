function hideText(event){
    if (event.target.textContent === "Ocultar contenidos"){
        event.target.textContent = "Mostrar contenidos"
    }else{
        event.target.textContent = "Ocultar contenidos"
        }
    parentDiv = event.target.parentElement;
    parrafo=parentDiv.getElementsByTagName('p')[0];
    parrafo.classList.toggle("info-hide")
}