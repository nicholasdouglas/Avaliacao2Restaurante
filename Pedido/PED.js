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
 