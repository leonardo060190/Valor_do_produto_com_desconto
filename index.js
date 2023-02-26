function calcular(){
        // faz a verificação de cada função se for verdadeira continua se for falso para. 
    if(validaProduto() && validaValor() && validaQuantidade() && validaDesconto()){
        // variaveis para pegar o valor digitado no campo.
    let preco = valor.value;
    let quantia = quantidade.value;
    let descontoProduto = indesconto.value;
        // variavel que pega o valor da multiplicação do preço e da quantia.
    let totalSemDesconto = preco * quantia;
        // variavel que pega o totalSemDesconto e multiplica pelo descontoProduto, depois divide por 100
        // para obter de valor do desconto.
    let totalDoDesconto = (totalSemDesconto * descontoProduto) / 100;
        // variavel que pega o valor totalSemDesconto e subtrai o totalDoDesconto pra 
        // obter o valor real do produto.
    let resultado = totalSemDesconto - totalDoDesconto;
        // mostra no campo o valo real do produto. 
    desconto.value = (`R$ ${resultado.toFixed(2)}`);

    };
};
//  função para validar o campo do produto.
function validaProduto(){
    if(produto.value.trim() === ""){
        produto.style.background = "#F5A9A9";
        mensagem.innerHTML = "Informe o Produto";
        $('#alerta').modal('show');
        return false;
    }else{
        produto.style.background = "white";
        return true;
    };
};
//  função para validar o campo do valor.
function validaValor(){
    if(valor.value.trim() === ""){
        valor.style.background = "#F5A9A9";
        mensagem.innerHTML = "Informe o Valor";
        $('#alerta').modal('show');
        return false;
    }else{
        valor.style.background = "white";
        return true;
    };

};
//  função para validar o campo da quantidade.
function validaQuantidade(){
    if(quantidade.value.trim() === ""){
        quantidade.style.background = "#F5A9A9";
        mensagem.innerHTML = "Informe o Quantidade Desejada";
        $('#alerta').modal('show');
        return false;
    }else{
        quantidade.style.background = "white";
        return true;
    };
    
};
//  função para validar o campo do desconto.
function validaDesconto(){
    if(indesconto.value.trim() === ""){
        indesconto.style.background = "#F5A9A9";
        mensagem.innerHTML = "Informe o Desconto";
        $('#alerta').modal('show');
        return false;
    }else{
        desconto.style.background = "white";
        return true;
    };

};
