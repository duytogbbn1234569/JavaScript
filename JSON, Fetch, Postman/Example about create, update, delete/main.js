var listUserBlock = document.getElementById('list-users')

var userApi = 'http://localhost:3000/users'

function start() {
    getUsers(renderUsers)
    handleCreateForm();

}

start();

function getUsers(callback) {
    fetch(userApi)
    .then(function(response) {
        return response.json()
    })
    .then(callback)
}
function createUser(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(userApi, options)
    .then(function(response) {
        response.json()
    })
    .then(callback)
}
function handleDeleteUser(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(userApi + '/' + id, options)
    .then(function(response) {
        response.json()
        
    })
    .then(function() {

        getUsers(renderUsers)
    })

}
function updateUser(data, id, callback) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    
    fetch(userApi + '/' + id, options)
    .then(function(response) {
        response.json()
    })
    .then(callback)

}
function renderUsers(users) {
    var listUserBlock = document.getElementById('list-users')
    var htmls = users.map(function(user) {
        return `<li>Username: <span id='username-${user.id}'>${user.username}</span> <br>
                    Password: <span id='password-${user.id}'>${user.password}</span><br>
                    <button onclick ="handleDeleteUser(${user.id})">Delete</button>
                    <button id="update" onclick ="handleUpdateUser(${user.id})">Update</button>
                </li>`
    })
    listUserBlock.innerHTML = htmls.join('')
}

function handleCreateForm() {
    var createBtn = document.getElementById('create-button')
    createBtn.onclick = function() {
         var username = document.querySelector('input[name="username"]').value  
         var password = document.querySelector('input[name="password"]').value
        var formData = {
            username: username,
            password: password
        }
        createUser(formData, function() {
            getUsers(renderUsers)
        })
    }
}
function handleUpdateUser(id) {
    document.querySelector('input[name="username"]').value 
        = document.getElementById('username-' + id).textContent
    document.querySelector('input[name="password"]').value 
        = document.getElementById('password-' + id).textContent
    document.getElementById('create-button').id
        = 'update-button'
    document.getElementById('update-button').textContent
        = 'Update'
        var updateBtn = document.getElementById('update-button')
    updateBtn.onclick = function() {
        var formData = {
            username: document.querySelector('input[name="username"]').value,
            password: document.querySelector('input[name="password"]').value
        }
        updateUser(formData,id,function() {
            getUsers(renderUsers)
        })
    }
}