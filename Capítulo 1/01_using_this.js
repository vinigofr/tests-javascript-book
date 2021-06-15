// Página 08
// Teste para uso de função com this

function Point(x, y) {
  // Segundo o próprio livro, a palavra "this" significa a criação de um novo objeto!
  this.x = x;
  this.y = y;

  // Testando com o console.log(), é possivel constatar o retorno de tal objeto.
  console.log(this);
}

Point('teste1', 'teste2');