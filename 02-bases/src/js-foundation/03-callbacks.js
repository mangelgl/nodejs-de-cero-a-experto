/**
 * La idea con los callbacks es mandar a la función unas instrucciones
 * para ejecutar cuando se obtenga el usuario (en este caso). Los callbacks
 * se definen usualmente en la llamada a la función.
*/

const users = [
    {
        id: 1,
        name: "John Doe"
    },
    {
        id: 2,
        name: "Jane Doe"
    }
]

function getUserById (id, callback) {
    const user = users.find(user => user.id === id)

    if (!user) {
        return callback(`User not found with id ${id}`)
    }

    return callback(null, user)
}

module.exports = {
    getUserById
}