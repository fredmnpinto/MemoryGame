function generate(indx){
    document.getElementById("question").innerHTML = jsonData[indx];
    document.getElementById("qtype").innerHTML = jsonData[indx];
    document.getElementById("opt1").innerHTML = jsonData[indx];
    document.getElementById("opt2").innerHTML = jsonData[indx];
    document.getElementById("opt3").innerHTML = jsonData[indx];
}

var i = 0; //questao em que esta
var pontuacao = 0;
function checarResposta(){
    switch(jsonData[i].qtype){
        case "EscolhaUnica" : checarRespostaUnica; break;
        case "EscolhaMultipla" : break;
        case "VerdadeiroFalso" : break;
        case "PreencherEspaco" : break;
        default : alert("ERROR : 'qtype' nao previsto.");
    }
    i++;
    if(jsonData.length - 1 < i){
        document.write("Você acertou " +pontuacao+ " questoes.");
        if(pontuacao == 4) document.write("<br>Perfeito! Parabéns!");
        else if(pontuacao == 1 || pontuacao == 0) document.write("<br>Hmm mais sorte na proxima...");
    }
}
function checarRespostaUnica(){

    if(document.getElementById("opt1").checado && jsonData[i].opt1 == jsonData[i].answer){
        pontuacao++;
        alert("Correto!");
    }
    if(document.getElementById("opt2").checado && jsonData[i].opt2 == jsonData[i].answer){
        pontuacao++;
        alert("Correto!");
    }
    if(document.getElementById("opt3").checado && jsonData[i].opt3 == jsonData[i].answer){
        pontuacao++;
        alert("Correto!");
    }
   
};