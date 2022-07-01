export class ApiClass{
    constructor(){
        this.array = []
    }

    guardar(prod){
        let id = this.array.length === 0 ? 1 :this.array[this.array.length-1].id+1
        const nuevoProd = {...prod,id}
        this.array.push(nuevoProd)
        return nuevoProd
    }

    getAll(){
        return this.array
    }
}