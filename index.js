var jogadores = []

function gerarNumerosAleatorios(quantidade, min, max){

    if(quantidade > (max - min)){
        console.log("Intervalo insuficiente ...");
        return;
    }

    var numeros = [];

    while(numeros.length < quantidade){
        var aleatorio = Math.floor(Math.random()*(max - min) + min);
        
        if(!numeros.includes(aleatorio)){
            numeros.push(aleatorio);
        }
    }

    return numeros;

}

function gerarCartela(){
    var nomeJogador = prompt('Digite o nome do jogador');

    var cartela = [gerarNumerosAleatorios(5,1,15), gerarNumerosAleatorios(5,16,30), gerarNumerosAleatorios(5,31,45),gerarNumerosAleatorios(5,46,60), gerarNumerosAleatorios(5,61,75)]

    jogadores.push({
        nomeJogador: nomeJogador,
        cartela: cartela
    });

    desenharCartela(nomeJogador, cartela);

    console.log(jogadores)
}

function reiniciarJogo(){
    jogadores = [];
}

function desenharCartela(nome, cartela){
    var div = document.getElementById('espaco_cartelas');

    var tabela = document.createElement('table');

    var thead = document.createElement('thead');

    var thB = document.createElement('th');
    thB.innerText = 'B';
    var thI = document.createElement('th');
    thI.innerText = 'I';
    var thN = document.createElement('th');
    thN.innerText = 'N';
    var thG = document.createElement('th');
    thG.innerText = 'G';
    var thO = document.createElement('th');
    thO.innerText = 'O';

    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

    var tbody = document.createElement('tbody')
    for(var i = 0; i < 5; i++){
        var tr = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            var td = document.createElement('td');
            if(i == 2 && j == 2){
                td.innerText = "X";
                tr.appendChild(td);
            }else{
                td.innerText = cartela[j][i]
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr)
    }

    var nomezinho = document.createElement('h4');
    nomezinho.innerText = nome;
    div.appendChild(nomezinho);

    tabela.appendChild(thead);
    tabela.appendChild(tbody)
    div.appendChild(tabela);
}

function jogar(){
    if (jogadores.length < 2){
        alert('não é possivel jogar sem jogadores');
        return;
    }

    var numeros_sorteados = [];

    var intervalo = setInterval(function(){
        while(true){
            aleatorio = Math.floor(Math.random()*75+1);
            if (!numeros_sorteados.includes(aleatorio)){
                numeros_sorteados.push(aleatorio);
                /*var div_numeros = document.getElementById('jogo');
                var span = document.createElement('span')
                span.innerText = aleatorio;
                div_numeros.appendChild(span)*/
                break;
            }

            numeros_sorteados.push(aleatorio);
        }
        console.log(numeros_sorteados)
    }, 1000)
}

function verificarGanhador(){

}