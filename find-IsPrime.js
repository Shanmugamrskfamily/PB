function isPrime(num){
    let count=0;
    for(let fact=2;fact*fact<=num;fact++){
        count++;
        if(num%2==0){
            return [count,false];
        }
    }
    return [count,true];
}

console.log(isPrime(101));