var superObj = {superVal : 'super'};
//var subObj = {subVal: 'sub'};
//subObj.__proto__ = superObj;

var subObj = Object.create(superObj);
debugger;
subObj.subVal = 'sub';
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.subVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.subVal =>', superObj.superVal);


kim = {
    name : 'kim',
    first : 10, second: 20,
    sum:function(){
        return this.first+this.second;
    }
}

lee = {
    name : 'lee',
    first : 10, second:10    ,
    avg:function(){
        return (this.first+this.second)/2;
    }
}
lee.__proto__ = kim;
console.log('kim.sum() =>', kim.sum());
console.log('lee.avg() =>', lee.avg());
