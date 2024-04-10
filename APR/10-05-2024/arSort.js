let ar=[5,6,1,3,2,4];

for(let i=0;i<ar.length;i++){
    for(let j=0;j<ar.length-1-i;j++){
        if(ar[j]>ar[j+1]){
            let temp=ar[j];
            ar[j]=ar[j+1];
            ar[j+1]=temp;
        }
    }
}

console.log(ar);