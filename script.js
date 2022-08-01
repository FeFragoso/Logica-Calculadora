function input(num){
    document.getElementById('visor').innerHTML += num
}

function backspace(){
    x = document.getElementById('visor').innerHTML
    document.getElementById('visor').innerHTML = x.substring(0, x.length -1)
}

function excluir(){
    document.getElementById('visor').innerHTML = ''
}