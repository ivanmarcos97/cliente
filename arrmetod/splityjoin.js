let nombres = 'Bilbo, Gandalf, Nazgul';

let arr = nombres.split(', ');

for (let name of arr) {
  alert( `Un mensaje para ${name}.` ); // Un mensaje para Bilbo  (y los otros nombres)
}
///////////////////////////////////////////////////////////////////////////
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf
//////////////////////////////////////////////
let str = "test";

alert( str.split('') ); // t,e,s,t
///////////////////////////////////
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // une el array en una string usando ;

alert( str ); // Bilbo;Gandalf;Nazgul