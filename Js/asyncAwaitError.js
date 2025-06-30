async function fetchData() {
    try{
        const result = await fetch("https://api.github.com/users/SuryanshuTomar");
        result.json().then((data) => {
            throw new Error("Simulated error for testing");
            return data;
        })
    }
    catch(err) {
        console.log("Error occurred:", err);
        throw new Error("Failed to fetch data");

    }
}

async function main() {
    try {
        const data = await fetchData();
        console.log("DATA ...",data)
    }
    catch(err) {
        console.log("Error occurred:", err);
    }
}

main()