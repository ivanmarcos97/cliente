let now = new Date();
alert( now ); // muestra en pantalla la fecha y la hora actuales
///////////////////////////////////
// 0 significa 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// ahora se le agregan 24 horas, se obtiene 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
//////////////////////////////////////////////////////
let date = new Date("2017-01-26");
alert(date);
//////////////////////////////////////////////////////
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // Igual que la línea de arriba, sólo que a los últimos 4 parámetros se les asigna '0' por defecto.
new Date(año, mes, fecha, horas, minutos, segundos, ms);
////////////////////////////////////////////////////////
//Existen métodos que sirven para obtener el año, el mes, y los demás componentes a partir de un objeto de tipo Date:

getFullYear()
//Devuelve el año (4 dígitos)
getMonth()
//Devuelve el mes, de 0 a 11.
getDate()
//Devuelve el día del mes desde 1 a 31. Nótese que el nombre del método no es muy intuitivo.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
//Devuelve los componentes del horario correspondientes.