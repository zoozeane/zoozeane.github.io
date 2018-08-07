var formulario = document.getElementById('botao-enviar');

formulario.addEventListener('click', function(event) {
    var form = document.querySelector("#formulario-mensagem");

    var nome = form.nome.value;


    var mensagem = "Obrigado " + nome.split(" ")[0] + ", leremos sua mensagem em breve!";
    alert(mensagem);

});