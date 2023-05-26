const page = 8;
function obterListaFilmes() {
    const apiKey = '72c76165307068bf8669ab64629bf31c';

    const sortBy = 'popularity.desc';
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortBy}`)
        .then(response => response.json())
        .then(data => {
            const listaFilmes = data.results;

            const container = document.getElementById('container-inicial');

            listaFilmes.forEach(filme => {
                const divFilme = document.createElement('div');
                divFilme.className = 'child';

                const divImagem = document.createElement('div');
                const imagem = document.createElement('img');
                imagem.className = 'imagem';
                imagem.src = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
                divImagem.appendChild(imagem);

                const divTitulo = document.createElement('div');
                divTitulo.className = 'title-center';
                const titulo = document.createElement('h3');
                titulo.className = 'title-filme';
                titulo.textContent = filme.title;
                divTitulo.appendChild(titulo);

                const divDescricao = document.createElement('div');
                divDescricao.className = 'title-text';
                const descricao = document.createElement('p');
                descricao.className = 'meu-p';
                descricao.textContent = filme.overview;
                divDescricao.appendChild(descricao);

                const divBotao = document.createElement('div');
                divBotao.className = 'title-button';
                const botao = document.createElement('button');
                botao.className = 'botao-plus';
                botao.textContent = '+';
                divBotao.appendChild(botao);

                divFilme.appendChild(divImagem);
                divFilme.appendChild(divTitulo);
                divFilme.appendChild(divDescricao);
                divFilme.appendChild(divBotao);

                container.appendChild(divFilme);
            });
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}

obterListaFilmes();
