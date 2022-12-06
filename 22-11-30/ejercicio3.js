let monos = [
    {nombre: "lolo", apellido: "orozco"},
    {nombre: "juan", apellido: "orozco"},
    {nombre: "lolo", apellido: "perez"},
    {nombre: "olivia", apellido: "orozco"},
    {nombre: "lola", apellido: "orozco"}
];

let orozcoDistinto = monos.filter(orozco => orozco.apellido == "orozco"); // para filtrar por apellido
console.log(orozcoDistinto);
let monosConcatenados = orozcoDistinto.map(mono => mono.nombre + " " + mono.apellido); //para concatenar los nombres

console.log(monosConcatenados);

let holaMonos = monos.map(monos => `Hola ${monos.nombre} ${monos.apellido}`) ; //para devolver todo el array con hola concatenado
console.log(holaMonos);

holaMonos.forEach(monosHola => console.log(monosHola)); //devuelve el hola concatenado sin estar dentro de un array