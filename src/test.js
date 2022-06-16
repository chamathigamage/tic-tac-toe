function determineWinner(array) {return array[0]};


let blankBoard = Array(9).fill(null);
let result = determineWinner(blankBoard);
console.assert(result === null, "the function did not return null", result)


let xWinnerBoard = ["x", "x", "x", null, null, null, null, null, null]
result = determineWinner(xWinnerBoard);
console.assert(determineWinner(xWinnerBoard) === "x", "x is not the first row", result)


let xWinnerBoardAgain =
        [null, "x", null,
        null, "x", null,
        null, "x", null]
result = determineWinner(xWinnerBoardAgain);
console.assert(determineWinner(xWinnerBoardAgain) === "x", "x is not in the second column", result)
