const url = `https://picsum.photos/v2/list`
const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");





// criação de função assíncrona para buscar os dados da URL

async function getDados(url) {
    //variavel para armazenar os dados do fetch, utilizando o await para esperar a resposta da requisição e convertendo a resposta para json
    const dados = await (await fetch(url)).json();
    
    //console.table(dados);
    filtrarDados(dados);
}

// incia a função getdados e passa a varialvel URL como parametro de busca

getDados(url)

// inicia a função getDados e passa a variavel "url" como parametro de busca 

function filtrarDados(dados) {
    //variavel para armazenar os dados filtrados, utilizando o método filter para filtrar os dados com base no id do autor
    const urlIMG = dados.forEach((elemento) => {
        inserirIMG(elemento.download_url);  
        
    });
}

function estilizarMural() {
    body.className = "flex items-center justify-center";
    main.classList.add("columns-3", "gap-5", "*:mt-4", "ml-20", "mr-20", "mb-5");   
    header.className = "absolute top-5 right-5 text-2xl cursor-pointer";

}

estilizarMural();

function inserirIMG( url) {
   //criação de elemento img
    let img = document.createElement("img");
    //adiciona o valor da url recebida dentro da propriedade src(source) da imagem criada
    img.src = url;
    //adiciona a imagem criada como filho do elemento main
    main.appendChild(img);
}



header.addEventListener("click", () => {

    body.classList.toggle("bg-black");
    body.classList.toggle("text-white");

    body.classList.toggle("bg-white");
    body.classList.toggle("text-black");

});