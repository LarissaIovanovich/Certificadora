document.getElementById('imagem').addEventListener('change', function(e) {
    var arquivo = e.target.files[0];
    var visualizacaoImagem = document.getElementById('visualizacaoImagem');
    var tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif'];

    if (arquivo && tiposPermitidos.includes(arquivo.type)) {
        var leitor = new FileReader();

        leitor.onloadend = function() {
            visualizacaoImagem.innerHTML = '<img src="' + leitor.result + '" alt="Visualização da Imagem">';
        };

        leitor.readAsDataURL(arquivo);
    } else {
        visualizacaoImagem.innerHTML = 'Formato de arquivo inválido. Por favor, selecione uma imagem no formato JPEG, PNG ou GIF.';
        document.getElementById('imagem').value = '';
    }
});
