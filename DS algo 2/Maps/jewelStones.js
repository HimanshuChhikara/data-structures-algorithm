function jewelStone(J,S){
    var obj = {};
		var count = 0;
		for (let i = 0; i < J.length; i++)
            obj[J[i]] = true;
            
            console.log(obj)

		for (let i = 0; i < S.length; i++) {
			if (obj[S[i]]) {
				count++;
			}
		}
    return count
}

var res =  jewelStone("aA","aAAbbbb");
console.log(res)