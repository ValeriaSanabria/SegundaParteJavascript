const lugaresVisitados = []

function irDePaseo() {

setTimeout(function() {

lugaresVisitados.push('Salta');

setTimeout(function() {

lugaresVisitados.push('Cordoba');

setTimeout(function() {

lugaresVisitados.push('Jujuy');

setTimeout(function() {

lugaresVisitados.push('Tierra del fuego');

console.log(lugaresVisitados.toString())

},1000);

},1000);

},1000);

},1000);

}

irDePaseo();