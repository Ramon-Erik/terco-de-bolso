const titulos = document.querySelectorAll('.acordeon .titulo');

titulos.forEach((titulo) => {
    titulo.addEventListener('click', function () {
        const conteudo = this.nextElementSibling;
        if (conteudo.style.maxHeight) {
            conteudo.style.maxHeight = null;
        } else {
            conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
        }

        const todosConteudos = document.querySelectorAll('.acordeon .conteudo');
        todosConteudos.forEach((item) => {
            if (item !== conteudo && item.style.maxHeight) {
                item.style.maxHeight = null;
            }
        });
    });
});
