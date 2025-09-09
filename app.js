

const senha = document.querySelector('#senha');
const sucesso = "Copiado";

function gerarSenha(tamanho) {
    var resultado = '';
    var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_+';
    var caracteresTamanho = caracteres.length;
    for (let i = 0; i < tamanho; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteresTamanho));
    } return resultado;
} 

console.log(gerarSenha(5));
const form = document.getElementById("formSenha");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const tamanho = Number(document.getElementById("tamanho").value);
    const senhaGerada = gerarSenha(tamanho);
    senha.textContent = senhaGerada;
});

function copiar() {
    var span = document.getElementById("senha");
    var textoOriginal = span.textContent;

    navigator.clipboard.writeText(textoOriginal).then(function () {
        span.textContent = "Copiado!";
        setTimeout(function () {
            span.textContent = textoOriginal; 
        }, 500);
    });
}