//sum from 1 to n;

function sum(x){
    let y=0;
for(i=0;i<=x;i++)
{
    y+=i;
}
return y;
}
console.log(sum(2));

// function printSumFrom1ToN(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     console.log(`The sum from 1 to ${n} is: ${sum}`);
//   }
  
//   // Example usage:
//   printSumFrom1ToN(5); // This will print "The sum from 1 to 5 is: 15"