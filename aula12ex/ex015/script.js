function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900)
    {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }
    else
    {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked)
        {
            genero = "homem"
            document.body.style.backgroundColor = "#188dfbf5"
            if (idade >=0 && idade <10)
                {
                genero = "um menino"
                img.setAttribute("src", "imagens/crianca.jpg")
            }
            else if (idade < 21)
            {
                genero = "um jovem adulto"
                img.setAttribute("src", "imagens/jovem.jpg")
            }
            else if (idade < 50)
            {
                genero = "um adulto"
                img.setAttribute("src", "imagens/adulto.jpg")
            }
            else {
                genero = "um idoso"
                img.setAttribute ("src", "imagens/idoso.jpg")
            }
        } else if (fsex[1].checked)
        {
            document.body.style.backgroundColor= "#DC88F5" 
            genero = 'mulher'
            if (idade >=0 && idade <10)
                {
                genero="uma menina"
                img.setAttribute("src", 'imagens/crianca-mulher.jpg')
            }
            else if (idade < 21)
            {   
                genero = "uma jovem adulta"
                img.setAttribute("src","imagens/jovem-mulher.jpg")
            }
            else if (idade < 50)
            {   
                genero ='uma adulta'
                img.setAttribute("src", "imagens/adulta-mulher.jpg")
            }
            else {
                genero = "uma idosa"
                img.setAttribute("src", "imagens/idosa-mulher.jpg") 
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        img.style.opacity = 0
        res.appendChild(img)
        setTimeout(function(){
            img.style.opacity = 1
        })
    }
 
}