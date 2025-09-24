function obtenerDatosConCallback(callback) {
    setTimeout(() => {
        callback(null, "Datos obtenidos con callback");
    }, 1000);
}

function obtenerDatosPromesa() {
    return new Promise((resolve, reject) => {
        obtenerDatosConCallback((err, data) => {
            if (err) {
                reject(err);     
            } else {
                resolve(data);   
            }
        });
    });
}

async function mostrarDatos() {
    try {
        const resultado = await obtenerDatosPromesa();
        console.log("Resultado:", resultado);
    } catch (error) {
        console.error("Error:", error);
    }
}
mostrarDatos();
