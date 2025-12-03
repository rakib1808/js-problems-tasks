//**** While Loop task******//

///*******Task-01, commitment.js********** 

            // Subtask-1:
//"I will invest at least 6 hrs every single day for next 60 days!,".
// this message 60 times. note: Give me even or Odd Number Message separately, So display this.

let i = 1;
let odd = "";
let even = "";

while (i <= 60) {
    if (i %2=== 0) {
    even += "I will invest at least 6 hrs every single day for next 60 days!" +i+ "\n";    
    }
        else {
        odd += "I love you for every single day" +i+ "\n";
    }
    i++;

}
console.log(even);
console.log(odd);


//*******Task-02, odd even.js**********

            // Subtask-1:
// Find all the odd and even numbers from 61 to 100.

let num = 61;

while (num <= 100) {

    if (num % 2 === 0) {
        console.log("Even Number:", num);
    } 
    else {
        console.log("Odd Number:", num);
    }

    num++;
}


//***********Task-03, sum of odd numbers.js***********

            //Subtask-1:
//Display sum of all the odd and even numbers from 91 to 129.

let numbr = 91;
let oddSum = 0;
let evenSum = 0;

while (numbr <= 129) {

    if (numbr % 2 === 0) {
        evenSum = evenSum + numbr;
    } else {
        oddSum = oddSum + numbr; 
    }

    numbr++;
}

console.log("Sum of all Odd numbers:", oddSum);
console.log("Sum of all Even numbers:", evenSum);



//***********Task-04,***********

//Implement a countdown timer that counts down from 81 to 65.

let num1 = 81;

while (num1 >= 65) {
    console.log("countdown:", num1)
    num1--;
}
console.log("countdoen complete");