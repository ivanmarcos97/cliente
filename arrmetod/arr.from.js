//Existe un método universal Array.from que toma un valor iterable o simil-array y crea un Array ¨real¨ a partir de él. De esta manera podemos llamar y usar métodos que pertenecen a una matriz.

//Por ejemplo:

let arrayLike = {
  0: "Hola",
  1: "Mundo",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // Mundo (el método pop funciona)


/////////////////////////////////////////////////////////
// suponiendo que range se toma del ejemplo anterior
let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 (la conversión de matriz a cadena funciona)
////////////////////////////////////////////////////////////////
Aquí usamos Array.from para convertir una cadena en una matriz de caracteres:

let str = '𝒳😂';

// separa str en un array de caracteres
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2