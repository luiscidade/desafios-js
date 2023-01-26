function verificar(){
    
    var anoatual = new Date().getFullYear()

    var anonasc = document.getElementById('txt_ano').value

    if (anonasc.length != 4 || Number(anonasc) > Number(anoatual) || anonasc < 1900){
        window.alert('Erro')
    } else {
        var idade = Number(anoatual) - Number(anonasc)

        var radsex = document.getElementsByName('radsex')
        var genero = ''
        if (radsex[0].checked){
            genero = 'M'
            imprimir(genero, idade)
        } else {
            genero = 'F'
            imprimir(genero, idade)
        }
    }
}

function imprimir(genero, idade){

    var res = document.getElementById('txt_res')
    var fot_res = document.getElementById('img_res')

    if (genero == 'M'){
        var sufixo = 'O'
        var hm = 'HOMEM'
        var imagens = ['imagens/criança-m.jpg', 'imagens/jovem-homem.jpg', 'imagens/homem-adulto.jpg', 'imagens/homem-idoso.jpg']
    } else {
        var sufixo = 'A'
        var hm = 'MULHER'
        var imagens = ['imagens/criança-f.jpg', 'imagens/jovem-mulher.jpg', 'imagens/mulher-adulta.jpg', 'imagens/mulher-idosa.jpg']
    }
    
    if (idade > 0 && idade <= 14){

        res.innerText = `MENIN${sufixo} DE ${idade} ANOS`
        fot_res.src = imagens[0]

    } else if (idade > 14 && idade <= 24){
        
        res.innerText = `JOVEM ${hm} DE ${idade} ANOS`
        fot_res.src = imagens[1]

    } else if (idade > 24 && idade <= 60){

        res.innerText = `${hm} ADULT${sufixo} DE ${idade} ANOS`
        fot_res.src = imagens[2]

    } else if (idade > 60){

        res.innerText = `${hm} IDOS${sufixo} DE ${idade} ANOS`
        fot_res.src = imagens[3]
        
    }
}