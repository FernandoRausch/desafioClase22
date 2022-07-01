import express from 'express'
import morgan from 'morgan'
import productosRoutes from './routes/productosRoutes.js' 

const app = express()



app.use(express.json())
app.use(morgan('dev'))
app.use('/api/productos-test',productosRoutes);

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Escuchando puerto ${PORT}`)
})