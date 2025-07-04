var lista = document.getElementById('list');
var button = document.getElementById('button');
var search = document.getElementById('search');

var nomeD = document.getElementById('nome');
var emailD = document.getElementById('email');

var cadastrados = [];

// Criando um novo cadastro
function cadastrar(id, nome, email, dia, mes, ano) {
    let cadastrado = {
        id: id,
        nome: nome,
        email: email,
        dia: dia,
        mes: mes,
        ano: ano,
    };
    cadastrados.push(cadastrado);
    localStorage.setItem('cadastrados', JSON.stringify(cadastrados));
}

// Recuperando lista já criada se o usuario dar refresh
function listaJaCriada() {
    var cadastradosCriado = JSON.parse(localStorage.getItem('cadastrados'));
    cadastrados = cadastradosCriado || [];
}

// atualizar a lista sempre
function atualizandoLista() {
    lista.innerHTML = '';

    cadastrados.forEach(function (user) {
        var novoItem = document.createElement('li');
        novoItem.id = 'itemList';
        novoItem.innerHTML = `<p>Nome: ${user.nome} - Email: ${user.email} - Data de inscrição: ${user.dia}/${user.mes}/${user.ano}</p><button onclick=deletar(${user.id})>X</button>`;
        lista.appendChild(novoItem);
    });

    nomeD.value = '';
    emailD.value = '';
}

//  excluir um usuario cadastrado
function deletar(id) {
    var cadastradosNovo = cadastrados.filter(function (user) {
        return user.id !== id;
    });

    if (cadastradosNovo.length < cadastrados.length) {
        cadastrados = cadastradosNovo;
        localStorage.setItem('cadastrados', JSON.stringify(cadastrados));
        atualizandoLista();
    } else {
        alert('Paciente não encontrado.');
    }
}

listaJaCriada();
atualizandoLista();

button.addEventListener('click', (event) => {
    event.preventDefault();
    let nome = nomeD.value;
    let email = emailD.value;

    let id = cadastrados.length;

    const dataAtual = new Date();

    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();

    if (email === '' && nome === '') alert('Preencha os campos!');
    else {
        cadastrar(id, nome, email, dia, mes, ano);
        atualizandoLista();
    }
});

document.getElementById('limparCampos').addEventListener('click', () => {
    nomeD.value = '';
    emailD.value = '';
});

document.getElementById('excluirTodos').addEventListener('click', () => {
    if (confirm('Tem certeza que deseja excluir todos os cadastros?')) {
        cadastrados = [];
        localStorage.removeItem('cadastrados');
        atualizandoLista();
    }
});

search.addEventListener('input', () => {
    var itens = JSON.parse(localStorage.getItem('cadastrados'));
    var pesquisa = search.value.toLowerCase();

    var resultados = itens.filter(function (user) {
        return user.nome.toLowerCase().includes(pesquisa);
    });

    lista.innerHTML = '';

    resultados.forEach(function (user) {
        var novoItem = document.createElement('li');
        novoItem.id = 'itemList';
        novoItem.innerHTML = `<p>Nome: ${user.nome} - Email: ${user.email} - Data de inscrição: ${user.dia}/${user.mes}/${user.ano}</p><button onclick=deletar(${user.id})>X</button>`;
        lista.appendChild(novoItem);
    });
});
