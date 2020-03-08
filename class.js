class Person{
    //-- function   사용안함.
    constructor(name, first, second ){
        //--  약속된 이름.
        console.log("constructor");
        this.name = name;
        this.first = first;
        this.second =second;
    }
    sum() {
        return 'class :'+(this.first+this.second);
    } 
}

class PersonPlus extends Person{
    // --  상속..
    constructor(name, first, second,  third){
        //--super
        /*  1. super() : 부모클래스의 생성자
            2. super :   부모클래스
         */
        super(name, first, second );
        this.third = third;
    }
    sum(){
        return (super.sum()+this.third);
    }
    avg(){
        return 'avg :' + (this.first+this.second+this.third)/3;
    }
} 

kim = new PersonPlus('kim',10,20,30);

console.log ("kim",kim);
console.log("kim.sum()",kim.sum());
console.log("kim.sum()",kim.avg());
//---------------------------------------------------
/*function Person(name, first, second,third) {
    this.name = name,
    this.first = first,
    this.second =second,
    this.third=third
}

Person.prototype.sum=function () {
    return 'prototype :'+this.first+this.second+this.third;
}  
*/
/*
var kim = new Person();

kim.sum = function () {
    return 'this : '+this.first+this.second+this.third;
}
var lee =new Person('lee',10,10,10);

console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());
*/
//---------------------------------------------