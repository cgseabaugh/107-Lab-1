var mathLib = require('./myMath');

function sayHello(){
    console.log("Hello, my name is Gabe!");
};
function exc1(){
    // print numbers 1 to 10, except the 7
    for(var i=1; i<11; i++ ){
        if(i != 7){
            console.log(i);
        }
    }
};
function exc2(){
    //print number from 20 to 1, except 7 and 13
    for(var i=20; i>0; i--){
        if(i !=13 && i != 7){
            console.log(i);
        }
    }
};

/* console.log("Hello World!");
sayHello();
exc1();
exc2(); */

function homeWork(){
    var numbers = [23, 45, 23, 56, -2, 34, 8, 1, -12, 2, 123];

    // 1 finD the smaller
    var smallest = numbers[0];
    for(var i=0; i < numbers.length; i++){
        var n = numbers[i];
        if(n < smallest) smallest = n;
    }
    console.log("The smallest is", smallest);

    // 2 find the bigger

    var biggest = numbers[0];
    for(var i=0; i <numbers.length; i++){
        var n = numbers [i];
        if(n > biggest) biggest = n;
    }
    console.log("the biggest is", biggest);

    //3 the sum of them all

    var sum = numbers.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log("the sum of them is", sum);

    //4 multiply them all
    
    var mult = numbers.reduce(function(a, b){
        return a * b;
    });
    console.log("multiplied, they equal", mult);

    //5 print non positive (lower than 0)

    var nonpos = numbers[0];
    for(var i=0; i<numbers.length; i++){
        var n = numbers [i];
        if(n<0) console.log(n, "is not an odd number");
    };

    //6 print the odd numbers

    var odds = numbers.filter(n => n%2);
    console.log(odds);

};

mathLib.mathMod();

/* var res = mathLib.sum(21, 21);

var bigger = mathLib.greater(384792856,832794458);
console.log("bigger:", bigger);

var smaller = mathLib.smaller(0, -1);
console.log("smaller:", smaller);

var r1 = mathLib.division(528345267,3463);
console.log(r1);

var r2 = mathLib.division(456, 0);
console.log(r2)

var r4 = mathLib.isEven(87);
console.log(r4); */

homeWork();