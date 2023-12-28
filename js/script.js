titulos = document.querySelectorAll('.acordeon .titulo');

titulos.forEach((titulo) => {
    titulo.addEventListener('click', function () {
        const conteudo = this.nextElementSibling;
        this.classList.toggle('active');

        if (conteudo.style.maxHeight) {
            conteudo.style.maxHeight = null;
        } else {
            conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
        }

        const todosTitulos = document.querySelectorAll('.acordeon .titulo');
        todosTitulos.forEach((item) => {
            if (item !== this && item.classList.contains('active')) {
                item.classList.remove('active');
                item.nextElementSibling.style.maxHeight = null;
            }
        });
    });
});
