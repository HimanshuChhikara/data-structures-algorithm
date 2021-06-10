function jewelStone(jewels,stones){
    let jewelMap = new Map();
    let stoneMap = new Map();

    for(let i=0;i<jewels.length;i++){
        jewelMap.set(jewels[i],(jewelMap.get(jewels[i]) || 0) + 1);
    }

    for(let j=0;j<stones.length;j++){
        stoneMap.set(stones[j],(stoneMap.get(stones[j]) || 0)+ 1);
    }

    console.log(jewelMap);
    console.log(stoneMap);

   
}

var res = jewelStone("aA","aAAbbbb");
console.log(res);