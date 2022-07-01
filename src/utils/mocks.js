import { faker } from '@faker-js/faker'

export function productosMock(){
    const producto = {
        nombre: faker.commerce.productName(),
        precio : faker.commerce.price(100, 200, 0, '$'),
        imagen: faker.image.image()
    }
    return producto
}