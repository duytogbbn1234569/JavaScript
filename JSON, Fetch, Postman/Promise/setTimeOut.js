function delay1s() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 1000)
    })
}
var i = 1
delay1s()
    .then(function() {
        console.log(i)
        i++
        return delay1s()
    })
    .then(function() {
        console.log(i)
        i++
        return delay1s()
    })
    .then(function() {
        return new Promise(function(resolve, reject) {
            reject('Có lỗi')
        })
    })
    .then(function() {
        console.log(i)
        i++
    })
    .catch(function(err) {
        console.log(err)
    })
    


