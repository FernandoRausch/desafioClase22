import { ApiClass } from "../../contenedor/clase.js";
import {productosMock} from "../../utils/mocks.js"

class productosApi extends ApiClass{
    constructor(){
        super()
    }
    ingresar(cant){
        let productos = []
        for (let i=0; i< cant; i++){
            const producto = productosMock()
            const productoGuardado = this.guardar(producto)
            productos.push(productoGuardado)
        }
        return productos
    }
}

export default productosApi