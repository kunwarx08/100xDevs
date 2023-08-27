function fib(input){
    let a=0,b=1,temp,i;
    
    console.log(a);
    console.log(b);
    for(i=2;i <= input ; i++){
        temp = a + b;
        a = b; 
        b = temp; 
        return b;
    }
}

console.log(fib(5));