let students = [
    {name:"Himanshu", rollNumber: 9, marks: 90},
    {name:"Rohan", rollNumber: 10, marks: 97},
    {name:"Mohan", rollNumber: 29, marks: 49},
    {name:"Ravi", rollNumber: 5, marks: 99}
]


let res = students.reduce((acc,i)=>{
    return acc + i.marks;
},0)

console.log(res);