let counter=0;

function getListSize() {
    counter = document.getElementById("lista").getElementsByTagName("li").length;
    console.log(counter);
}

getListSize();

function addListElement(){
    const list=document.getElementById("lista");
    const newElem=document.createElement("li");
    console.log(newElem);
    newElem.textContent = "Elemento "+`${counter}`;
    newElem.classList.add("list-group-item");
    list.appendChild(newElem);
    getListSize();
}