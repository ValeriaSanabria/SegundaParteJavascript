let monos = [
    {nombre: "lolo", apellido: "orozco"},
    {nombre: "lolo", apellido: "orozco"},
    {nombre: "lolo", apellido: "perez"},
    {nombre: "lolo", apellido: "orozco"},
    {nombre: "lolo", apellido: "orozco"}
]

let orozcoDistinto = monos.filter(orozco => orozco.apellido === "orozco");
console.log(orozcoDistinto)