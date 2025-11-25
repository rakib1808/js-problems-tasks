//**** While Loop task******//

///*******Task-01, commitment.js********** 

            // Subtask-1:
//"I will invest at least 6 hrs every single day for next 60 days!".
// this message 60 times. So display this.

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

