import databaseMetodosCarros from "../DAO/databaseMetodosCarros.js";
import carrosModels from "../models/carrosModels.js";

export async function insrCarros(req, res) {
    try {
        const tabela = await databaseMetodosCarros.createTableCarros()
        const carro = new carrosModels(...Object.values(req.body))
        const response = await databaseMetodosCarros.inserirCarro(carro)
        res.status(201).json(response)
    }
    catch(e) {
            res.status(400).json({erro:e.message})
    }
}
export async function updCarro(req, res) {
    try {
        const carro = new carrosModels(req.params.id, req.body.modelo, req.body.preco)
        const response = await databaseMetodosCarros.updateCarro(carro,req.params.id)
        res.status(201).json(response)
    }
    catch(e) {
        res.status(400).json({erro:e.message})
    }     
}

export async function delCarro ( req,res ){
    try{
        const response = await databaseMetodosCarros.deleteCarro(req.params.id) 
        res.status(201).json(response)
    }
    catch(e) {
        res.status(400).json({erro:e.message})
    }    
}

export async function selCarro ( req,res ){
    try{
        const response = await databaseMetodosCarros.selecionarCarro(req.params.id) 
        res.status(201).json(response)
    }
    catch(e) {
        res.status(400).json({erro:e.message})
    }    
}
export async function exbCarro ( req,res ){
    try{
        const response = await databaseMetodosCarros.exibirCarro() 
        res.status(201).json(response)
    }
    catch(e) {
        res.status(400).json({erro:e.message})
    }    
}
