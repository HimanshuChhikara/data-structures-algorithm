let merge = (intervals) => {
    intervals = intervals.sort((a,b) => a[0]-b[0]);
    let data = []
    let j = 0;

    let first = intervals.shift();
    data.push(first);
    for(let i = 0;i<intervals.length;i++) {
        if(data[j][1] >= intervals[i][0]) {
            data[j] = [data[j][0] , Math.max(data[j][1], intervals[i][1])];
        }
        else {
            data.push([intervals[i][0],intervals[i][1]]);
            j++;
        }
    }
    return data;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

// next = [[1,3],]