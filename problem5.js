var arry = [5,2,6,6,7,3,7,9,9];
var newArry = [];
newArry.push(arry[0]);
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
console.log(newArry);