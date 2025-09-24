function twoseg(callback) {
    setTimeout(() => {
        callback();
    }, 2000); 
}

twoseg(() => {
    console.log("Han pasado 2 segundos, callback ejecutado.");
});
