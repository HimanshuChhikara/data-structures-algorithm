function test() {

    try{
        console.log("This is TRY");
        return "Return from test"
    }
    catch{
        console.log("from catch")
    }
    finally{
        console.log("Finally");
        // return "Return from final"
    }
}

console.log(test());

// Indexing in mongoDB
// Which search algo is used in indexing
