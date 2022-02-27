Array.prototype.reduce1 = function(callback, periousValue) {
    var Arraylength = this.length;
    let i = 0;
    if(arguments.length < 2){
    	periousValue = this[0]
      i=1
    }
    for (i; i < Arraylength; i++) {
        periousValue = callback(periousValue, this[i], i, this)
    }
    return periousValue
}
var array = [1, 2, 3]
var newArray = []
var totalNumbers = array.reduce1(function(total, number){
    return total + number
})
console.log(totalNumbers)