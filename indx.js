var pontuacao = 0;
var respondidas = 0;
var i = 0; //questao em que esta
var j = 0; //contador para o caso da resposta multipla
var pontuacao = 0;

function generate(indx){
    if(i != 0) alert("Pontuacao atual: " +pontuacao+ "");
    switch(jsonData[indx].qtype){
    case "EscolhaUnica" : alert("Escolha uma das respostas."); break;
    case "EscolhaMultipla" : escolhaMultiplaSetup();  alert("Escolha todas as respostas verdadeiras."); break;
    case "VerdadeiroFalso" : qVfSetup(); alert("Determine se a sentença a seguir é verdadeira ou falsa."); break;
    case "PreencherEspaco" : q2Setup(); alert("Preencha o que falta na frase escrevendo no quadro abaixo."); break;
    }
    document.getElementById("question").innerHTML = jsonData[indx].q;
    document.getElementById("qtype").innerHTML = jsonData[indx].qtype;
    document.getElementById("optt1").innerHTML = jsonData[indx].opt1;
    document.getElementById("optt2").innerHTML = jsonData[indx].opt2;
    document.getElementById("optt3").innerHTML = jsonData[indx].opt3;
}
var minute = 1;
var timer;
let endTime;  
    endTime= new Date(new Date().getTime()+ minute * 60000);
    timer = setInterval(countDown,1000);  
function countDown(){
    let now = new Date().getTime();

    
    let distance = endTime - now;

    let minutes = Math.floor((distance % (1000 *60 *60)) / (1000 *60));
    let seconds = Math.floor((distance % (1000 *60 *60)) / 1000);

    $('#timer').html(minutes + ":" + seconds);

    if(distance < 0){
        document.write("Você acertou " +pontuacao+ " questoes de " +respondidas+ " respondidas.<br>Você errou "+(4 - pontuacao)+".");
        if(pontuacao == 4) document.write("<br>Perfeito! Parabéns!");
        else if(pontuacao == 1 || pontuacao == 0) document.write("<br>Hmm mais sorte na proxima...");
          
    }
}
generate(0);
$("#txtInput").hide();
var i = 0; //questao em que esta
 //numero de questoes respondidas (a cada resposta nao respondida o programa diminui essa variavel em 1)
function checarResposta(){
    switch(i){
        case 0 : checarRespostaUnica(); break;
        case 1 : checarRespostaMultipla(); break;
        case 2 : checarRespostaUnica(); break;
        case 3 : checarPreencherEspaco(); break;
        default : alert("ERROR");
    }
    if(jsonData.length - 1 < i){
        document.write("Você acertou " +pontuacao+ " questoes de " +respondidas+ " respondidas.<br>Você errou "+(4 - pontuacao)+".");
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
    
    let v = document.getElementById("opt3").checked == false && document.getElementById("opt2").checked == false && document.getElementById("opt1").checked == false; 
   if(!v) respondidas++;
};

var f = 0; //variavel para complementar a funcao das respostas multiplas

function checarRespostaMultipla(){
    if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer.a1){
        pontuacao += 0.5;
        f++;
    }
    if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer.a2){
        pontuacao += 0.5;
        f++;
        
    }
    let v = document.getElementById("opt3").checked == false && document.getElementById("opt2").checked == false && document.getElementById("opt1").checked == false; 
   if(!v) respondidas++;
switch(f){
    case 0: alert("Errado... :("); break;
    case 1: alert("Parcialmente certo, mas tudo bem."); break;
    case 2: alert("Correto! :D"); break;
}
i++;
}
function q2Setup(){
//    $('td[name ="options"]').hide();
//    $('qPanel').append()  
$("#opt1").hide();
$("#opt2").hide();
$("#opt3").hide();
$("#optt1").hide();
$("#optt2").hide();
$("#optt3").hide();
//$("txtInput").show();
}
//$('td[name ="options"]').hide();

function qVfSetup(){
    $("#opt3").hide();
    $("#optt3").hide();
    document.getElementById("opt1").setAttribute("name", "option");
    document.getElementById("opt2").setAttribute("name", "option");
    document.getElementById("opt1").setAttribute("type", "radio");
    document.getElementById("opt2").setAttribute("type", "radio");
}

function checarPreencherEspaco(){
    console.log(document.getElementById("txtInput"));
    if(document.getElementById("txtInput").value == jsonData[i].answer){
        alert("Correto!");
        pontuacao++;
    }
    else {
        alert("Errado... :(");
    }
    if(!isEmpty(document.getElementById("txtInput").value)){ respondidas++;}
    i++;
}
function escolhaMultiplaSetup(){
    document.getElementById("opt1").setAttribute("name", "option1");
    document.getElementById("opt2").setAttribute("name", "option2");
    document.getElementById("opt3").setAttribute("name", "option3");
    document.getElementById("opt1").setAttribute("type", "checkbox");
    document.getElementById("opt2").setAttribute("type", "checkbox");
    document.getElementById("opt3").setAttribute("type", "checkbox");
}

function isEmpty(str) {
    return !str.trim().length;
}