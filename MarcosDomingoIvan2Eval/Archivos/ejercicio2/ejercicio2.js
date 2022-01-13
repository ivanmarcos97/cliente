let libros = [
  {
    ISBN: "978-84-204-3571-8",
    TITULO: "Tiempos recios",
    AUTOR: "Mario Vargas Llosa",
    EDITORIAL: "Alfaguara",
    IMG: "tiemposRecios.jfif",
  },
  {
    ISBN: "978-84-204-3547-3",
    TITULO: "Sidi",
    AUTOR: "Arturo Pérez-Reverte",
    EDITORIAL: "Alfaguara",
    IMG: "sidi.jfif",
  },
  {
    ISBN: "978-84-17624-27-9",
    TITULO: "El último barco",
    AUTOR: "Domingo Villar",
    EDITORIAL: "Siruela",
    IMG: "barco.jfif",
  },
  {
    ISBN: "978-84-9199-137-3",
    TITULO: "Churchill",
    AUTOR: "Andrew Roberts",
    EDITORIAL: "Critica",
    IMG: "churchill.jfif",
  },
  {
    ISBN: "978-84-670-5701-0",
    TITULO: "Fracasologia",
    AUTOR: "María Elvira Roca Barea",
    EDITORIAL: "Espasa",
    IMG: "fracasologia.jfif",
  },
];

let tabla = document.getElementById("tablaLibros");

let tr = document.createElement("tr");
for (let i = 0; i < libros.length; i++) {
  let td = document.createElement("td");

  for (let y = 0; y < libros.length; y++) {
    td.innerHTML = libros[i][y];
    tr.append(td);
  }
}
tabla.append(tr);
