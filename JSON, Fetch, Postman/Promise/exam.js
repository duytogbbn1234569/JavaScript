var users = [
    {
        id: 1,
        name: 'Duy Nguyễn'
    },
    {
        id: 2,
        name: 'Mai Nguyễn'
    },
    {
        id: 3,
        name: 'Thường Nguyễn'
    }
]
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Nấu cơm đi Mai ơi!'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Ok'
    },
    {
        id: 1,
        user_id: 1,
        content: 'Xuống nhanh đi 6h30 rồi đấy.'
    }
];
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
}
function getUsersbyuser_id(user_id) {
    var checkID = users.filter(function(user) {
        return user_id = user.id
    })
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(checkID)
        }, 1000)
    })
}
getComments().
    then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id
        })
        return getUsersbyuser_id(userIds)
        .then(function(users) {
            return {
                usersNew: users,
                commentsNew: comments 
            }
        })
    })
    .then(function(data) {
        var h1ELement = document.querySelector('ul')
        var html = ''
        data.commentsNew.forEach(function(comment) {
            var user = data.usersNew.find(function(user){
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        h1ELement.innerHTML = html
    })