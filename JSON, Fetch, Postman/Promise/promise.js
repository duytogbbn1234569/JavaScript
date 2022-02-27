// Promise là một khái niệm sinh ra để xử lý thao tác async(bất đồng bộ) như callback hell
// Khai báo Promise như cách khai báo 1 object với đối só là 1 function 
// Promise có 3 trạng thái
//    Pending: là trạng thái promise không thực hiện resovel hay reject
//    Fulfilled: là trạng thái promise thực hiện resovle
//    Rejected: là trạng thái promise thực hiện reject
var promise = new Promise(
    // function Executor
    function(resolve, reject) {
        // Logic
        // thành công -> resovle()
        // thất bại -> reject()
        // resolve([1, 2, 3])
        reject('Có lỗi!')
    }
)
// các phương thức của promise
promise
    // then trả về khi promise resovle()
    .then(function(numbers) {
        console.log(numbers)
    })
    // catch trả về khi promise reject()
    .catch(function(error) {
        console.log(error)
    })
    // finally trả về khi promise được done
    .finally(function() {
        console.log('Hoàn thành')
    })