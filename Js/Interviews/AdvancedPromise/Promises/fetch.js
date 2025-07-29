// const data = new Promise((resolve,reject) => {
//     fetch("https://dummyjson.com/products?limit=5").then((res) => {
//         resolve(res.json());
//     })
// })

// data.then((data) => console.log(data))


async function fetchData() {
    const data = await fetch("https://dummyjson.com/products?limit=5");
    let res = await data.json()
    console.log(res)
    return res
}

fetchData()