function primeNumbers(n) {
    array = [];
    for (var i = 2; array.length < n; i++) {
	var divisorFound = false;
        for (var count = 2; count < i; count++) {
            var divisorFound = false;
            if (i % count === 0) {
                divisorFound = true;
                break;
            }
        }
        if (divisorFound == false) {array.push(i);}
    }
    return array;
}

console.log(primeNumbers(10))

//O(f(n^2))
