/*Introdução*/
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navintro > .ulintro > .liintro > .aintro');

    // Adiciona a classe 'active' ao link "Introdução" ao carregar a página
    const introducaoLink = document.querySelector('.navintro > .ulintro > .liintro:nth-child(1) > .aintro');
    introducaoLink.classList.add('active');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Remove a classe 'active' de todos os links
            links.forEach(function(otherLink) {
                otherLink.classList.remove('active');
            });

            // Adiciona a classe 'active' apenas ao link clicado
            this.classList.add('active');
        });
    });
});

const texts = ["site", "projeto", "currículo", "portfólio"];
let index = 0;
const changingTextintroElement = document.getElementById("changing-text-intro");
function animateText() {
    let text = texts[index];
    let interval = setInterval(() => {
        changingTextintroElement.textContent += text.charAt(0);
        text = text.substring(1);
        if (text === "") {
            clearInterval(interval);
            setTimeout(() => {
                changingTextintroElement.textContent = "";
                index = (index + 1) % texts.length;
                animateText();
            }, 2000);
        }
    }, 150);
}
animateText();