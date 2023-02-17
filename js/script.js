
const inputCep = document.querySelector("#cep");
const buttonPesquisar = document.querySelector(".pesquisar");
const erro = document.querySelector(".nenhumaInf");
const cepN = document.querySelector(".cepN");
const dd = document.querySelector(".dd");
const cidade = document.querySelector(".cidade");
const bairro = document.querySelector(".bairro");
const uf = document.querySelector(".uf");
const textInfo = document.querySelectorAll(".informações .text p");
const buttonLimpar = document.querySelector("#limpar");

buttonLimpar.addEventListener("click", limpar);
buttonPesquisar.addEventListener("click", handleClick);

function limpar(e){
    e.preventDefault();
    erro.innerText ="/*Dados incorretos/*"
   const arrayText = Array.from(textInfo);
   arrayText.forEach((e) =>{
    e.innerText = ""
    inputCep.value = ""
   })
}


function handleClick(e){
    e.preventDefault();
    const cep = inputCep.value;
    const validarD = cep.replace(/\D/g, '');
    buscarCep(validarD);
}
function buscarCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resp=> resp.json())
    .then(result =>{
        cepN.innerText = `CEP : ${result.cep}`;
        uf.innerText = `UF: ${result.uf}`;
        dd.innerText = `DD : ${result.ddd}`;
        bairro.innerText = `Bairro: ${result.bairro}`
        cidade.innerText = `Cidade : ${result.localidade}`;
        erro.innerText = ""
    }).catch(e =>erro.innerText ="/*Dados incorretos/*")
}




