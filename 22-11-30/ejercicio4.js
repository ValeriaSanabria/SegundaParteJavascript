let personas = [
    {nombre: 'Susan', apellido: 'Steward'},
    {nombre: 'Daniel', apellido: 'Longbottom'},
    {nombre: 'Jacob', apellido: 'Black'}
];

personas.forEach(persona => console.log(persona));
console.log("··················································");
let filtro = personas.filter(persona => persona.nombre === 'Susan');
console.log(filtro);
console.log("··················································");
let nombreCompleto = filtro.map(persona => `${persona.nombre}-${persona.apellido}`);
nombreCompleto.forEach(guion => console.log(guion));
