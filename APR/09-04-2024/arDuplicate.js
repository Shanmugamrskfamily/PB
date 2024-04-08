let ar=[1,2,3,4,5,6,7,8,9,3,5,6,7];

let unique=[];
let removed=[];
let numbers={};

for(let i=0;i<ar.length;i++){
    if(!numbers.hasOwnProperty(ar[i])){
        numbers[ar[i]]=true;
        unique.push(ar[i]);
    }
    else
    {
        removed.push(ar[i]);
    }
}

console.log(unique);
console.log(removed);