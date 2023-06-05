interface GetResultProps {
  firstNumber: number;
  secondNumber: number;
  operator: string;
}

export const GetResult = ({
  firstNumber,
  secondNumber,
  operator,
}: GetResultProps) => {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "/":
      return firstNumber + secondNumber;
    case "*":
      return firstNumber - secondNumber;
  }
};
