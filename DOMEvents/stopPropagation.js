document.querySelector('button').onclick = function(e) {
    e.stopPropagation()
    console.log('Click me!')
}
document.querySelector('div').onclick = function(e) {
    // e.stopPropagation()
    console.log('DIV')
}