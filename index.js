function knightMoves(start, end) {
    const moves = [
      [1, 2], [2, 1], [2, -1], [1, -2],
      [-1, -2], [-2, -1], [-2, 1], [-1, 2]
    ]; 
    const visited = new Set();
    const queue = [[start, []]];
    while (queue.length > 0) {
      const [currentSquare, path] = queue.shift();
      if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) {
        path.push(currentSquare);
        return `You made it in ${path.length - 1} moves! Here's your path:\n${path.map(square => `  ${square}`).join('\n')}`;
      }
      
      visited.add(`${currentSquare[0]},${currentSquare[1]}`);
      for (const move of moves) {
        const nextSquare = [currentSquare[0] + move[0], currentSquare[1] + move[1]];
        if (isValidSquare(nextSquare) && !visited.has(`${nextSquare[0]},${nextSquare[1]}`)) {
          queue.push([nextSquare, [...path, currentSquare]]);
        }
      }
    }
    return
  }
  
  function isValidSquare(square) {
    const [row, col] = square;
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }
// GG 😭
console.log(knightMoves([0,0], [7,7]));