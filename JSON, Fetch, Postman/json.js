// JSON là một định dạng kiểu dữ liệu
// JSON stands for Javascript Object Nocation
var string = 'Learn javascript with f8!'
// khi sử dụng stringify để chuyển từ js sang JSON, kiểu dữ liệu chuỗi luôn đặt trong nháy kép
var json = JSON.stringify('"Kiểu dữ liệu của JSON luôn là string trong js"')
var json1 = JSON.stringify('{"name": "Duy", "age": 18}')
var json2 = JSON.stringify('["Môn học 1", "Môn học 2"]')
// parse giúp chuyển từ JSON sang js
var js = JSON.parse(json)
var js1 = JSON.parse(json1)
var js2 = JSON.parse(json2)