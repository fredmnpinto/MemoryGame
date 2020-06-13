
var i = 0; //questao em que esta
var j = 0; //contador para o caso da resposta multipla
var pontuacao = 0;

function generate(indx){
    if(i != 0) alert("Pontuacao atual: " +pontuacao+ "");
    switch(jsonData[indx].qtype){
    case "EscolhaUnica" : alert("Escolha uma das respostas."); break;
    case "EscolhaMultipla" : alert("Escolha todas as respostas verdadeiras, mas uma de cada vez."); break;
    case "VerdadeiroFalso" : alert("Escreva na ordem correta quais sao verdadeiras (V) e quais sao falsas (F)."); break;
    case "PreencherEspaco" : alert("Preencha o que falta na frase escrevendo no quadro abaixo."); break;
    }
    document.getElementById("question").innerHTML = jsonData[indx].q;
    document.getElementById("qtype").innerHTML = jsonData[indx].qtype;
    document.getElementById("optt1").innerHTML = jsonData[indx].opt1;
    document.getElementById("optt2").innerHTML = jsonData[indx].opt2;
    document.getElementById("optt3").innerHTML = jsonData[indx].opt3;
}
            var segundosTotal = 60*2;
            var min = parseInt(segundosTotal/60);
            var seg = parseInt(segundosTotal%60);
            function timer(){
                document.getElementById("quizCountdown").innerHTML =
                'Tempo sobrando : ' +min+ ':' +seg+ '';
                if(segundosTotal <= 0){
                    setTimeout(expired(), 1);
                }
                else{ 
                segundosTotal -= 1;
                min = parseInt(segundosTotal/60);
                seg = parseInt(segundosTotal&60);
                setTimeout(timer(), 1000);
                }
            }
            function expired(){
                document.write("O seu tempo expirou :(<br>Você acertou " +pontuacao+ " questoes.");
                    if(pontuacao == 4) document.write("<br>Perfeito! Parabéns!");
                    else if(pontuacao == 1 || pontuacao == 0) document.write("<br>Hmm mais sorte na proxima...");
            }
generate(0);
var i = 0; //questao em que esta
var j = 0; //contador para o caso da resposta multipla
var pontuacao = 0;
//document.getElementById("pontuacaoAtual").innerHTML = pontuacao;
function checarResposta(){
    switch(i){
        case 0 : checarRespostaUnica(); break;
        case 1 : checarRespostaMultipla();
                break;
        case 2 : break;
        case 3 : break;
        default : alert("ERROR");
    }
    if(jsonData.length - 1 < i){
        document.write("Você acertou " +pontuacao+ " questoes.");
        if(pontuacao == 4) document.write("<br>Perfeito! Parabéns!");
        else if(pontuacao == 1 || pontuacao == 0) document.write("<br>Hmm mais sorte na proxima...");
    }
    generate(i);
}
function checarRespostaUnica(){

    if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer){
        pontuacao++;
        alert("Correto!");
    }
    else if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer){
        pontuacao++;
        alert("Correto!");
    }
    else if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer){
        pontuacao++;
        alert("Correto!");
    }
    else alert("Errado...");
    i++;
   
};

var f = 0; //variavel para complementar a funcao das respostas multiplas

function checarRespostaMultipla(){
    if(j < 2 && f < 2){
        if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer.a1){
            if(j < 2) alert("Correto, agora escolha mais uma opcao!");
            if(j == 2 || f == 1) alert("Correto!");
            f++;
            pontuacao = pontuacao + 0.5;
        }
        else if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer.a2){
            if(j < 2) alert("Correto, agora escolha mais uma opcao!");
            if(j == 2 || f == 1) alert("Correto!");
            f++;
            pontuacao = pontuacao + 0.5;
        }
        else if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer.a1){
            if(j < 2) alert("Correto, agora escolha mais uma opcao!");
            if(j == 2 || f == 1) alert("Correto!");
            f++;
            pontuacao = pontuacao + 0.5;
        }
        else if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer.a2){
            if(j < 2) alert("Correto, agora escolha mais uma opcao!");
            if(j == 2 || f == 1) alert("Correto!");
            f++;
            pontuacao = pontuacao + 0.5;
        }
        else if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer.a1){
            if(j < 2) alert("Correto, agora escolha mais uma opcao!");
            if(j == 2 || f == 1) alert("Correto!");
            f++;
            pontuacao = pontuacao + 0.5;
        }
        else if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer.a2){
            if(j < 2) alert("Correto, agora escolha mais uma opcao!");
            if(j == 2 || f == 1) alert("Correto!");
            f++;
            pontuacao = pontuacao + 0.5;
        }
        else {
            alert("Errado :(");
            pontuacao = pontuacao - 0.5;
        }
        j++;   
    }
    else if(j > 2 || f > 1) i++;
}

//$('td[name ="options"]').hide();