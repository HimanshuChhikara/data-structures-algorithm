// var rand = Math.round(Math.random() * (3000 - 1000) + 1000)
function waitforme(rand) { 
    var rand = Math.round(Math.random() * (3000 - 1000) + 1000)
    console.log(rand);
	return new Promise(resolve => { 
		setTimeout(() => { resolve('') }, rand); 
	}) 
} 

async function printy() { 
	for (let i = 0; i < 10; ++i) { 
        console.log(rand);
		await waitforme(); 
		console.log(i); 
	} 
	console.log("Finiseed"); 
} 

printy();
