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

// var firstName = 'Bacchus';
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