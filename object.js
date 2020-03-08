var mArray = ['ban1','banmin','banminseok',];
console.log ("mArray[2] :",mArray[2]);

var mObj = {
    fa :'minseok',
    mom : "mijin",
    do : "jihyun"
}
mObj.do = 'seoyoung';
console.log ("mObj.mom:",mObj.mom);
console.log ("mObj['do']:",mObj['do']);
delete mObj.fa
console.log('after delete mObj', mObj.fa);