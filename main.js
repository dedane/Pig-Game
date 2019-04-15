/*i am going to be a super cool web app developer */
/*
console.log("hello world");

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variables naming rules
var _3years = 3;
var johnMark = 'john and Mark';
console.log("JohnMark");
*/
/** variable mutation and type coercion */
/*
var johnMass = 70; //kg
var johnHeight = 6;//ft

var MarkMass = 60; //kg
var MarkHeight = 5.8;//ft



var JohnBmi = johnMass / (johnHeight * johnHeight);
console.log(JohnBmi);
var MarkBmi = MarkMass / (MarkHeight * MarkHeight);
console.log(MarkBmi);

var higherBmi = (  JohnBmi >=  MarkBmi  );
console.log(higherBmi);

var john = JohnBmi;
var Mark = MarkBmi;

console.log('is' + john + 'greater than'  + Mark + '?' + higherBmi);

**/
/*

var firstName = 'Evans';
var civilStatus = 'married';
var age = 30;

if (civilStatus === 'married'){

    console.log(firstName + ' is married! ');

}
else {

    console.log (firstname + ' waiting to marry soon! ');

}

var isMarried = false;
if (isMarried ){
    console.log(firstName + 'is Married!')
}
else {
    console.log(firstName + 'Will get Married soon ;)')
}

if (age < 20) {
    console.log(firstName + 'Have a fun and happy youth');
}
else if ( age >= 20 || age <= 23){
    console.log('Seriously learn how to code!');
}
else {
    console.log('Be a farmer and use technology to progress Farming')
}

age >=18 ? console.log( firstName + ' Searches for himself ') : console.log( firstName + 'Continues to code');

var work = age>= 18 ?  'code' : 'Study';
console.log(work);

var age = 25;
switch(true){
    case age < 13:
    console.log(firstName + 'You still a child');
    break;

    case age >= 13 && age < 19:
    console.log( firstName + ' learn javascript');
    break;

    case age >= 20 && age < 30:
    console.log(firstName + ' Develop a WORLD CLASS APPLICATION');
    break;
}

//falsy value: undefined , null empty strings , 0 '' null **?
// Truth values: Not FALSY
/* *
var height = 0;

if (height || height === 0) {
    console.log('Variable is defined');
}
else {
    console.log('Variable has not been defined.');
}
 **/

 /*

 var johnGames = 116 && 94 && 123;
 var MikeGames = 116 && 94 && 123;
 var MaryGames = 97 && 134 && 105;

 var johnaverage = (116 + 94 + 123) / 3;
 console.log (johnaverage);
 
 var Mikeaverage = (116 + 94 + 123) / 3;
 console.log (Mikeaverage);

 var Maryaverage = (97 + 134 + 105) / 3;
 console.log (Maryaverage);

 
 
     if (johnaverage > Mikeaverage) {
     console.log ('john won by' + johnaverage);
     }

      else if (Mikeaverage > johnaverage )
      {
     console.log (' Mike won by ' + Mikeaverage);
      }

     else if (Maryaverage > Mikeaverage && johnaverage)
     {
     console.log(' Mary won by ' + Maryaverage);
     }
     else if (Mikeaverage == johnaverage){
         console.log('It was a tie');
     }

     
   **/  
  /** 
  function calculateCodeMastery (startYear) {
     return 2019 - startYear
  }
  var jsCompletion = calculateCodeMastery(2017);

  console.log(jsCompletion);

  function ProjectCompletion(year, Project){
      var time = calculateCodeMastery(year);
      var completion = 2 + time;

      console.log('i will have mastered my coding when i complete' + Project + ' in ' + completion + ' years ' );
  }
  ProjectCompletion(2019, ' Pos ');

*/

/** 

var WhereAreYou = function(Time , job){
    switch(Time) {
        case 'One Month':
        return   ' still learning ' + job;

        case 'Three Months':
        return ' Trying to develop a ' + job;

        case 'Six Months':
        return ' incubating ' + job + 'Startup';

        default:
        return 'Stops Procastinating ' + job ;
        
    }
}

console.log (WhereAreYou( 'One Month' , ' Javascript Programming '));
console.log (WhereAreYou( 'Three Months' , ' Online Point Of Sale ' ));
console.log (WhereAreYou( 'Six Months' , ' IHive ' ));
*/

/** 

var john = ['John', 'Smith', 1980 , 'Teacher', false];

john.push('blue');

console.log(john);
john.unshift('Mr');



console.log(john);
john.pop();

console.log(john);

john.shift();

console.log(john);

console.log(john.indexOf('Teacher'));

var isDesighner = john.indexOf('Web Desighner') == -1 ? 
'John is a Web Desighner ' : 'John is not A Web Desighner';
console.log(isDesighner);

*/
/*
var hotelA= 124;
var hotelB = 48;
var hotelC = 268;

function tipCalculator (Bill,Percentage) {

    return hotelABill * Percentage ;

    
    
}

var hotelABill = tipCalculator(124);
if (hotelABill < 50) {
    console.log( Percentage ==  0.2);
    console.log(hotelA + percentage);
}

else if(hotelABill == 50 && hotelABill <= 200){
    console.log( percentage ==  0.15);
    console.log(hotelA + percentage);
}

else if(hotelABill > 200) {
    console.log( percentage ==  0.1);
    console.log(hotelA + percentage);
}

console.log(tipCalculator());

/*
var tip = tipCalculator(Bill, Percentage);


var Bill

if (bill < 50){
    console.log(bill * 0.2);
}
else if (bill == 50 && bill <= 200){
    console.log(bill * 0.15);
}
else if (bill > 200) {
    console.log(bill * 0.1);
}


var hotelA = tipCalculator(124,0.2);
console.log(hotelA)        

*/
/** 
function Hotelbill(bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    }
    else if (bill == 50 && bill < 200){
        percentage = 0.15;
    }
    else
        percentage = 0.1;

        return percentage *  bill
}

var bill=[124,48,268];
var tips = [Hotelbill(bill[0]),Hotelbill(bill[01]),Hotelbill(bill[02])];
console.log(tips);

var total = [bill[01] + Hotelbill(bill[01]),bill[0] + Hotelbill(bill[0]),bill[02]+ Hotelbill(bill[02])];
console.log(total);

/**
 * objects and properties
 */

 /** 
// object literal
 var john = {
     Firstname: 'John',
     Lastname: 'smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Lynn'],
     job: 'teacher',
     isMarried: false
 };
 console.log(john.Firstname);
 console.log(john['Lastname']);


 // new object
 var evans = {
 FirstName : 'Evans',
 LastName : 'Kimathi',
 birthYear : 1996,
 job : 'Aspiring coder/Farmer',

 //This is a method
 calcAge : function(){
    this.age = 2019 - this.birthYear;
 }
}
 
 evans.calcAge();
 console.log(evans);
 
 */
/** 
 var Mark = {
     Fullname : 'Mark',
     mass : 60, //in kg
     height : 5.8, //feet tall
     calcBmi: function(){
         this.Bmi = this.mass / (this.height * this.height) ;
         return this.Bmi;
     }
 }

Mark.calcBmi();
console.log(Mark);

 var John = {
     Fullname : 'John',
     mass : 70, // in kg
     height :6, // feet tall
     calcBmi: function(){
         this.Bmi = this.mass / (this.height * this.height);
         return this.Bmi;
     }
 }

 John.calcBmi();
 console.log(John);
/** 
 if (John.Bmi > Mark.Bmi){
     console.log ( "John's bmi" +  John.Bmi + "is greater than Marks Bmi" );
 }
 else{
     console.log( "Mark's bmi" +  Mark.Bmi  + "Is greater than Johns's " );
 }
*/

/*** 
//continue and break statements
var evans = ['Evans', 'Kimathi', 1996, 'Web Developer', false];

for(var i = evans.length - 1; i >= 0; i--){ 
    console.log(evans[i]);
}

*/ 

/** 
 
var Evans = {
    fullName: 'Evans Kimathi',
    bills : [124,48,268,180,42],

    calcTips : function ()
    {
        
        this.tips = [];
        this.fullAmount = [];
       
        

        for (var i = 0 ; i < this.bills.length; i++ ){

            var bill = this.bills[i];
            var percentage;

            if (bill < 50){
                percentage = .2;
            }
            else if(bill >= 50 && bill <= 200){
                percentage = .15;
            }
            else {
                percentage = .1;
            }
           
            this.tips[i] =  bill * percentage;
            this.fullAmount[i] = bill + bill * percentage;  
        }
         
    }
}



var Mark = {
    fullName: 'Mark Maasai',
    bills :[77,375,110,45],

    calcTips : function()
    {

       this.tips = [];
       this.fullAmount = [];

       for(var i = 0; i < this.bills.length; i++){
           
           var bill = this.bills[i];
           var percentage;

           if (bill < 100  ){
               percentage = .2 ;
           }
           else if (bill >= 100 && bill <= 300){
               percentage = .1;
           }
           else{
               percentage = .25;
           }
       

    this.tips[i] = bill * percentage ;
    this.fullAmount[i] =  bill + bill * percentage ;
        }

    }
}
function average (tips){

    var sum = 0;
 
    for(i = 0; i < tips.length; i++){

      sum = sum + tips[i];
      

    

}
return sum / tips.length;

}

Evans.calcTips();
Mark.calcTips();
console.log(Mark);
console.log(Evans);

Evans.average = average(Evans.tips);
Mark.average = average(Mark.tips);
console.log(Evans,Mark);

if(Evans.average > Mark.average){
    console.log('Evans is a better tipper');

}

else {
    console.log("Mark  is a better tipper");
}
*/
calculateAge(1996);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);
}

var Evans = {
    name: 'Evans',
    yearOfBirth: 1996,
    calculateAge: function (){
        console.log(this);
        console.log(2019 - this.yearOfBirth);
    }
};
Evans.calculateAge();