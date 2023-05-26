function possibleSquares(intArray) {
    let resultsArray = []
    const calculationArray = [
    [intArray[0] + 1, intArray[1] + 2],
    [intArray[0] - 1, intArray[1] + 2],
    [intArray[0] + 1, intArray[1] - 2],
    [intArray[0] - 1, intArray[1] - 2],
    [intArray[0] - 2, intArray[1] + 1],
    [intArray[0] - 2, intArray[1] - 1],
    [intArray[0] + 2, intArray[1] + 1],
    [intArray[0] + 2, intArray[1] - 1]]
    const tempStorage = [...new Set(calculationArray)]
    checkAvailablePositions()
    function checkAvailablePositions() {
        tempStorage.forEach(positionData => {
            const checkOne = positionData[0] < 9 && positionData[0] > 0
            const checkTwo = positionData[1] < 9 && positionData[1] > 0
            if (checkOne && checkTwo) {
                resultsArray.push(positionData)
            }
        });
    }
    return resultsArray
}

function knightTravails(startPosition, endPosition) {
    const startPosMoves = possibleSquares(startPosition)
    const endPosMoves = possibleSquares(endPosition)
    let pathTaken = ''
    let moveDict = {}
    endPosMoves.forEach(move => {
        moveDict[move] = true
    })
    startPosMoves.forEach(move => {
        if (move[0] == endPosition[0] && move[1] == endPosition[1]) {
            pathTaken = `
ONE WAY TICKET!
START > [${startPosition}]
END > [${endPosition}]
            `
        } else if (moveDict[move]) {
            pathTaken = `
You Made it in 1 Move!
Here's your path:
START > [${startPosition}]
> [${move}]
END > [${endPosition}]
            `
        }
        })
    return pathTaken
}
console.log(knightTravails([2,7],[3,5]))