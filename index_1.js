const fib = (n) => {
  let result = null;

  if (n === 0) {
    result = 0;
  } else if (n === 1) {
    result = 1;
  } else if (n >= 2) {
    result = fib(n - 1) + fib(n - 2);
  }
  return result;
};

export default fib;

// Проверка
  
const n = 4;
const result = fib(n);

console.log(result);
