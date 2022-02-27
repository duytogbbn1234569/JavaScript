Array.prototype.filter1 = function(callback) {
    var Arraylength = this.length;
    var resultArray = [];
    for (let i = 0; i < Arraylength; i++) {
        if(callback(this[i], i, this)){
        	resultArray.push(this[i]);
        }
    }
    return resultArray
}
var array = [1, 2, 3]
var newArray = array.filter1(function (number){
		return number < 4
})
console.log(newArray)