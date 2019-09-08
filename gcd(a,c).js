function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y !== 0) {
    var temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}
console.log(gcd(20,15))

//O(f(n)

