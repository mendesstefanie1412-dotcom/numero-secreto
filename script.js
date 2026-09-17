// =============================
// ANIMAÇÃO DOS LINKS
// =============================

const links = document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "Navegando para:",
            link.textContent
        );

    });

});


// =============================
// MENSAGEM NO CONSOLE
// =============================

console.log(" Portfólio da Stefanie carregado!");


// =============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =============================

const elementos = document.querySelectorAll(
    ".skill, .projeto, .info-card"
);

const observador = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";

                entrada.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(30px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});