//Task -2:
// Find the friend with the smallest name.
//  const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let nam = 0;
let smallest = heights2 [0];

while (nam < heights2.length) {
    if (heights2[nam].length < smallest.length) {
        smallest = heights2[nam];
    }
    nam++;
}

console.log ('smallest name is:', smallest);



// আরও সহজ উপায়ে (for…of দিয়ে)

let small = heights2[0];

for (let name of heights2) {
    if (name.length < small.length) {
        small = name
    }
}

console.log('small name is:', small);
