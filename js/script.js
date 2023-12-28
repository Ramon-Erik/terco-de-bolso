// const titulos = document.querySelectorAll('.acordeon .titulo');

// titulos.forEach((titulo) => {
//     titulo.classList.remove('active')
//     titulo.addEventListener('click', function () {
//         const conteudo = this.nextElementSibling;
//         if (conteudo.style.maxHeight) {
//             conteudo.style.maxHeight = null;
//         } else {
//             titulo.classList.add('active')
//             conteudo.style.maxHeight = conteudo.scrollHeight + 'px';
//         }

//         const todosConteudos = document.querySelectorAll('.acordeon .conteudo');
//         todosConteudos.forEach((item) => {
//             if (item !== conteudo && item.style.maxHeight) {
//                 item.style.maxHeight = null;
//             }
//         });
//     });
// });

const titulos = document.querySelectorAll('.acordeon .titulo');

titulos.forEach((titulo) => {
  titulo.addEventListener('click', function() {
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
