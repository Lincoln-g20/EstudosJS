function somar()
    {
        var tn1 = document.querySelector("input#txtn1")
        var tn2 = document.querySelector("input#txtn2")
        var res = document.querySelector("div#res")

        var n1 = window.Number (tn1.value)

        var n2 = window.Number(tn2.value)

        var s = n1 + n2

        res.innerHTML = (`A soma entre ${n1} e e ${n2} é igual a <strong>${s}</strong>`)
    }