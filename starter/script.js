
/*var fullage = true;
console.log(fullage);

var job;
console.log(job);

// variable naming rules

var firstName='John';
var age=28;

var isMarried;
console.log(firstName + ' ' + age);

job='driver';
isMarried=false;
//alert(firstName + 'is a ' + age + ' years old.'+ ' Is he married?' + isMarried);

var lastName=prompt('What is ' + firstName +  ' lastname?');
console.log(firstName + ' ' +  lastName);*/

/* Basic operators  */

/*var year, yearJohn, yearMark;
year=2019;
ageJohn=28;
ageMark=33;
yearJohn=year-ageJohn;
yearMark=year-ageMark;

console.log(yearJohn);

var johnOlder=ageJohn<ageMark;
console.log(johnOlder);*/

/*
var massMark, massJohn, heightMark, heightJohn, BMIMark, BMIJohn, higherBMIMark;

massMark=75;
massJohn=80;
heightMark=180;
heightJohn=181;
BMIMark=massMark/(heightMark*2);
BMIJohn=massJohn/(heightJohn*2);
higherBMIMark=BMIMark>BMIJohn;
console.log(BMIMark);
console.log(BMIJohn);
console.log(higherBMIMark);
*/


/*
var firstName='John';
var civilStatus='divorced';

var isMarried=false;

if(isMarried){
    console.log(firstName + ' is married');
}
else{
    console.log(firstName + ' is single');
}
*/


/*
var name='John';
var age=16;

/!*if (age<13){
    console.log(name + ' is a boy')
} else if(age>=13 &&age<=20){
    console.log(name + ' is a teenager');
} else{
    console.log(name + ' is an adult');
}*!/


age>19 ? console.log(name + ' cand drink beer') : console.log(name + ' cannot drink alchool');
*/

/*
var name='Ben';
var job='dentist';

switch (job) {
    case 'teacher':
        console.log(name + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(name + ' drives un Uber car');
        break;
    case 'designer':
        console.log(name + ' designs stuff');
        break;
    default:
        console.log(name + ' has another job');
}
*/

/*
var teamJohn_Avg, teamMike_Avg, highest_Avg, teamMarry_Avg ;

teamJohn_Avg=(1116+94+123)/3;
teamMike_Avg=(1116+94+123)/3;
teamMarry_Avg=(97+134+105)/3;




highest_Avg=teamJohn_Avg>teamMike_Avg;

if (highest_Avg){
    console.log('John\'s team is better than Mike\'s team')
}
else if (teamJohn_Avg===teamMike_Avg){
    console.log('Both teams have the same score');
}
else
    console.log('Mike\'s team is better than John\'s team');
*/


/*function calculateAge(birthYear){
    return 2019-birthYear;
}

var ageJohn=calculateAge(1990);
console.log(ageJohn);

function yearsUntilRetirement(year, firstName){
    var age=calculateAge(year);
    var pension=65-age;
    if (pension>0){
        console.log(firstName + ' has ' + pension + ' years until retirement');
    }else{
        console.log(firstName + ' has ' + 'already retired');
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1945, 'Mike');
yearsUntilRetirement(1980, 'Jane');*/



/*var bill1, bill2, bill3;

bill1=124;
bill2=48;
bill3=268;

function tipCalculator(bill){
    if(bill<50){
       return tip=0.2*bill;
    } else if (bill>50 && bill<200){
        return tip=0.15*bill;
    }else if (bill>200){
        return tip=0.1*bill;
    }
}

var bills=[124,48,268];
var tips=[tipCalculator(bills[0]),
         tipCalculator(bills[1]),
        tipCalculator(bills[2])];
var finalValue=[bills[0]+tips[0],
                bills[1]+tips[1],
                bills[2]+tips[2]];

console.log(tips, finalValue);*/

/*
var John={
    firstName:'John',
    lastName:'Smith',
    birthYear:1990,
    calcAge: function(){
        this.age= 2019-this.birthYear;
    }
};

John.calcAge();
console.log(John);

*/










/*
var Jane=new Object();
Jane.firstName='Jane';
Jane.lastname='Smith';
Jane['birthYear']=1988;
console.log(Jane);

*/

/*
var Mark={
    name:'Mark',
    mass:80,
    height:180,
    BMICalc:function () {
        this.BMI=this.mass/(this.height*2);
        return this.BMI;
    }
};
Mark.BMICalc();
var John={
    name:'John',
    mass:80,
    height: 185,
    BMICalc:function () {
        this.BMI=this.mass/(this.height*2);
        return this.BMI;
    }
};
John.BMICalc();

if (Mark.BMICalc()>John.BMICalc()){
    console.log(Mark.name, Mark.BMI);
}else if(Mark.BMICalc()<John.BMICalc()){
    console.log(John.name, John.BMI);
}else{
    console.log('Mark and John have the same BMI: ' + Mark.BMI);
}
*/

/*
 for (i=0;i<10;i++){
     console.log(i);
 }
*/



/*
for (i=0;i<people.length;i++){
    console.log(people[i]);
}
*/

//while loop
/*
var i=0;
while(i<people.length)
{
    console.log(people[i]);
    i++;
}
*/

/*
var people=['John', 'Smith',1990, 'Jane',false, 'Ana', 'Mike'];

for (var i=0;i<people.length;i++){
    if(typeof people[i] ==='string') continue;
    console.log(people[i]);
}
*/


/*
var personProto={
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john=Object.create(personProto);

john.name='John';
john.lastname='Smith';

john(30)*/

/*
var years=[1990, 1995, 1965, 2014];

function arrayCalc(arr, fn) {
    var arrRes=[];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

function calcAge(el) {
    return 2019 - el;
}

var age=arrayCalc(years, calcAge);
console.log(age);*/

/*
function maxRate(el){
    if(el  >= 18 && el <= 80){
        return Math.round (206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var rates=arrayCalc(age, maxRate);
console.log(rates);*/



/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
           var answer=prompt(name + ' can you tell what UX design stands for?')
                if (answer === 'User Experience'){

                        alert( 'Congrats. ' + 'The average pay for this position is 35.000');

                }else{
                    alert ('your answer is not correct');
                }
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ' what subject do you teach?')
        }
    } else if (job === 'driver') {
        return function (name) {
            console.log(name + ' what car do you drive?')
        }
    } else {
        return function (name) {
            console.log(name + ' what is your job?')
        }

    }
}

interviewQuestion('designer')('John');*/

/*
interviewQuestion('teacher')('Marry');

interviewQuestion('fireman')('Bill');
*/



/*
function retirementAge(retirementAge){
    var a= ' years left until retirement';
    return function (yearOfBirth) {
        var age=2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

retirementUS=retirementAge(65);
console.log(retirementUS);
retirementUS(1990);


retirementRO=retirementAge(47);
retirementRO(1988);
*/
/*

(function (){

    var proglang=['JS', 'PHP', 'JAVA', 'C++', 'RUBY', 'PYTON'];
    var randomNumber=Math.floor(Math.random() *proglang.length);
    var randProgLang=proglang[randomNumber];

    function askQuest(language){
        var modelQuest='Is ' +  language + ' a cool  programming language?';
        var answer=prompt(modelQuest, 'yes');
        // return answer;
        //return modelQuest;

        if(answer === 'yes'){
            alert('You are right!');
        }else if (answer === 'no'){
            alert('Unfortunately your answer is the wrong one');
        }else {
            alert('Your answer is not a valid one');
        }

    }
    askQuest(randProgLang);
})();
*/

/*
function question(arr, fn){
    var arrRes=[];
    for (var i =0; i < arr.length; i++){
        arrRes.push(fn(arr[i]))
    }
    //var randQuestion=Math.ceil(Math.random() *2);




    return arrRes;

    //console.log(arrRes);
}*/



//console.log(quest);





/*
function arrayCalc(arr, fn) {
    var arrRes=[];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

*/

/*
function quizz(){
    var question=
}

*/





(function () {

    function Question(question, answers, correct){
        this.question= question;
        this.answers= answers;
        this.correct= correct;
    }

    Question.prototype.displayQuestion= function () {
        console.log(this.question);
        for (var i=0; i<this.answers.length; i++){
            console.log(i + ':' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer=function (ans, callback) {
        var sc;
        if (ans===this.correct){

            console.log('You are correct');
            sc=callback(true);
        }else{
            console.log('Please try again :)');
            sc=callback(false);
        }
    }

    var q1= new Question('Is JS the coolest programming lang', ['Yes', 'No'], 0);
    var q2= new Question('What is the name of this course\'s teacher ?', ['John', 'Peter', 'Jonas'], 2);
    var q3= new Question('What does best describe coding ?', ['Boring', 'Fun', 'Hard', 'Tedious'], 1);

    var questions= [q1, q2, q3];

    function score(){
        var sc=0;
        return function (correct) {
            if (correct){
                sc++;
            }
            return score;
        }
    }

    var keepScore=score();

    function nextQuestion() {

        var randomNumber=Math.floor(Math.random() * questions.length);
        questions[randomNumber].displayQuestion();
        var answer= (prompt('Please select the correct answer')) ;

        if (answer !== 'exit'){
            questions[randomNumber].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();

})();