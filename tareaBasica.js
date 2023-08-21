let agenda = [];

let contadorId = 1;

function agregarContacto(nombre, numero, correo, ciudad, direccion) {
  let nuevoContacto = {
    id: contadorId,
    nombre: nombre,
    numero: numero,
    correo: correo,
    ubicacion : {
      ciudad: ciudad,
      direccion: direccion,
    }
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

function actualizarContacto(idContacto, nuevoNombre, nuevoNumero, nuevoCorreo, nuevoCiudad, nuevoDireccion) {
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].id !== idContacto) {
            console.log(`El id N° ${idContacto} no encontrado en la lista.`);
        }
            if (agenda[i].id === idContacto) {
                console.log(`El id N° ${idContacto} ha sido actualizado.`);
            if (nuevoNombre !== '') {
                agenda[i].nombre = nuevoNombre;
            }
            if (nuevoNumero !== '') {
                agenda[i].numeroo = nuevoNumero;
            }
            if (nuevoCorreo !== '') {
                agenda[i].correo = nuevoCorreo;
            }
            if (nuevoCiudad !== '') {
                agenda[i].ubicacion.ciudad = nuevoCiudad;
            }
            if (nuevoDireccion !== '') {
                agenda[i].ubicacion.direccion = nuevoDireccion;
            }
        }}}


 
actualizarContacto(2, "pepito", 7, "kudhgfdkhfg@actuals.com");

console.log(agenda);  