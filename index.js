const senha1 = document.getElementById('senha1');
const senha2 = document.getElementById('senha2');
const senha3 = document.getElementById('senha3');
const btn = document.getElementById('btn');
const mensagem = document.getElementById('mensagem');
const mensagem2 = document.getElementById('mensagem2');
const tentativa = document.getElementById('tentativas');

const v1 = 3; 
const v2 = 6; 
const v3 = 8; 

let tentativas = 0;
const maxTentativas = 5; 

btn.addEventListener("click", () => {
    if (parseInt(senha1.value) === v1 &&
        parseInt(senha2.value) === v2 &&
        parseInt(senha3.value) === v3) {
        
        mensagem2.textContent = "Acesso concedido com sucesso";
        setTimeout(() => {
            window.location.href = ''; 
        }, 3000);
    } else {
        tentativas++; 
        tentativa.textContent = `Tentativas restantes: ${maxTentativas - tentativas}`;
        mensagem.textContent = "Tente Novamente";
        senha1.value = "";
        senha2.value = "";
        senha3.value = "";
        senha1.focus(); 

        if (tentativas === maxTentativas) {
            tentativa.textContent = "Você excedeu o número máximo de tentativas.";
            mensagem.textContent = ""; 
            btn.disabled = true; 
        }
    }
});

senha1.addEventListener("input", () => {
    mensagem.textContent = ""; 
});

senha2.addEventListener("input", () => {
    mensagem.textContent = ""; 
});

senha3.addEventListener("input", () => {
    mensagem.textContent = ""; 
});
