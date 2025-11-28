//**** For Loop *****/

//*******Task-01, commitment.js********** 
            // Subtask-1:
//"I will invest at least 6 hrs every single day for next 60 days!"
//This message 60 times. So display this.


for (let message = 1; message <= 60; message++) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!", message);
    
}


//*******Task-02, odd even.js**********

            // Subtask-1:
// Find all the odd numbers from 61 to 100.

for (let numbers = 61; numbers <=100 ; numbers++) {
    if (numbers % 2 === 1) {
        console.log('the odd number is:', numbers );
    }
}

            // Subtask-2:
// Find all the even numbers from 78 to 98.

for (let number = 78; number <=98; number++){
    if (number % 2=== 0) {
        console.log('the even number is:', number);
    }
}


//***********Task-03, sum of odd numbers.js***********

            //Subtask-1:
//Display sum of all the odd numbers from 91 to 129.

let oddSum = 0;
for (let oddNum = 91; oddNum <= 129; oddNum++) {
    if (oddNum % 2 !== 0) {
         oddSum =  oddSum + oddNum;
         console.log('Total oddNum:', oddNum);
    }
}
console.log('Total oddSum:', oddSum);


            // Subtask-2:
// Display sum of all the even numbers from 51 to 85.

let evenSum = 0;
for (let evenNum = 51; evenNum <= 85; evenNum++) {
    if (evenNum % 2 === 0) {
        evenSum = evenSum + evenNum;
        console.log('Total evenNUm:', evenNum);
    }
}
console.log('Total evenSum:', evenSum);


//***********Task-04, countDown.js***********

            //Sub task 01
//Implement a countdown timer that counts down from 81 to 65.

for (let countdown = 81; countdown >= 65; countdown--){
    console.log('countdown:', countdown)
}


//***********Task-05, multiplication table.js***********

            //Sub task 01  
//Generate a multiplication table for number 9

const n =  9;

for (let i = 1; i <= 10; i++) {
    const product = n * i;

        // Use of ES5 (Old rules)>
//    console.log(n + " * " + i + " = " + product);

        // Use of ES6> 
   console.log(`${n} * ${i} = ${product}`);
}

