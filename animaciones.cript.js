// Espera a que todo el contenido cargue antes de ejecutar
document.addEventListener("DOMContentLoaded", () => {

    // ====== Animación de entrada del formulario ======
    const form = document.getElementById("contact-form");
    form.style.opacity = 0;
    form.style.transform = "translateY(30px)";
    setTimeout(() => {
        form.style.transition = "all 1s ease";
        form.style.opacity = 1;
        form.style.transform = "translateY(0)";
    }, 300);

    // ====== Efecto de resplandor al enfocar los inputs ======
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.transition = "box-shadow 0.3s ease";
            input.style.boxShadow = "0 0 10px rgba(255,0,0,0.6)";
        });

        input.addEventListener("blur", () => {
            input.style.boxShadow = "none";
        });
    });

    // ====== Animación del header flotante ======
    const header = document.querySelector("header");
    let floatDir = 1;
    setInterval(() => {
        header.style.transform = `translateY(${floatDir * 3}px)`;
        floatDir *= -1;
    }, 2000);

    // ====== Animación al enviar el formulario ======
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que recargue la página

        const confirmation = document.getElementById("confirmation");
        confirmation.textContent = "✅ ¡Mensaje enviado con éxito!";
        confirmation.style.color = "green";
        confirmation.style.opacity = 0;
        confirmation.style.transition = "opacity 1s ease, transform 1s ease";
        confirmation.style.transform = "translateY(20px)";

        setTimeout(() => {
            confirmation.style.opacity = 1;
            confirmation.style.transform = "translateY(0)";
        }, 100);

        // Resetea el formulario con efecto
        form.reset();
        form.style.transform = "scale(0.95)";
        setTimeout(() => {
            form.style.transform = "scale(1)";
            form.style.transition = "transform 0.4s ease";
        }, 200);
    });

});
