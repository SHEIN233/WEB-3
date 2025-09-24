function paso1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Paso 1 completado"), 1000);
    });
}
function paso2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Paso 2 completado"), 1000);
    });
}
function paso3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Paso 3 completado"), 1000);
    });
}
// Encadenamiento usando async/await
async function ejecutarPasos() {
    const resultado1 = await paso1();
    console.log(resultado1);

    const resultado2 = await paso2();
    console.log(resultado2);

    const resultado3 = await paso3();
    console.log(resultado3);

    console.log("finalizado");
}
ejecutarPasos();
////// segundo ejemplo 
function paso1() {
    return new Promise(resolve => setTimeout(() => resolve("Paso 1 completado"), 1000));
}
function paso2() {
    return new Promise(resolve => setTimeout(() => resolve("Paso 2 completado"), 1000));
}
function paso3() {
    return new Promise(resolve => setTimeout(() => resolve("Paso 3 completado"), 1000));
}
// Encadenamiento con async/await
async function ejecutarPasos() {
    try {
        const r1 = await paso1();
        console.log(r1);

        const r2 = await paso2();
        console.log(r2);

        const r3 = await paso3();
        console.log(r3);

        console.log("Todos los pasos completados");
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

ejecutarPasos();
