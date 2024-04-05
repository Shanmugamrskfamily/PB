let primeAr=[0,0];
let count=0;
for(let i=0;i<1000;i++){
    if(primeAr[i]==undefined){
        primeAr[i]=1;
        for(let j=i*i;j<1000;j+=i){
            primeAr[j]=0;
            count++;
        }
    }
}

let ar=[];
for(let i=2;i<1000;i++){
    if(primeAr[i]){
        ar.push(i);
    }
}

console.log(count);
console.log(ar)