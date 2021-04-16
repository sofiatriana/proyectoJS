
// let productos = 'Pantalon zara';
let productos = parseInt(prompt('Prefieres 1: Blusa Shein, 2: Pantalon zara , 3: Tennis Adidas, 4: Chaqueta H & M , 5: Falda Forever 21, 6: Tennis Nike'))
let mensaje = '';
     switch(productos){
         case 1:
            mensaje = 'El valor de la blusa es de 50 dolares'
             break
         case 2:
            mensaje = 'El valor del pantalon es de 39 dolares'
             break
         case 3:
            mensaje = 'El valor de los tennis adidas es de 47 dolares'
             break
         case 4:
            mensaje = 'El valor de la chaqueta es de 68 dolares'
             break
         case 5:
            mensaje = 'El valor de la falda es de 20 dolares'
             break
         case 6:
            mensaje = 'El valor del par de tennis es de 67 dolares'
             break
        default:
            mensaje = 'Por el momento no hay mas prendas';
     }

alert(mensaje)

