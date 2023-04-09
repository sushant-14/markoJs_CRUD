let tabelaBooks = document.querySelector('#books');
tabelaBooks.addEventListener('click', (evento) => {
  let elementoClicado = evento.target;

  if (elementoClicado.dataset.type == 'remocao') {
    let bookId = elementoClicado.dataset.ref;
    fetch(`http://localhost:3000/books/${bookId}`, { method: 'DELETE' })
      .then((resposta) => {
        let tr = elementoClicado.closest(`#book_${bookId}`);
        tr.remove();
      })
      .catch((erro) => console.log(erro));
  }
});
