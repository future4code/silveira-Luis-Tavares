// A
const printNumbersA = (n: number) => {
    if (n >= 0) {
      printNumbersA(n - 1);
      console.log(n);
    }
};

// B
const printNumbersB = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbersB(n - 1);
    }
};