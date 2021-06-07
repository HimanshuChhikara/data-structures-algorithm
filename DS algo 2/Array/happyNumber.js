var isHappy = function(n) {
    let fast = n,
        slow = n;
    while (true) {
        slow = getSquare(slow);
        fast = getSquare(getSquare(fast));
        if (fast === slow) {
            break;
        }
    }
    return slow === 1;
}

    function getSquare(n){
        let digit = parseInt(n % 10);
        let ques =  parseInt(n / 10);
        console.log("QUES =="+ques)
        console.log("Digit === "+digit)

        let square = 0

        square = parseInt(digit * digit) + ques * ques;

        return square;
    }

isHappy(19)