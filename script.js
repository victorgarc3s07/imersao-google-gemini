/*-----------------------------------*/

let nomes = [
        {
            nome : "Adam Smith",
            descricao: "Adam Smith foi um filósofo e economista escocês do século XVIII, amplamente considerado o pai da economia moderna. Sua obra mais famosa, 'A Riqueza das Nações', publicada em 1776, revolucionou o pensamento econômico ao defender a mão invisível do mercado.",
            escola: "clássicos",
        },
        {
            nome: "Malthus",
            descricao : "Thomas Malthus foi um economista e clérigo inglês do século XVIII, conhecido por sua teoria sobre o crescimento populacional. Em sua obra principal, 'Ensaio sobre o Princípio da População', Malthus argumentava que o crescimento populacional tenderia a superar a produção de alimentos, levando a crises de subsistência, fome e miséria. Essa teoria, conhecida como malthusianismo, postulava que a população crescia em progressão geométrica, enquanto a produção de alimentos aumentava em progressão aritmética",
            escola: "fisiocratas"
        },
        {
            nome : "David Ricardo",
            descricao : "David Ricardo foi um economista político britânico do século XIX, considerado um dos pilares da escola clássica de economia, ao lado de Adam Smith e Thomas Malthus. Sua principal contribuição para a economia foi a teoria da renda da terra. Ricardo argumentou que, à medida que a população cresce e a demanda por alimentos aumenta, a terra de melhor qualidade é cultivada primeiro.",
            escola: "neoclássicos"
        },
        {
            nome: "John Keynes",
            descricao : "John Maynard Keynes foi um economista britânico do século XX que revolucionou o pensamento econômico com suas ideias sobre a intervenção do Estado na economia. Sua obra mais famosa, 'A Teoria Geral do Emprego, do Juro e da Moeda', publicada em 1936, apresentou conceitos como a demanda efetiva e a preferência pela liquidez, que moldaram as políticas econômicas de muitos países após a Grande Depressão.",
            escola: "Keynesianos"
        }
    ];

    // console.log(nomes[0]);

//construindo a busca de elemento


function pesquisar() {
    
    let campoPesquisa = document.getElementById("search1").value;
    let resultado = document.getElementById("resultado");
        
    if(campoPesquisa == "") {
        resultado.innerHTML = `ERRO!"${campoPesquisa}" não corresponde a nenhuma pesquisa`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    
    for(let Nome of nomes) {

        let nome = Nome.nome.toLowerCase();
        let descricao = Nome.descricao.toLowerCase();
        let escola = Nome.escola.toLowerCase();

        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || escola.includes(campoPesquisa)) {

            resultado.innerHTML += `
                <div class="card-container">
                    <h2>${Nome.nome}</h2>
                    <p>${Nome.descricao}</p>
                    <a href="http://" target="_blank" rel="noopener noreferrer">Saiba mais!</a>
                </div>
            `
        }

    }

    if(!resultado) {
        resultado = "<p>Nada foi encontrado</p>";
    }

}















