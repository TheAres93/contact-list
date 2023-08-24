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
  console.log(agenda);
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
        console.log("Lista después de borrar:", agenda)
    
    } else {
    console.log(`El id N° ${id} no se puede borrar en la lista.`);
  }
}

function actualizarContacto(idContacto, nuevoNombre, nuevoNumero, nuevoCorreo, nuevoCiudad, nuevoDireccion) {
    let indice = -1;
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].id === idContacto) {
            indice = idContacto;
        if (nuevoNombre !== '') {
            agenda[i].nombre = nuevoNombre;
        }
        if (nuevoNumero !== '') {
            agenda[i].numero = nuevoNumero;
        }
        if (nuevoCorreo !== '') {
            agenda[i].correo = nuevoCorreo;
        }
        if (nuevoCiudad !== '') {
            agenda[i].ubicacion.ciudad = nuevoCiudad;
        }
        if (nuevoDireccion !== '') {
            agenda[i].ubicacion.direccion = nuevoDireccion;
        }}    }
        if (indice === -1){
            console.log(`No se pudo actualizar el contacto N° ${idContacto}.`)
        } else {
            console.log(`Contacto N° ${idContacto} acutalizado.`, agenda)
        }
} 
    

        agregarContacto("Pedro Picapiedra", 560465406, "PedritoP@YabbaDabbaDoo.com","","");
        agregarContacto("Pablo Marmol",560465406, "PedritoP@YabbaDabbaDoo.com","","");
        agregarContacto("Pebbel Picapiedra",560465406, "PedritoP@YabbaDabbaDoo.com","","");
        
        borrarContactoPorId(1);
        borrarContactoPorId(5);
 
        actualizarContacto(5, "", "", "kudhgfdkhfg@actuals.com","asdasf","sfgdfg");
        actualizarContacto(2, "asdasd", "", "kudhgfdkhfg@actuals.com","asdasf","sfgdfg");
