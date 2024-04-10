let size=5;

for(let i=0;i<=size;i++){
    let line='';
    for(let j=1;j<=size;j++){
        if(j===i||j===size-i+1){
            line+='*';
        }
        else{
            line+=' ';
        }
    }
    console.log(line);
}