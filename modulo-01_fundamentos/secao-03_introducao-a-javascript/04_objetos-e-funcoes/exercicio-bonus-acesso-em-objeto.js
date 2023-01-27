// Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

let moradores = {
    blocoUm: [
        {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
        },
        {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
        },
    ],
    blocoDois: [
        {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
        },
        {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
        },
    ],
};

const ponteiroMorador = moradores.blocoDois[moradores.blocoDois.length-1];
console.log(`O morador do bloco 2 de nome ${ponteiroMorador.nome} ${ponteiroMorador.sobrenome} mora no ${ponteiroMorador.andar}º andar, apartamento ${ponteiroMorador.apartamento}`);

let impressaoMoradores = '';
for (let i = 0;i < moradores.blocoUm.length;++i){
    const ponteiroMorador = moradores.blocoUm[i];
    if (i == 0){
        impressaoMoradores = 'Nome dos moradores do bloco um: ';
    }
    if (i > 0){
        impressaoMoradores += `, `
    }
    impressaoMoradores += `${ponteiroMorador.nome} ${ponteiroMorador.sobrenome}`;
}
console.log(impressaoMoradores);

for (let i = 0;i < moradores.blocoDois.length;++i){
    const ponteiroMorador = moradores.blocoDois[i];
    if (i == 0){
        impressaoMoradores = 'Nome dos moradores do bloco dois: ';
    }
    if (i > 0){
        impressaoMoradores += `, `
    }
    impressaoMoradores += `${ponteiroMorador.nome} ${ponteiroMorador.sobrenome}`;
}
console.log(impressaoMoradores);