let empleados = [{
        id: 1,
        nombre: 'Manuel Alvarez'
    },
    {
        id: 2,
        nombre: 'Martin'
    },
    {
        id: 3,
        nombre: 'Dahya'
    }
];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]


let getEmpleado = async(id) => {



    let empleadoDB = empleados.find((empleado) => {
        return empleado.id === id;
    });

    if (!empleadoDB) {
        return new Error(`No existe el empleado con el id ${id}`);
    } else {
        return empleadoDB
    }


}

let getSalario = async(empleado) => {


    let salarioDB = salarios.find((salario) => {
        return salario.id === empleado.id;
    });

    if (!salarioDB) {
        return new Error(`No existe salario para el usuario ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }



}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return `${salario.nombre} tiene  un salario de ${salario.salario}`
}

getInformacion(1)
    .then((mensaje) => {
        console.log(mensaje);
    }).catch(err => {
        console.log(err);
    })