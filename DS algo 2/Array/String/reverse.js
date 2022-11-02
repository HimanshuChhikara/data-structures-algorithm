function reverse(str) {
    let res = "";

    str = str.split("  ");

    for(let i=str.length-1;i>=0;i--) {
        res = res + str[i];
    }

    return res;

}

console.log(reverse("mukul is my name"));

// "eman ym si lukum" 

