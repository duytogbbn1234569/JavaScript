var aElements = document.querySelectorAll('a')
    
    for (var i = 0; i < aElements.length; i++) {
        aElements[i].onclick = function(e) {
            if (!e.target.href.startsWith("https://www.messenger.com/")) {
                e.preventDefault()
            }
        }
    }

var ulElement = document.querySelector('ul')

ulElement.onmousedown = function(e) {
    e.preventDefault()
}