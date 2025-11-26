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


