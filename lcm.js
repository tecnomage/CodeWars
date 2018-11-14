let gcd = (a, b) => a ? gcd(b % a, a) : b;

let lcm = (a, b) => a * b / gcd(a, b);


console.log([2, 3, 4].reduce(lcm));