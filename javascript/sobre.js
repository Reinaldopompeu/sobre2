/*Sobre*/
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navsobre > .ulsobre > .lisobre > .asobre');

    // Adiciona a classe 'active' ao link "Introdução" ao carregar a página
    const introducaoLink = document.querySelector('.navsobre > .ulsobre > .lisobre:nth-child(2) > .asobre');
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