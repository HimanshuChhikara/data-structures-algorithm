function changeObject(obj) {

    let res = {};

    for(const [key,value] of Object.entries(obj)) {
        const keys = key.split('.');
        let current = res;
        for(let i=0;i<keys.length-1;i++) {
            const k = keys[i];
            if(!current[k] || typeof current[k] !== 'object') {
                current[k] = {}
            }
            current = current[k]
        }
        const lastKey = keys[keys.length - 1];
        current[lastKey] = value;
    }

    return res
}

let input = {
    "user.name": "Himanshu",
    "user.address.city": "Noida"
  }
console.log(changeObject(input))