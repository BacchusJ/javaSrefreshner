/*

**************************************************
var firstName = 'Cristobal';
console.log(firstName);

var lastName = ('Aguirre');
var age = 2.5;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'bad ass kid';
console.log(job);


alert(firstName + ' ' + age + ' ' + 'is' + ' ' + job);

var lastName = prompt('What is his lat name');
console.log(firstName + ' ' + lastName);



var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// // math operators

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// //logical operator

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// // type of operator

console.log(typeof johnOlder);



var now = 2018;
var yearJohn = 1989;
var fullAge = 18;



// multiple operators
var fullAge = now - yearJohn >= fullAge;
console.log(fullAge);



//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// multiple asignments 

var x, y;

x = y = (3 + 5) * 4 - 6;

console.log(x,y);

*************************************************
*/

// var mHeight = 1.89;
// var mWeight = 77.1
// var jHeight = 1.77;
// var jWeight = 90.71

// var marksMass = mWeight / (mHeight * mHeight);
// var johnsMass = jWeight / (jHeight * jHeight);
// console.log(marksMass, johnsMass);


// var markHigherBmi = marksMass > johnsMass;

// console.log('is Mark\'s BMI higher than John\'s? ' + markHigherBmi);
/*
var firstName = 'Bacchus';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon ;)');
}



var mHeight = 1.89;
var mWeight = 97.1
var jHeight = 1.77;
var jWeight = 90.71

var marksMass = mWeight / (mHeight * mHeight);
var johnsMass = jWeight / (jHeight * jHeight);
console.log(marksMass, johnsMass);

if (marksMass > johnsMass) {
    console.log('Mark\'s BMI us higher than John\'s');
} else{
    console.log('John\'s BMI is higher than Mark\'s');
}



/*

************************************

var firstName = 'John'
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');

} else if (age >= 13 && age < 20){
 console.log(firstName + ' is a teenager' );
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man')
}
  else {
       console.log(firstName + ' is a man.')
   }
   ************************************
   */


   // the ternary operator

   /*

   var firstName = 'john';
   var age = 22;

   age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

   // switch statement 

   var job = 'instructor';
   switch(job) {
       case 'teacher':
    //    you can have multiple case clauses 
       case 'instructor':
       console.log(firstName + ' teaches kids how to code');
        break;
       case 'driver':
       console.log(firstName + ' drives an Uber in Lisbon');
        break;
       case 'designer':
       console.log(firstName + ' designes beautiful websites');
       break;
       default:
       console.log(firstName + ' does something else.');
   }

   age = 30;

   switch(true){
        case age < 13:
            console.log(firstName + '  is a boy.');
            break;
        case age >= 13 && age < 20:
            console.log(firstName + ' is a teenager');
            break;
        case age >= 20 && age < 30:
            console.log(firstName + ' is a young man');
            break;
        default:
            console.log(firstName + ' is a man.')
        
   }

 /*  truthy and falsy values and equality operators
falsey values: are undefined, null, o, '', nan all these will be converted to false when evaluated

truthy values: not falsy values */

/*

*******************************************

var height;
height = 0;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('variable has NOT been defined');
}
   

var johnScore = (89 + 120 + 103) / 3;
console.log(johnScore)

var mikeScore = (119 + 94 + 123) / 3;
console.log(mikeScore);

var maryScore = (97 + 134 + 105) / 3;
console.log(maryScore);

if (johnScore > mikeScore && johnScore > maryScore) {
    console.log('John is the winner with the average score of '+ johnScore);

}else if (mikeScore > johnScore && mikeScore > maryScore) {
    console.log("Mikes is the winner with the average score of " + mikeScore)
}else if ( maryScore > johnScore && maryScore > mikeScore) {
    console.log("It is Mary who is the winner with the average score of " + maryScore)
}else {
    console.log('There is a tide!')
}

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var bacchusAge = calculateAge(1977);
var maryAge = calculateAge(2016);
var annieAge = calculateAge(2000);
var candyAge = calculateAge(1999);
console.log(bacchusAge, maryAge, annieAge, candyAge);

function yearsUntilRetirement(year, firstName) {
    //calling a function within a function
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
           //fucntions do not have to return anything back but they can
    console.log(firstName + ' retires in ' + retirement + ' years.')
    }else {
        console.log(firstName + ' is already retired');
    }
 
}

yearsUntilRetirement (1990, "John");
yearsUntilRetirement (1930, "Mike");

*******************************************
*//*

//arrays

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? "John is not a fucking designer darnt it" : 'John is a designer'
console.log(isDesigner);

function tip (billAmount) {
    var percentage;
    if (billAmount <50){
        percentage = .2;  
    } else if (billAmount >= 50 && billAmount < 200){
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * billAmount
}

console.log(tip(50));

var bills =  [124, 48, 268];
var tips = [tip(bills[0]),
            tip(bills[1]),
            tip(bills[2])];

var finaValues = [
    bills[0] + tips [0],
    bills[1] + tips [1],
    bills[2] + tips [2]
]

console.log(tips, finaValues);
************************************************


// OBJECTS AND PROPERTIES


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    married: false
};

console.log(john.lastName);
console.log(john['family']);
console.log(john.family);

john.job = 'designer';

console.log(john.job)

console.log(john)

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastNam'] = 'Smith';
console.log(jane);

*/
/*
**********************************
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1993,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    married: false,

// add a function to our object that will calculate the age of John
    calcAge: function() {
        //the word "this" is refering to john (our currect object)
        this.age = 2019 - this.birthYear;
    }
};



john.calcAge();
console.log(john);


**************************************
var mark = {
    fullName: 'Mark Miller',
    height: 1.89,
    weight: 97.1,
    //adding a function with in an object
    calcMass: function() {
       this.bmi = this.weight / (this.height * this.height);
       return this.bmi;
    }

}




var john = {
    fullName: 'John Smith',
    height: 1.77,
    weight: 90.71,
    calcMass: function() {
        this.bmi=this.weight / (this.height * this.height);
        return this.bmi;
    }
}


//the if statement has both of the functions above
if (john.calcMass() > mark.calcMass()) {
    console.log (mark.fullName + ' \'s BMI of ' + mark.bmi  + ' is higher than John\'s there for, he wins! ');

} else if (john.calcMass() > mark.calcMass()) {
    console.log (john.fullName + ' \'s BMI of ' + john.bmi  + ' is higher than John\'s there for, he wins! ');
}

else {
    console.log('They are both the same');
}

var john = ['John', 'Smith', 1990, 'designer', false];


//for loops
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//while loops
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}
*/
var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== "string") continue
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== "string") break;
    console.log(john[i]);
}

// looping backwards

for (var i = john.length -1; i >= 0; i --) {
    console.log(john[i]);
}