Array.prototype.forEach1 = function(callback, index) {
    for (var index in this) {
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this)
        }
    }
};
var array = [1, 2, 3];
var newArray = [];
array.forEach1(function(number){
    newArray.push(number);
})
console.log(newArray);
