let mesanjeDiscord = {
    'avatar' : "URL imagen",
    'cuerpo' : "Contenido del mensaje",
    'fecha' : "Formato de fecha y hora",
}

let sala = {
    'nombre' : 'name',
    'audio' : false,
    'texto' : false
}

let canal = {
    'nombreCanal' : 'name',
    'salas' : sala,
    'usuarios' : ['user1','user2'],
    'roles' : ['rol1','rol2'],
    'contadorUsuarios' : 0,

}

console.log(canal);