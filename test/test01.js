function clasificaElementos(arr) {

    let numPositivos = 0;
    let numNegativos = 0;
    let numNulos = 0;
    
    for (const num of arr) {
        if (num == 0) {
            numNulos++;
        } else if (num > 0) {
            numPositivos++;
        } else {
            numNegativos++;
        }        
    }

    const positivos = (numPositivos/arr.length).toFixed(4);
    const negativos = (numNegativos/arr.length).toFixed(4);
    const nulos = (numNulos/arr.length).toFixed(4);

    return [positivos, negativos, nulos];
}
module.exports = clasificaElementos;
