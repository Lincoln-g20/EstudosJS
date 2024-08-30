function carregar()
{
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 6 && hora <=12)
    {
        imagem.src = "../imagens/fotodia.png"
        document.body.style.backgroundColor ="#99BED0"
    }
    else if (hora >= 12 && hora <18)
    {
        imagem.src = "../imagens/fototarde.png"
        document.body.style.backgroundColor = "#FE8900"
    }
    else
    {
        imagem.src = "../imagens/fotonoite.png"
        document.body.style.backgroundColor = "#20172C"
    }
}