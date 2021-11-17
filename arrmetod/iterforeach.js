//El método arr.forEach permite ejecutar una función a cada elemento del array.

//La sintaxis:

arr.forEach(function(item, index, array) {
  // ... hacer algo con el elemento
});
//Por ejemplo, el siguiente código muestra cada elemento del array:

// para cada elemento ejecuta alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
//Y este caso más detallado da la posición del elemento en el array:

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
//El resultado de la función (si lo hay) se descarta y se ignora.