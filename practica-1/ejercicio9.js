function promesaExito() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Éxito: la promesa se resolvió después de 3 segundos.");
        }, 3000);
    });
}

async function ejecutar() {
    const mensaje = await promesaExito();
    console.log(mensaje);
}

ejecutar();
