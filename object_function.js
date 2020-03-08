var kim = {
    name : 'kim',
    first : 10, second: 20
}
var lee = {
    name : 'lee',
    first : 10, second:10  
}
function sum(){
    return this.first + this.second;
}

function sumPlus(prefix){
    return prefix+(this.first + this.second);
}

sum.call(kim); //==유사품  apply
// sum   객체 실행.  ==>  1. this=kim , 2. sum()

console.log("sum.call(kim)",sum.call(kim));
console.log("sum.call(lee)",sum.call(lee));
console.log("sumPlus.call(lee)",sumPlus.call(lee,": "/*profix*/));

var kimsum = sumPlus.bind(kim, '->');
console.log("kimsum()",kimsum());

