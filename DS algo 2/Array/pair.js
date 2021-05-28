function pair(input , nums){

    var map = new Map();

    for(const i in nums){
        if(map.has(nums,input[i])) return [map.get(nums - input[i]),i];

        map.set(input[i],i)
    }

    throw "Not Found"
}

var res = pair([ 2, 7, 11, 15 ],9)
console.log(res)