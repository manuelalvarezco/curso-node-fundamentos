// let getNombre = async() => {
//     return 'Manuel';
// }


let getNombre = () => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res('Manuel')
        }, 3000)

    })
}

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${nombre}`;
}

saludo()
    .then(mensaje => {
        console.log(mensaje);
    })