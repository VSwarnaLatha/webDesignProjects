/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
(function(){
function Question(ques,options,answer){
    this.ques=ques;
    this.options=options;
    this.answer=answer;
}
//Displaying question
Question.prototype.displayQuestion=function(){
    console.log(this.ques);
    
    //Displaying options
    for(var i=0;i<this.options.length;i++){
        console.log(i+':'+this.options[i]);
    }
}
//Checking correct answers
Question.prototype.displayAnswer=function(){
     if (res===this.answer) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :)');
        } 
}

var q1=new Question('who is this course\'s teacher?', ['john','mike','jonas'], 2);
var q2=new Question('Is js the coolest programming language?', ['Yes','No'],0);
var q3=new Question('Is js fun to learn?',['simple','fun','cool','hard'],1);

var questions=[q1,q2,q3];

//Generating random questions
var n=Math.floor(Math.random()*questions.length);

questions[n].displayQuestion();
var res=parseInt(prompt('Please select the correct answer.(Enter in numbers)'));
questions[n].displayAnswer();
})();
*/
/*
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this)

11. Display the score in the console. Use yet another method for this.
*/
/*
(function(){
function Question(ques,options,answer){
    this.ques=ques;
    this.options=options;
    this.answer=answer;
}
//Displaying question
Question.prototype.displayQuestion=function(){
    console.log(this.ques);
    //Displaying options
    
    for(var i=0;i<this.options.length;i++){
        console.log(i+':'+this.options[i]);
    }
}
//Checking correct answer
Question.prototype.displayAnswer=function(ans,callback){
    var sc;
     if (ans===this.answer) {
            console.log('Correct answer!');
            sc=callback(true);

        } else {
            console.log('Wrong answer. Try again :)');
            sc=callback(false);
             } 
    this.displayScore(sc);
 }   

//updating current score

Question.prototype.displayScore=function(score){
     console.log('Your current score is: '+score);
     console.log('------------------------------');
}
var n;
var q1=new Question('who is this course\'s teacher?', ['john','mike','jonas'], 2);
var q2=new Question('Is js the coolest programming language?', ['Yes','No'],0);
var q3=new Question('Is js fun to learn?',['simple','fun','cool','hard'],1);
    


var questions=[q1,q2,q3];
  //closures
    function score(){
        var sc=0;
        return function(res){
            if(res){
                sc++;
            }
            return sc;
        }
}
    var keepScore=score();
 
//Generating and displaying random questions 
function nextQuestion(){
    
//generating random number
    
n=Math.floor(Math.random()*questions.length);
questions[n].displayQuestion();
    
var res=prompt('Please select the correct answer.(Enter in numbers)');
    //Checking user enters 'numbers' 
    if(res !== 'exit'){
        questions[n].displayAnswer(parseInt(res),keepScore);
        nextQuestion();
        }
    //If user enters 'EXIT' then game ENDS.
    else{
        var end=alert('END OF THE GAME...!!!!');
    }
}   
    nextQuestion();
})();
*/
