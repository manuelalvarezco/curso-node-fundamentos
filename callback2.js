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

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find((empleado) => {
        return empleado.id === id;
    });

    if (!empleadoDB) {
        callback(`No existe el empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB)
    }

}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find((salario) => {
        return salario.id === empleado.id;
    });

    if (!salarioDB) {
        callback(`No existe salario para el usuario ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}


getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${salario.nombre} es de ${salario.salario}`);
    })
})