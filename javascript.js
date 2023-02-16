function guardaFormulario() {
    var formCliente = new Object();
    
    formCliente.nome = document.getElementById("nome").value 
    formCliente.sobrenome = document.getElementById("sobrenome").value 
    formCliente.idade = document.getElementById("idade").value
    formCliente.cantor = document.getElementById("cantor").value
    formCliente.escolhaUm = document.getElementById("escolhaUm").value
    formCliente.escolhaDois = document.getElementById("escolhaDois").value
    formCliente.escolhaTres = document.getElementById("escolhaTres").value

    var json = JSON.stringify("formCliente");
    console.log(json);

    console.log(formCliente.valueOf());

    document.getElementById('nomeImprimir').innerHTML = formCliente.nome;
    document.getElementById('sobrenomeImprimir').innerHTML = formCliente.sobrenome;
    document.getElementById('idadeImprimir').innerHTML = formCliente.idade;
    document.getElementById('cantorImprimir').innerHTML = formCliente.cantor;
    //document.getElementById('escolhaUmImprimir').innerHTML = formCliente.escolhaUm;
    //document.getElementById('escolhaDoisImprimir').innerHTML = formCliente.escolhaDois;
    //document.getElementById('escolhaTresImprimir').innerHTML = formCliente.escolhaTres;


    var kurtMercury = document.getElementById("escolhaUm").value;
    var neymarMbappe = document.getElementById("escolhaDois").value;
    var marvelDC = document.getElementById("escolhaTres").value;

    //escolha UM
    if(kurtMercury == "Kurt Cobain"){
        document.getElementById('escolhaUmImprimir1').src = "img/kurt-cobain.jpg";
    }else if(kurtMercury == "Freddie Mercury"){
        document.getElementById('escolhaUmImprimir1').src = "img/mercury.jpg";
    }else{
        alert("Escolha uma das opções, Kurt Cobain ou Freddie Mercury!");
    }

    //escolha DOIS
    if(neymarMbappe == "Neymar"){
        document.getElementById('escolhaDoisImprimir3').src = "img/neymar.jpg";
    }else if(neymarMbappe == "Mbappé"){
        document.getElementById('escolhaDoisImprimir4').src = "img/mbappe.jpg";
    }else{
        alert("Escolha uma das opções, Neymar ou Mbappé!");
    }

    //ESCOLHA TRES
    if(marvelDC == "Marvel"){
        document.getElementById('escolhaTresImprimir5').src = "img/homi.jpg";
    }else if(marvelDC == "DC"){
        document.getElementById('escolhaTresImprimir6').src = "img/flash.jpg";
    }else{
        alert("Escolha uma das opções, Marvel ou DC!");
    }
} 


    