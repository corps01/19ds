function fibonacci(num){
    let a = 1, b = 1, temp;
    let fib = [];

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
      num--;
      fib.push(b)
  }
    console.log(fib);
}


fibonacci(7)
//O(f(n))
