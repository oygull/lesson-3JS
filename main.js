
// Q1

// let k = +prompt("k: ");
// let n = +prompt("n: ");
// for(let i=0; i<n; i++){
//   console.log(k);
// };


// Q2

// let a = 3;
// let b = 10;
// for (let i=a; i<=b; i++){
//   console.log(i);
// }
// let d = (b+1)-a
// console.log("N Times: " + d);


// Q3

// let a = 3;
// let b = 10;
// for (let i=(b-1); i>a; i--){
//   console.log(i);
// }
// let d = (b-1)-a
// console.log("N Times: " + d);


// Q4

// let price = +prompt("Enter price of 1 kg :($) ");
// let kgSatrt = 1;
// let kgEnd = 10;
// let sum = 0;
// for(let i=kgSatrt; i<=kgEnd; i++ ){
//   sum =  i*price;
//   console.log(`Price of ${i.toFixed(1)} kg of sweats is $ ${sum}`);
// }


// Q5

// let price = +prompt("Enter price of 1 kg :($) ");
// let kgSatrt = 0.0;
// let kgEnd = 1.0;
// let sum = 0;
// for(let i=kgSatrt; i<kgEnd; i+=0.1 ){
//   sum =  i*price;
//   sum = sum.toFixed(2);
//   console.log(`Price of ${i.toFixed(1)} gramm of sweats is $ ${sum}`);
// }


// Q6

// let price = +prompt("Enter price of 1 kg :($) ");
// let kgSatrt = 1.0;
// let kgEnd = 2.0;
// let sum = 0;
// for(let i=kgSatrt; i<kgEnd; i+=0.2 ){
//   sum =  i*price;
//   sum = sum.toFixed(2);
//   console.log(`Price of ${i.toFixed(1)} kg of sweats is $ ${sum}`);
// }


// Q7

// let a = +prompt("a: ");
// let b = +prompt("b: ");
// let sum = 0;
// for (let i = a; i <=b; i++) {
//     sum += i;
// }
// console.log(`The sum of natural numbers between ${a} and ${b} is equal to ${sum}`);


// Q8

// let a = +prompt("a: ");
// let b = +prompt("b: ");
// let multiplication  = 1;
// for (let i = a; i <=b; i++) {
//   multiplication *= i;
// }
// console.log(`The multiplication of natural numbers between ${a} and ${b} is equal to ${multiplication}`);


// Q9

// let a = +prompt("a: ");
// let b = +prompt("b: ");
// let sumOfSquares  = 0;
// for (let i = a; i <=b; i++) {
//   let square = i**2;
//   sumOfSquares+=square;
// }
// console.log(`The sumOfSquares of natural numbers between ${a} and ${b} is equal to ${sumOfSquares}`);


// Q10

// let n = +prompt("n: ");
// let sum = 0;
// for (let i=1; i<=n; i++){
//   let num = 1/i;
//   sum += num;
// }
// console.log(`Your sum is equal to ${sum}`);


// Q11

// let n = +prompt("n: ");
// let sumOfSquares = 0;
// for (let i=1; i<=n; i++){
//   let num = (1/i)**2;
//   sumOfSquares += num;
// }
// console.log(`Your sumOfSquares is equal to ${sumOfSquares}`);


// Q12

// let n = +prompt("n: ");
// let multiplication = 1;
// for (let i=1; i<n; i+=0.1){
//   let num = i.toFixed(1)
//   multiplication *= num;
// }
// console.log(`The multiplication of natural numbers  ${n} is equal to ${multiplication.toFixed(2)}`);


// Q13

// let n = +prompt("n: ");
// let substraction = 1.1;
// for (let i=1; i<n; i+=0.1){
//    substraction =- i;
// }
// console.log(`The substraction of natural numbers  ${n} is equal to ${substraction.toFixed(2)}`);


// Q14

// let n= +prompt("n: ");
// let sum=0
// for (let i=1; i<=n; i++){
//    let square=2*i-1;
//    console.log(square);
//    sum+=square;
// }
// console.log(`Sum of numbers is equal to ${sum}`);


// Q15

// let a = +prompt("a: ");
// let n = +prompt("n: ");
// let answer = 0;
// for(let i=1; i<=n; i++){
//   let num = a**i;
//   answer =+ num;
// }
// console.log(`The ${n}th square of ${a} is equal to ${answer}`);


// Q16

// let a = +prompt("a: ");
// let n = +prompt("n: ");
// let answer = 0;
// for(let i=1; i<=n; i++){
//   let num = a**i;
//   console.log(num);
// }