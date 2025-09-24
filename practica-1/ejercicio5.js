function miFuncion(cadena) {
    let texto = cadena.toLowerCase();
    let izquierda = 0;
    let derecha = texto.length - 1;

    while (izquierda < derecha) {
        if (texto[izquierda] !== texto[derecha]) {
            return false;
        }
        izquierda++;
        derecha--;
    }

    return true;
}

let band = miFuncion("oruro");
console.log(band); 

band = miFuncion("hola");
console.log(band); 
