{
    let variavel = "valor";

    let receita = ["teste", "teste1"];
    
    console.log('teste: ' + receita);
    
    receita.push("Teste3");
    
    console.log(receita);
    
    console.log(receita.length);
    
    console.log(receita.sort());
    
    console.log(receita[1]);
    
    receita.unshift("Início");
    
    for (let i = 0; i < receita.length; ++i){
        console.log(receita[i]);
    }
    
    receita.pop(); //remove o último
    receita.shift(); //remove o primeiro
    
    console.log(receita);
    
    let indexOf = receita.indexOf("teste");
    
    console.log(indexOf);
}

{
    // Obtenha o valor “Serviços” do array menu: 

    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    let menuServices = menu[1];

    console.log(menuServices);
}

{

    //Procure o índice do valor “Portfólio” do array menu: 

    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    let indexOfPortfolio = menu.indexOf("Portfólio");

    console.log(indexOfPortfolio);
}

{
    //Adicione o valor “Contato” no final do array menu: 

    let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    menu.push("Contato");
    console.log(menu);
}

{
    // imprimir taboada

    let numero = 7;
    for (let i = 1;i<=9;++i){
        console.log("7 x "+i+" = "+7*i);
    }
}

{
    let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

    for (let i = 0;i<groceryList.length;++i){
        console.log(groceryList[i]);
    }
}

{
    let names = ['João', 'Maria', 'Antônio', 'Margarida'];
    for(let i of names){
        console.log(i);
    }
}

{

    function dice () { 
        return Math.ceil(Math.random() * 6);
    }
    let d1 = dice();
    let d2 = dice();
    while (d1 === d2) {
        d2 = dice();
    }

}