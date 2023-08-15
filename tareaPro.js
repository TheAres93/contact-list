let agenda = [];

let contadorId = 1;

function agregarContacto(nombre, numero, correo) {
  let nuevoContacto = {
    id: contadorId,
    nombre: nombre,
    numero: numero,
    correo: correo,
  };
  
  agenda.push(nuevoContacto);
  contadorId++;
  console.log(`El contacto ${nombre} ha sido agregado exitosamente.`);
}

function borrarContactoPorId(id) {
    let indice = -1;
    for (let i = 0; i <agenda.length; i++) {
    if (agenda[i].id === id) {
    indice = i;
    break;
    }
}

    if (indice !== -1) {
        console.log(`El contacto ${agenda[indice].nombre} ha sido borrado exitosamente.`);
        agenda.splice(indice, 1);
    
    } else {
    console.log(`El id N° ${id} no encontrado en la lista.`);
  }}

agregarContacto("Pedro Picapiedra", "560465406", "PedritoP@YabbaDabbaDoo.com");
agregarContacto("Pablo Marmol");
agregarContacto("Pebbel Picapiedra");

console.log("Lista antes de borrar:", agenda);

borrarContactoPorId(1);
borrarContactoPorId(5);

console.log("Lista después de borrar:", agenda);