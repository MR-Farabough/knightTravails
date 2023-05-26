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

class MoveList {
    constructor(node) {
        this.root = node
    }
}

class Node {
    constructor(position, possiblePositions) {
        this.position = position
        this.possiblePositions = possiblePositions
    }
}

function knightTravails(startPosition, endPosition) {
    const moveDict = new MoveList(endPosition)
    return moveDict
}
console.log(knightTravails([2,7],[2,6]))