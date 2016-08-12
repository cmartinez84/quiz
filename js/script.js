var scorePhp = 1;
var scoreRuby = 1
var scoreJava = 1;
var scoreCss = 1;
var scoreCsharp = 1;



$(function(){
  $("#submitButton").click(function(){
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var answer4 = parseInt($("#question4").val());
    var answer5 = parseInt($("#question5").val());

    if(answer1 === 1){
      scoreRuby += 1;
      scoreCss += 1;
    }
    else if(answer1 === 2){
      scorePhp += 1;
      scoreRuby += 1;
      scoreCss += 1;
    }
    else if(answer1 === 3){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCsharp += 1;

    }
    else if(answer1 === 4){
      scoreJava += 1;
      scoreCsharp += 1;
    }
    else if(answer1 === 5){
      scorePhp += 1;
      scoreJava += 1;
      scoreCsharp += 1;
    }

    //question 2

    if(answer2 ===1){

    }
    else if(answer2 === 2){
      scoreRuby += 1;
      scoreCss += 1;
    }
    else if(answer2 === 3){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCsharp += 1
    }
    else if(answer2 ===4){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }
    // question 3
    if(answer3 ===1){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }
    else if(answer3 ===2){
      scoreRuby += 1;
      scoreJava += 1;
    }
    else if(answer3 ===3){
      scoreRuby += 1;
      scoreCsharp += 1
    }
    else if(answer3 ===4){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCsharp += 1
    }
    else if(answer3 ===5){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }
    // question 4
    if(answer4 ===1){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }
    else if(answer4 ===2){
      scorePhp += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }
    else if(answer4 ===3){
      scorePhp += 1;
      scoreRuby += 1;
      scoreCss += 1;
    }
    else if(answer4 ===4){
      scorePhp += 1;
      scoreRuby += 1;
      scoreCss += 1;
    }
    else if(answer4 ===5){
      scoreJava += 1;
      scoreCsharp += 1
    }
    // question 5
      if(answer5 === 1){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }
    else if(answer5 === 2){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }
    else if(answer5 === 3){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }
    else if(answer5 === 4){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }
    else if(answer5 === 5){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }


  // makes array of scores to find out highigest
 var results=[scorePhp, scoreCss, scoreCsharp, scoreJava, scoreRuby]; //places results in array
 console.log(results);
 var highestScore = Math.max(...results) //determines highest score
 console.log(highestScore);




var languageNames = ["php", "css", "csharp", "java", "ruby"]
$(results).each(function(i){
  if(results[i] === highestScore){
    console.log(languageNames[i]);
  };
})




// future questions use this template
    if(answer2 ===1){
      scorePhp += 1;
      scoreRuby += 1;
      scoreJava += 1;
      scoreCss += 1;
      scoreCsharp += 1
    }

    // alert(scoreRuby);
    // alert(scorePhp);
    // alert(scoreJava);
    // alert(scoreCss);
    // alert(scoreCsharp);

  }); //ends submit button function on click
}); //end jquery
