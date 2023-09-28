const form = document.getElementById('form-agenda');
let linhas = '';
const nomeContato = [];
const numeroContato =[];

form.addEventListener('submit', function(e){
    e.preventDefault();

    novaLinha();
    adicionandoLinha();
});

function novaLinha(){
    const inputNomeContato = document.getElementById('insira-nome');
    const inputNumeroContato = document.getElementById('insira-numero');

    if(nomeContato.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já existe`);
    }

    else {
        nomeContato.push(inputNomeContato.value);
        numeroContato.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value} </td>`;
        linha += `<td> ${inputNumeroContato.value} </td>`;
        linha += '<tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
};

function adicionandoLinha(){
    const tabela = document.querySelector('tbody');
    tabela.innerHTML= linhas;
};






