const arrayOfNumber = [0, -5, 4, 3, -2, 8, 10];

const negativeSquaresFirst = (array) => {
  const negativeSquares = array.filter((number) => number < 0).map((number) => number * number);
  const positiveNumbers = array.filter((number) => number >= 0);
  const resultArray = negativeSquares.concat(positiveNumbers);
  console.log(resultArray);
  return resultArray;
}
negativeSquaresFirst(arrayOfNumber)
