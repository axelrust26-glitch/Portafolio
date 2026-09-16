// Mensaje en la consola
console.log("Portfolio cargado correctamente");

// Animación suave al hacer clic en los enlaces del menú
const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach(enlace => {
    enlace.addEventListener("click", function(evento) {
        evento.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Mensaje al enviar el formulario (si agregamos uno en el futuro)
console.log("JavaScript funcionando correctamente");
