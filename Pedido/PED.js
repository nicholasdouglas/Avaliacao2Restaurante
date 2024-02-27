function comecar()
{
    var nome = document.getElementById("exampleFormControlInput1").value;
    console.log(nome);
    show(nome);
}

function show(nome)
{
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("select-div");

    if(nome && nome.trim() !== "")
    {
        div.style.display = "flex";
        document.getElementById("exampleFormControlInput1").style.background = "none";
    }

    else
    {
        document.getElementById("error").style.display = "flex";
    }
}

function fechar()
{
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "lightpink";
}
 
function receberVal()
{
    var pratoEsc = document.getElementById("pratoSel").value;
    var bebidaEsc = document.getElementById("bebidaSel").value;
    var sobremesaEsc = document.getElementById("sobremesaSel").value;

    var valTotal = 0;

    switch (pratoEsc) 
    {
        case "Tartar de carne":
            valTotal = valTotal + 40;
            break;
    
        case "Pizza portuguesa":
            valTotal = valTotal + 20;
            break;
        case "Strogonoff de carne":
            valTotal = valTotal + 15;
            break;
    }

    switch (bebidaEsc) 
    {
        case "Pepsi":
            valTotal = valTotal + 6;
            break;
    
        case "Monster Pink":
            valTotal = valTotal + 10;
            break;
        case "Martini azul":
            valTotal = valTotal + 20;
            break;
    }

    switch (sobremesaEsc) 
    {
        case "Banoffe":
            valTotal = valTotal + 15;
            break;
    
        case "Torta holandesa":
            valTotal = valTotal + 15;
            break;
        case "Tortolini":
            valTotal = valTotal + 20;
            break;
    }

    console.log(valTotal);
}