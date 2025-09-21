function usarWindow() {
    console.log("Propiedades del objeto Window:");
    console.log("Altura interna:", window.innerHeight);
    console.log("Anchura interna:", window.innerWidth);
    console.log("URL actual:", window.location.href);
    console.log("Nombre del navegador:", window.navigator.userAgent);

    alert("Ejemplo de método alert del objeto window");
    let respuesta = confirm("¿Quieres continuar?");
    if (respuesta) {
        let nombre = prompt("Escribe tu nombre:");
        console.log("Hola " + nombre);
    } else {
        console.log("Cancelaste la acción");
    }
}
usarWindow();
