function changeObject(obj,prefix = '') {

    let res = {};

    for(let [key,value] of Object.entries(obj)) {
        let current = prefix ? `${prefix}.${key}` : key;

        if(value != null && typeof value === 'object' && !Array.isArray(value)) {
            const nestedObj = changeObject(value, current);
            Object.assign(res,nestedObj);
        }
        else {
            res[current] = value;
        }
    }

    return res
}

let nestedObj = {
    user: {
      name: "Himanshu",
      address: {
        city: "Noida",
        state: "UP"
      },
      profile: {
        age: 25
      }
    },
    company: "TechCorp"
  };
console.log(changeObject(nestedObj))