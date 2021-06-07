function trappedWater(heights){

   if(heights == null || heights.length === 0) return 0;

   let res = 0;

   for(let i=0;i<heights.length;i++){
       let left = 0;
       let rigth = 0;

       for(let j=0;j<i;j++){
           left =Math.max(left,heights[j]);
       }

       for(let k = i+1;k<heights.length;k++){
           rigth = Math.max(rigth,heights[k]);
       }
       const water = Math.min(left,rigth) - heights[i];
       if(water > 0) res+= water;
   }
   return res
}

trappedWater([0,1,0,2,1,0,1,3,2,1,2,1])