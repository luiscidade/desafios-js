function carregar(){

    var msg = document.getElementById('horario')
    var img = document.getElementById('imagem')
    var hora = new Date()
    var hora = hora.getHours()

    msg.innerText = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#F2C791'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#EF803B'
    } else if (hora >= 18) {
        img.src = 'noite.jpg'
        document.body.style.background = '#223459'
    }

}