export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  export function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return b !== 0 ? a / b : 'Error';
  }
  
  export default divide;
  