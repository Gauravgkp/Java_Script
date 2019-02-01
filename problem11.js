var inputString = "webmaster";
console.log(inputString);
var input = inputString.split("");
var result="";
for(var i=0;i<input.length;i++){
    for(var j=i+1;j<input.length;j++){
        if(input[i]>input[j]){
            var temp=input[i];
            input[i]=input[j];
            input[j]=temp;
        }
    }
}
for(var i=0;i<input.length;i++){
    result=result+input[i];
}
console.log(result);