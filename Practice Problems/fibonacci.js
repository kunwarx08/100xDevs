// function fib(input){
//     let a=0,b=1,temp,i;
    
//     console.log(a);
//     console.log(b);
//     for(i=2;i <= input ; i++){
//         temp = a + b;
//         a = b; 
//         b = temp; 
//         return b;
//     }
// }

// console.log(fib(5));

// program to generate fibonacci series up to n terms

// take input from the user

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
 
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));