const user = {
    name : "Himanshu",
    age : 25,
    hobbies : ["reading", "coding", "gaming"],
    address: {
        city: "Noida",
        state: "UP"
    },
}


function updateUser(user,prefix = '') {
    let res = {};

    for(let [key,value] of Object.entries(user)) {
        let currentKey = prefix ? prefix + '.' + key : key;
        if(value != null && typeof value === 'object' && !Array.isArray(value)) {
            const nestedObj = updateUser(value, currentKey);
            res = {...res,...nestedObj};
        }
        else {
            res[currentKey] = value;
        }
    }
    return res;
}

console.log(updateUser(user));