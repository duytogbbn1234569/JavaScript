var getH1Elements = document.querySelectorAll('h1');

for (var i=0; i < getH1Elements.length; i++) {
    getH1Elements[i].onclick = function(e) {
        alert('Bạn đã click vào thẻ h1')
        // khi onclick gọi hàm thì lúc này vòng lặp for đã được
        // chạy xong nên không thể lấy vị trí của thẻ h1
    }
}