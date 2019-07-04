setTimeout(() => {
    // console.log('Hello');
}, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Manuel',
        id
    }


    if (usuario.id == 2) {
        console.log(`El usuario con el id ${id} no existe en la bd`);
    } else {

        callback(null, usuario)
    }

}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    } else {

        console.log('Usuario de bd ', usuario);
    }
})