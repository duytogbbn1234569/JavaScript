Array.prototype.some1 = function(callback) {
    var Arraylength = this.length;
    var resultArray = [];
    for (let i = 0; i < Arraylength; i++) {
        if(callback(this[i], i, this)){
        	return true
        }
    }
    return false
}
var array = [1, 2, 3]
var newArray = array.some1(function (number){
		return number < 4
})
console.log(newArray)