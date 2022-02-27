var buttonElement = document.querySelector('button')

function viec1() {
    console.log('Viec 1')
}
function viec2() {
    console.log('Viec 2')
}
buttonElement.addEventListener('click', viec1)
buttonElement.addEventListener('click', viec2)

setTimeout(function() {
    buttonElement.removeEventListener('click', viec1)
}, 3000)