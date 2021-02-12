function calculator(){
    //Input:Get numbers, operators and child answer
    //Progressing:Calculate Two numbers using arithmetic operator and compare with child answer.
    //Output:Show if child answer is "Correct!🏆 or Incorrect😢"

    // Input -get number1 and Number2 from the user
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let Operator = (document.getElementById('operator').value);
    let ChildAnswer = parseFloat(document.getElementById('answer').value);

    // Progressing - calculate Two numbers using arithmetic operator
    let correctAnswer

    switch (Operator) {
    case "+":
        correctAnswer = num1 + num2;
       break;
    case "-":
        correctAnswer = num1 - num2;
        break;
    case "*":
        correctAnswer = num1 * num2;
        break;
    case "/":
        correctAnswer = num1 / num2;
        break;
     }

     switch(ChildAnswer) {
        case correctAnswer:
            document.getElementById("output").innerHTML = "Correct!🏆"
        break;

        default:
        document.getElementById("output").innerHTML = "Incorrect😢"
     }
}