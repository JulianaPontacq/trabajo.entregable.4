import {cargar, escribirEnUnaLinea, comparar, intercambiar} from './helpers'

function seleccion(arreglo: number[], cantidad: number) {
    let i: number, j: number, posicion: number;
    for (i = 0; i < (cantidad - 1); i++) {
        posicion = i;
        for (j = i + 1; j < cantidad; j++) {
            if (comparar(arreglo, posicion, j) == 1) {
                posicion = j;
            }
        }
        intercambiar(arreglo, i, posicion);
    }
}


let lim: number = 10;
let a: number[] = new Array(lim);  
cargar(a, lim, 100); 
escribirEnUnaLinea(a, lim);
seleccion(a, lim); 
escribirEnUnaLinea(a, lim);

