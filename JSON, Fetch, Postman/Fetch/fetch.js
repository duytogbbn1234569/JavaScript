var urlApi ='http://localhost:3000/users'
fetch(urlApi)
    .then(function(response) {
        return response.json()
        // JSON -> Javascript types
    })
    .then(function(users) {
        var htmls = users.map(function(user) {
            return `<li>
                <h2>User name: ${user.username}</h2>
                <h3>Email: ${user.password}</h3>
            </li>`
        })
        var html = htmls.join('')
        console.log(typeof html)
        document.getElementById('post').innerHTML
            = html
    })
    
    .catch(function(err) {
        console.log("Có lỗi")
    })