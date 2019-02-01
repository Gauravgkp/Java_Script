var arry = [5,2,16,6,7,3,17,9,9];
var arry2 = [3,4,10,12,5,6,3,7,34];
var newArry =[];
for(var i=0; i<arry.length; i++)
{
    var count=0;
    for(var j=0; j<newArry.length; j++)
    {
        if(arry[i]==newArry[j]){
            count++;
        }
    }
    if (count == 0){
        newArry.push(arry[i]);
    }
}
for(var a=0; a<arry2.length; a++){
    var cont=0;
    for(var k=0; k<newArry.length; k++)
    {
        if(arry2[a]==newArry[k]){
            cont++;
        }
    } 
    if (cont == 0){
        newArry.push(arry2[a]);
    } 
}
console.log(newArry);