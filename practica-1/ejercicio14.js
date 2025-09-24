function consultarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, nombre: "Juan" });
            } else {
                reject("ID inválido");
            }
        }, 1000);
    });
}

function consultarUsuarioCallback(id, callback) {
    (async () => {
        try {
            const usuario = await consultarUsuario(id);
            callback(null, usuario); 
        } catch (error) {
            callback(error, null);   
        }
    })();
}

consultarUsuarioCallback(1, (err, usuario) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Usuario:", usuario);
    }
});
