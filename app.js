//Se trae el modelo del servidor
const ServidorModelo=require('./models/ServidorModelo.js')

//se trae el dotenv
require('dotenv').config()

//Puedo personalizar mi servidor
const servidorJugadores=new ServidorModelo()

//Encender el servidor
servidorJugadores.encenderServidor()
