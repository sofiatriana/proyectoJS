

let productos = [
    {marca: 'Shein', prenda: 'Blusa', precio: 78},
    {marca: 'Zara', prenda: 'Pantalón', precio: 56},
    {marca: 'Adidas', prenda: 'Tennis', precio: 67},
    {marca: 'H & M', prenda: 'Chaqueta', precio: 87},
    {marca: 'Forever21', prenda: 'Falda', precio: 45},
    {marca: 'Nike', prenda: 'Leggins', precio: 30}
    
]
let carrito = [];
carrito.push = (productos[3])
console.log(carrito)

let escogerMarca = productos.filter (function(productos) {
      return productos.marca === 'Adidas';
})
.map(function(productos){
     return productos.prenda;
})
    

console.log(escogerMarca);

let escoja = [];
for (let i = 0; i < productos.length; i++){
    if (productos[i].marca === 'Adidas'){
        escoja.push(productos[i].prenda);
        escoja.push(productos[i].precio);
        
    }
}
console.log(escoja);

