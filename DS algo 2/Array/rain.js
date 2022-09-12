var trap = function(height) {
    let n = height.length;
    
    if(n<=2) return 0;
    
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    
    left[0] = height[0];
    right[n-1] = height[n-1];
    
    for(let i=0;i<n;i++){ 
        left[i] = Math.max(left[i-1],height[i]);
        right[n-i-1] = Math.max(right[n-i],height[n-i-1]);
    }

    console.log("Left ---"+left);
    console.log("Right ---"+ right)
    
    let water = 0;
    
    for(let i=0;i<n;i++){
        water += Math.min(left[i] - right[i]) - height[i]
    }
    
    return water
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));