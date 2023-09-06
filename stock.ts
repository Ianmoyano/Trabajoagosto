class ProductosEnStock {
    protected id
    protected producto
    protected precio
    protected stock
    protected cantidadvendida
    constructor(id: number, producto: string, precio: number, stock: number, cantidadvendida: number) {
        this.id = id
        this.producto = producto
        this.precio = precio
        this.stock = stock
        this.cantidadvendida = cantidadvendida
    }

    productosavender(productos: number) {
        if (this.stock >= productos) {
            this.cantidadvendida += productos;
            this.stock -= productos;
        } else {
            console.log("No hay stock suficiente de", this.producto);
        }
    }
    }

let producto1 = new ProductosEnStock(32145, "Alfajor", 300, 20, 15)
let producto2 = new ProductosEnStock(87215, "Saladix", 400, 16, 4)
let producto3 = new ProductosEnStock(30974, "Yerba Playadito", 1400, 6, 16)
let producto4 = new ProductosEnStock(52683, "Palitos de la selva", 30, 150, 100)
let producto5 = new ProductosEnStock(14666, "Coca Cola", 564, 30, 10)
let producto6 = new ProductosEnStock(63528, "Monster", 450, 10, 17)
let producto7 = new ProductosEnStock(14790, "Twistos", 399, 20, 6)

console.log("Produtos disponibles para la venta:", producto1, producto2, producto3, producto4, producto5, producto6, producto7)
producto1.productosavender(30)
producto2.productosavender(5)
console.log(producto1,producto2)


