document.addEventListener("DOMContentLoaded", programa);

function programa() {
  let modulos = [];
  let modulo = {};

  let codigo = document.getElementById("codigo");
  let descripcion = document.getElementById("descripcion");
  let curso = document.getElementById("curso");
  let codigociclo = document.getElementById("codigoCiclo");
  let horas = document.getElementById("horas");
  let botongm = document.getElementById("grabarModulo");
  let botongd = document.getElementById("guardarDatos");
  let codigoErr = document.getElementById("codigoErr");
  let descripcionErr = document.getElementById("descripcionErr");
  let cursoErr = document.getElementById("cursoErr");
  let codigoCicloErr = document.getElementById("codigoCicloErr");
  let horasErr = document.getElementById("horasErr");

  botongm.addEventListener("click", guardarmodulo);
  botongd.addEventListener("click", guardardatos);

  function guardardatos() {}

  function guardarmodulo() {
    event.preventDefault();
    let vaciosi = false;
    let bien = true;
    vacio();
    if (vaciosi == true) {
    } else {
      let cod = codigo.value;
      let des = descripcion.value;
      let cur = curso.value;
      let codci = codigociclo.value;
      let hor = horas.value;

      //1
      if (/^\w{4}$/.test(cod)) {
        codigo.classList.remove("rojo");
      } else {
        cod = "";

        codigoErr.innerHTML = "Error";
        codigo.classList.add("rojo");
        bien = false;
      }
      //2
      if (/^[a-zA-Z]|\s*/.test(des)) {
        descripcion.classList.remove("rojo");
      } else {
        des = "";

        descripcionErr.innerHTML = "Error";
        descripcion.classList.add("rojo");
        bien = false;
      }
      //3
      if (/^[1-2]{1}$/.test(cur)) {
        curso.classList.remove("rojo");
      } else {
        cur = "";

        cursoErr.innerHTML = "Error";
        curso.classList.add("rojo");
        bien = false;
      }
      //4
      if (/^\w{4}$/.test(codci)) {
        codigociclo.classList.remove("rojo");
      } else {
        codci = "";

        codigoCicloErr.innerHTML = "Error";
        codigociclo.classList.add("rojo");
        bien = false;
      }
      //5
      if (/^[1-9]{1}[0-9]{0,}$/.test(hor)) {
        horas.classList.remove("rojo");
      } else {
        hor = "";

        horasErr.innerHTML = "Error";
        horas.classList.add("rojo");
        bien = false;
      }
    }
    if (bien == true) {
      guardarenarr();
    }
  }

  function guardarenarr() {
    modulo.codigo = codigo.value;
    modulo.descripcion = descripcion.value;
    modulo.curso = curso.value;
    modulo.codigociclo = codigociclo.value;
    modulo.horas = horas.value;
    for (let key in modulo) {
      //  alert(modulo[key]);
      modulos.push(modulo);
      mostrarentabla();
    }
    // modulos.push(modulo);
    // alert(modulos[1].horas);
  }
  function mostrarentabla() {
    let tabla = document.getElementById("tabla");
    for (let i = 0; i < 5; i++) {
      let fila = document.createElement("tr");
      tabla.append(fila);
      let celdacod = document.createElement("td");
      let celdades = document.createElement("td");
      let celdacur = document.createElement("td");
      let celdacodci = document.createElement("td");
      let celdahoras = document.createElement("td");
      celdacod.append(modulos[i].codigo);
      celdades.append(modulos[i].descripcion);
      celdacur.append(modulos[i].curso);
      celdacodci.append(modulos[i].codigociclo);
      celdahoras.append(modulos[i].horas);

      fila.append(celdacod);
      fila.append(celdades);
      fila.append(celdacur);
      fila.append(celdacodci);
      fila.append(celdahoras);

      //alert(objeto.fechas[0].titulo); // {"name": "iliakan", isAdmin: true}
    }
  }

  function vacio() {
    if (codigo.value == "") {
      codigo.classList.add("rojo");
      vaciosi = true;
    } else {
      codigo.classList.remove("rojo");
    }
    if (descripcion.value == "") {
      descripcion.classList.add("rojo");
      vaciosi = true;
    } else {
      descripcion.classList.remove("errojoror");
    }
    if (curso.value == "") {
      curso.classList.add("rojo");
      vaciosi = true;
    } else {
      curso.classList.remove("rojo");
    }
    if (codigociclo.value == "") {
      codigociclo.classList.add("rojo");
      vaciosi = true;
    } else {
      codigociclo.classList.remove("rojo");
    }
    if (horas.value == "") {
      horas.classList.add("rojo");
      vaciosi = true;
    } else {
      horas.classList.remove("rojo");
    }
  }
}
