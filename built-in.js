console.log(Math.PI);
console.log(Math.random());
console.log("Math.floor(3,9)",Math.floor(3,9));

var MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function (val) {
        return Math.floor(val);
    }
}

console.log ("MyMAth.PI",MyMath.PI);
console.log ("MyMAth.random",MyMath.random());
console.log ("MyMAth.floor",MyMath.floor(3.45));
