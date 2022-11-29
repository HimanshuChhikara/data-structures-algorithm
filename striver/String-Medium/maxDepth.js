// Return maximum depth that is present in between one ( and one )

// in this the depth is 3 becuase 8 is present in between 3 ()

function maxDepth(s) {
    let count = 0;
    let maxCount = 0;

    for(let i=0;i<s.length;i++) {
        if(s[i] === "(") {
            count = count + 1;

            maxCount = Math.max(count,maxCount);
        }
        else if(s[i] === ")"){
            count--;
        }
    }

    return maxCount;

}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))