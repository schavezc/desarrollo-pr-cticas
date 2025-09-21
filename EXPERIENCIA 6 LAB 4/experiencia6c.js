function usarNumber() {
    console.log("Propiedades del objeto Number:");
    console.log("MAX_VALUE:", Number.MAX_VALUE);
    console.log("MIN_VALUE:", Number.MIN_VALUE);
    console.log("NaN:", Number.NaN);
    console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);

    let num = 123.456;
    console.log("Número original:", num);
    console.log("toFixed(2):", num.toFixed(2));
    console.log("toExponential(3):", num.toExponential(3));
    console.log("toString(16):", num.toString(16));

    let entero = Number.parseInt("150");
    let flotante = Number.parseFloat("150.75");
    console.log("parseInt:", entero);
    console.log("parseFloat:", flotante);
}
usarNumber();
