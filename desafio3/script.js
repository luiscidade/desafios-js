function calcular(){
    var i = Number(document.getElementById('txt_ini').value),
        p = Number(document.getElementById('txt_pas').value),
        f = Number(document.getElementById('txt_fim').value),
        res = document.querySelector('p#res'),
        numbers = ''

    for (var c = i; c < (f + p); c += p){
        numbers += String(c) + ' '
        if (c > f){
            numbers += 'FIM'
        }
    }

    res.innerText = `${numbers}`

}