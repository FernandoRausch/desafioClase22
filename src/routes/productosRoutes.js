import { Router } from "express";
import productosApi from "../daos/productos/productosApi.js";
const router = Router()
const api = new productosApi()

router.post('/',async (req,res)=>{
    let productos = api.ingresar(5)
    res.json(productos)
})

router.get('/',(req,res)=>{
    const todos = api.getAll()
    res.json(todos)
})

export default router