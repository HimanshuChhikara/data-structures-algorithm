const demo = new Set()

const arra = [1,2,3,4,1,1]

for(let i of arra){
    demo.add(i)
}

console.log(demo);
console.log(demo.has(4))

console.log([...new Set(arra)])