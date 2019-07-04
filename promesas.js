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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find((empleado) => {
            return empleado.id === id;
        });

        if (!empleadoDB) {
            reject(`No existe el empleado con el id ${id}`);
        } else {
            resolve(empleadoDB)
        }
    })

}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => {
            return salario.id === empleado.id;
        });

        if (!salarioDB) {
            reject(`No existe salario para el usuario ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })


}

// getEmpleado(3)
//     .then(empleado => {
//         getSalario(empleado)
//             .then(res => {
//                 console.log(`El salario de ${res.nombre} es de ${res.salario}`);
//             }, (err) => {
//                 console.log(err);
//             })
//     }, (err) => {
//         console.log(err);
//     })

getEmpleado(2)
    .then(empleado => {
        return getSalario(empleado)
    })
    .then(res => {
        console.log(`El salario de ${res.nombre} es de ${res.salario}`);
    })
    .catch(err => {
        console.log(err);
    })