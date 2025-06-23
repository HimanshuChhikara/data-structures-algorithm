
// =====================================
// QUESTION 1: Nested Object to Dot Notation (Reverse of original)
// =====================================
// Convert a nested object back to dot notation format

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
  
  // Expected output:
  // {
  //   "user.name": "Himanshu",
  //   "user.address.city": "Noida",
  //   "user.address.state": "UP",
  //   "user.profile.age": 25,
  //   "company": "TechCorp"
  // }


// function nestedToDot(nestedObj) {
//     let res = {};

//     for(let [key,value] of Object.entries(nestedObj)) {
//         res[key] = res
//         if(typeof value === 'object') {
//             for(let [key,valu] of Object.values(value)) {
//                 // res = v;
//                 console.log(res)
//             }
//             // res[key][]
//             console.log(value);
//         }
//     }
//     return res;
// }

function convertNestedToDotNotation(obj, prefix = '') {
    const result = {};
    
    for (const [key, value] of Object.entries(obj)) {
      // Create the current key path
      const currentKey = prefix ? `${prefix}.${key}` : key;
      
      // Check if value is an object (but not null or array)
      if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        // Recursively flatten nested objects
        const nestedFlattened = convertNestedToDotNotation(value, currentKey);
        
        // Merge the nested results into our result
        Object.assign(result, nestedFlattened);
      } else {
        // Primitive value - add to result
        result[currentKey] = value;
      }
    }
    return result;
}
console.log(convertNestedToDotNotation(nestedObj))