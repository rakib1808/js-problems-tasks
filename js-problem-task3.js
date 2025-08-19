// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


//function ব্যবহার করে

function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const total = (laptopQty * laptop) + (tabletQty * tablet)+ (mobileQty * mobile);
    return total; 
} 

console.log ("total money :", calculateElectronicsBudget(3, 1, 2));



//object ব্যবহার করে

const prices = { laptop : 350000, tablet : 150000, mobile : 200000};

function calculateElectronicsBudget1(laptopQty, tabletQty, mobileQty) {
    return (laptopQty * prices.laptop) + (tabletQty * prices.tablet) + (mobileQty * prices.mobile);
}

console.log ('total price:', calculateElectronicsBudget1(3, 1, 2));