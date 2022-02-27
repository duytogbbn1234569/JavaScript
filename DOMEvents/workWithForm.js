var textElement = document.querySelector('input[type="text"]')

// DOM event trả về khi thay đổi giá trị trong input sau khi nhập xong
// textElement.onchange = function(e) {
//     console.log(e.target.value)
// }
// DOM event trả về tất cả giá trị của input trong khi nhập
// textElement.oninput = function(e) {
//     console.log(e.target.value)
// }
var checkboxElement = document.querySelector('input[type="checkbox"]')

checkboxElement.onchange = function(e) {
    // thuộc tính checked trả về true khi đã check vào checkbox
    console.log(e.target.checked)
}
var selectElement = document.querySelector('select')

selectElement.onchange = function(e) {
    // value là giá trị của value trong code option
    console.log(e.target.value)
}

textElement.onkeydown = function(e){
    switch(e.which) {
        case 27:
            console.log('Exit')
            break
        case 9:
            console.log('Next tab')
            break
        case 13:
            console.log('Send chat')
            break
    }
}