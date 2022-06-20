import { Router } from 'express'
import { insrCarros, updCarro, delCarro, selCarro, exbCarro } from "../controllers/controllersCarros.js"

const routerCarros = Router ()
routerCarros.get("/",(req,res) => {
    res.send(`<h1> Minha Garagem</h1>`)
})
routerCarros.get("/garagem",exbCarro)
routerCarros.get("/garagem/:id", selCarro)
routerCarros.post("/garagem", insrCarros)
routerCarros.put("/garagem/:id",updCarro)
routerCarros.delete("/garagem/:id", delCarro)

export default routerCarros