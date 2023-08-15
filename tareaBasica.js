let libreta = ['Luis Molina', 'Darwin Gutierrez','Pablo Marmol'];

function añadeContacto(newContact) {libreta.push(newContact);}

function borraContacto(posicion) {libreta.splice(posicion,1);}

añadeContacto('Nicolas Maduro');
borraContacto(2);

for(i=0;libreta.length>i;i++){console.log(libreta[i]);}