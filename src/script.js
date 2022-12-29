function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente!!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'criancam.png')
            }else if (idade<21){
                img.setAttribute('src', 'adolem.png')
            }else if(idade <50){
                img.setAttribute('src', 'adultom.png')
            }else{
                img.setAttribute('src', 'idosom.png')
            }
        }else if (fsex[1]){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'criancaf.png')
            }else if (idade<21){
                img.setAttribute('src', 'adolef.png')
            }else if(idade <50){
                img.setAttribute('src', 'adultof.png')
            }else{
                img.setAttribute('src', 'idosaf.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}