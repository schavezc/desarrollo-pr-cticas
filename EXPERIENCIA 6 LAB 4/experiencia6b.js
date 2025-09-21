function usarArray() {
    console.log("Propiedades del objeto Array:");
    let arreglo = [10, 20, 30, 40, 50];
    console.log("Longitud:", arreglo.length);
    console.log("Array original:", arreglo);

    arreglo.push(60);
    console.log("Después de push:", arreglo);

    arreglo.pop();
    console.log("Después de pop:", arreglo);

    arreglo.shift();
    console.log("Después de shift:", arreglo);

    arreglo.unshift(5);
    console.log("Después de unshift:", arreglo);

    let arreglo2 = arreglo.map(x => x * 2);
    console.log("Array con map:", arreglo2);

    let filtrado = arreglo.filter(x => x > 20);
    console.log("Array filtrado:", filtrado);
}
usarArray();
