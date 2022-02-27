Array.prototype.find1 = function(callback) {
    var Arraylength = this.length;
    let i = 0;
    for (i; i < Arraylength; i++) {
        if(callback(this[i], i, this)){
        	return this[i]
        }
    }
}
var array = [1, 2, 3]
var newArray = array.find1(function (number){
		return number < 3
})
console.log(newArray)