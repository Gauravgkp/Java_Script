var student =[{
    studentName: "David",
    studentMark: 80},
    {
    studentName: "Vinoth",
    studentMark: 77},    
    {
    studentName: "Divya",
    studentMark: 88},
    {
    studentName:"Ishitha",
    studentMark: 95},
    {
    studentName:"Thomas",
    studentMark:68}
];

function calculateAvg(student){
    var sum=0;
    for(var i=0;i<student.length;i++){
        sum=sum+student[i].marks;
    }
    return sum/student.length;
}

function grade(marks){
    if(marks<60)
    return 'F';
    else if(marks<70)
    return 'D';
    else if(marks<80)
    return 'C';
    else if(marks<90)
    return 'B';
    else 
    return 'A';
}

for(var i=0;i<student.length;i++){
    console.log(student[i].studentName+"   "+grade(student[i].studentMark));
}



            
        
        
        
        
