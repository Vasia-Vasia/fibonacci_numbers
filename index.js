const fib = (n) => {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  
    let first = 0;
    let second = 1;
    let result = first + second;
    let i = 2;
  
    while (i <= n) {
      result = first + second;
      first = second;
      second = result;
      i = i + 1;
    }
  
    return result;
  };

export default fib;

// Проверка

const n = 6;
const result = fib(n);
console.log(result);
