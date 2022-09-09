// Aqui comienzo mi plactica con un comentario
var miCadena = "string"; //defino una variable, con nombre, asigno un valor cadena
var miBooleano = true; //defino una variable, con nombre, asigno un valor booleano
var miNumero = 46; //defino una variable, con nombre, asigno un valor numerico

console.log ("Por el momento no usare la consola.");
document.write ("Esta es una variable cadena: " + miCadena + "<br>y Esta es una variable numerica: " + miNumero + "<br>y Esta es una variable booleana: " + miBooleano);

var longitud = miCadena.length;
document.write("<br>La longitud de la palabra string es de: " + longitud +" caracteres");

var miAccesoCaracteres = "Esto es una secuencia";
document.write("<br>" + miAccesoCaracteres);
document.write("<br>y aqui esta la posicion 3 de esa secuencia: " + miAccesoCaracteres[3] + "<br>");

var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4],
                        ["pan", 5], ["refresco", 7], ["pollo", 7]];

var total = miListaDeCompras.length;
var n = 0;
    for (n=0; n<total; n++) {
        document.write("<br>Voy a comprar " + miListaDeCompras[n][1] + " unidades de " + miListaDeCompras[n][0] + ".");
    }
//funciones
function mensaje1(){
  document.write("<br>Hola Mundo!");
}
mensaje1();
mensaje1();
