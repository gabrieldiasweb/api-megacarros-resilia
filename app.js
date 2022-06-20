import express from 'express';
import routerCarros from "./src/rotas/routesCarros.js"
import databaseMetodosCarros from "./src/DAO/databaseMetodosCarros.js";
import cors from "cors"


const app = express()

const port = process.env.PORT || 3000
app.use(cors())

app.use(express.json())

app.use(routerCarros)

databaseMetodosCarros.createTableCarros()

app.listen(port,()=>{
    console.log("Api Rodando")
})