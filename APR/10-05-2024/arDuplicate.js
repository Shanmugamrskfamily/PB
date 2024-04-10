let ar=[1,2,3,4,5,6,7,8,9,3,4,5,6];

let unique=[];
let duplicate=[];
let temp={};

for(let i=0;i<ar.length;i++){
    if(temp.hasOwnProperty(ar[i])){
        duplicate.push(ar[i]);
    }
    else{
        temp[ar[i]]=true;
        unique.push(ar[i]);       
    }
}
console.log(unique);
console.log(duplicate);