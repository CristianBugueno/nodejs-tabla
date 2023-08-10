const fs = require('fs');

const crearArchivo = async( base = 5, hasta, listar) => {

    try {        

        let salida = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
        }

        if (listar == true) {
            console.log("==========================")
            console.log(`====TABLA DEL ${base} ====`)
            console.log("==========================")
            console.log(salida);   
        }        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `Tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}