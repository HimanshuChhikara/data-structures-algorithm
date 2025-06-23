function maxArea(height) {
    let res = 0;
    let left =0;
    let right = height.length -1

    while(left < right) {
        const area = Math.min(height[right],height[left]) * (right - left);
        res = Math.max(area,res)
        if(height[left] <= height[right]) {
            left++
        }
        else {
            right--
        }
    }
    return res
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))