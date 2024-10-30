// Función para cambiar el color de fondo
function changeBackgroundColor() {
    // Seleccionar el body del documento
    const body = document.body;

    // Crear una lista de colores para el fondo
    const colors = ["#ffcccb", "#90ee90", "#add8e6", "#ffa07a", "#f0e68c"];

    // Seleccionar un color aleatorio de la lista
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Cambiar el color de fondo del body
    body.style.backgroundColor = randomColor;
}
