var mArray = ['ban1','banmin','banminseok',];

var i=0;
while (i<mArray.length){
    console.log(i,mArray[i]);
    i=i+1;
}
var mObj = {
    fa :'minseok',
    mom : "mijin",
    do : "jihyun"
}

console.group('obj loop');

for(var name in mObj){
    console.log(name, mObj[name]);
}

console.groupEnd('obj loop');

