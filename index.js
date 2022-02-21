// cambio el contenido del h1
const titulo = document.querySelector("h1");
titulo.innerHTML = "Cambie el titulo"

// Capturar los li en una variable 
const elementos = document.querySelectorAll(".elementos");
console.log(elementos)
// Recorrer los li y visualizar su contenido 
for (let elemento of elementos) {
    console.log(elemento.textContent)
};

// Capture el div y agregue un p en el div mediante innerHTML
const div = document.querySelector(".contenedor");
div.innerHTML = "<p>Contenido del div </p>"
console.log(div);

// Cree un ul un li y los combine despues lo meti al body 
const li = document.createElement("li");
li.innerHTML = "<p> ITEM </p>" 
const listado = document.createElement("ul");
listado.append(li);
const body = document.querySelector("body")
body.append(listado)

//Capture los li y luego le inserte con un foreach elemento 
const lis = document.querySelectorAll(".listado")
lis.forEach(item => {
    item.innerHTML = "elemento"

    console.log(item)
});



