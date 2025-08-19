// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights2 = [167, 190, 120, 165, 137];


const lowest = Math.min(...heights2);
console.log ("lowest number is:", lowest);

//another option লুপ দিয়ে

let i = 0;
let lowest1 = heights2[0];

while (i < heights2.length) {
    if (heights2[i] <lowest1) {
        lowest1 = heights2[i];
    }
    i++;
}
console.log("lowest number:", lowest1);