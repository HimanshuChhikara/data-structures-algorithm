function maximumWealth(accounts){
   let res = []

   let wealth = 0

   for(let i=0;i<accounts.length;i++){
       for(let j=0;j<accounts[i].length;j++){
           wealth += accounts[i][j]
       }
       res.push(wealth)
       wealth = 0
   }

   return Math.max(...res)
}

console.log(maximumWealth([[1,2,3],[3,2,1]]))