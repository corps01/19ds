let lcm = (n1, n2) => {    
  let i = n2;
  while(i % n1 !== 0){
    i += n2;
  }
  return i;
}

console.log(lcm(7,21));

//O(f(n)
