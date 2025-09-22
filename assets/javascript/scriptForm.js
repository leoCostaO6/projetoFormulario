var btEnviar = document.querySelector("#btEnvio");

btEnviar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#meuForm");
    var div = document.createElement('div');
    div.id = 'coisas';

    var informacoes = document.createElement('p');
    informacoes.textContent = form.nome.value + ' | '+form.idade.value+' | '+form.filmePref.value+' | '+form.jogoPref.value;

    var btDeletar = document.createElement('button');
    btDeletar.textContent = 'deletar';
    btDeletar.id = "btDeletar"

    div.appendChild(informacoes);
    div.appendChild(btDeletar);

    var novoElemento = document.getElementById('novoElemento');
    novoElemento.appendChild(div);

    btDeletar.addEventListener("click", function(event){
        event.preventDefault();
        div.remove();
    });
});