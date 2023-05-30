function knightTravails(startPosition, endPosition) {
    const board = new Map()
    let path = [startPosition]
    addNode(startPosition)
    buildPositions(board.get(startPosition))
    function addNode(cord) {
        board.set(cord, probePositions(cord))
    }

    function probePositions(intArray) {
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

    function buildResults() {
        let paths = []
        let moveCount = 0
        path.forEach(cord => {
            paths.push(`
${moveCount} => ${JSON.stringify(cord)}`)
moveCount++
        })
        let resultString = `
Path Found ${path.length - 1} Move(s)
${paths}`
        return console.log(resultString)
    }

    function checkEnd(cord) {
        const endCheckOne = cord[0] == endPosition[0]
        const endChecktwo = cord[1] == endPosition[1]
        return endCheckOne && endChecktwo ? true : false
    }

    function buildPositions(key) {
        key.forEach(nextCord => {
            addNode(nextCord)
        })
    }

    function convertMapToArray() {
        let queue = []
        for (const position of board) queue.push(position)
        return queue
    }
    
    probePositions(startPosition).forEach(cord => {
        if (checkEnd(cord) && !checkEnd(path[path.length - 1])) {
            return path.push(cord), buildResults()
        } else if (checkEnd(startPosition)) {
            return console.log(`YOU ARE ALREADY AT SPOT ${startPosition}`)
        }
    }) 
    if (path.length < 2) {
        let temp = []
    convertMapToArray(board.values()).forEach(positionArray => {
        positionArray[1].forEach(position => {
            if (checkEnd(position) && !checkEnd(path[path.length - 1])) {
                return path.push(positionArray[0], position), buildResults()
            }
            temp.push(position)
        })
    })

    const totalKnownLocations = [...new Set(temp)]
    // function for traversing the board again
    console.log(`${(totalKnownLocations.length/64)*100}% Chance of finding first`)
    }
}
knightTravails([8,4],[6,4])