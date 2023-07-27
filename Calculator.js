function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error("Cannot divide by zero!");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator. Supported operators are +, -, *, and /.");
    }
  }
  

  const number1 = 10;
  const operator = '+';
  const number2 = 5;
  const result = calculator(number1, operator, number2);
  console.log(result); 
  