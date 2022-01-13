let h3 = document.createElement("h3");
h3.textContent = "Primer árbol";
let contenedor = document.querySelector("body");
contenedor.prepend(h3);
h3.style.backgroundColor = "green";
h3.style.fontSize = "2em";
h3.style.textAlign = "center";

let boton1 = document.getElementById("botonBorrar");
boton1.addEventListener("click", borrar);
function borrar() {
  let texto = prompt("que hoja desea borrar");
  let hojas = document.getElementsByClassName("hoja");
  let confirm = true;
  for (hoja of hojas) {
    if (texto == hoja.textContent) {
      confirm = false;
    }
  }
  if (confirm == true) {
    alert("la hoja selecionada no existe");
  } else {
    for (hoja of hojas) {
      if (texto == hoja.textContent) {
        alert("la hoja ha sido borrada");
        hoja.remove();
      }
    }
  }
}

let boton2 = document.getElementById("botonInsertar");
boton2.addEventListener("click", insertar);
function insertar() {
  let confirm2 = true;
  let li = document.querySelectorAll("li");
  let texto2 = prompt("En que rama quiere insertar la hoja");
  for (ramas of li) {
    if (texto2 == ramas.firstChild.data.trim()) {
      confirm2 = false;
    }
  }
  if (confirm2 == true) {
    alert("la rama selecionada no existe");
  } else {
    let pos = prompt("Primera o Ultima hoja");
    let nhoja = prompt("Texto de la nueva hoja");
    let nli = document.createElement("li");
    nli.textContent = nhoja;
    nli.className = "class";

    for (ramas of li) {
      if (texto2 == ramas.firstChild.data.trim()) {
        if (pos == "Primera") {
          ramas.prepend(nli);
        } else ramas.append(nli);
      }
    }
  }
}
