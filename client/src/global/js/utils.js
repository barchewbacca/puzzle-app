export function createPuzzleLayout(size) {
    const flatArray = getFlatArray(size);
    const bidimensionalArray = getBidimensionalArray(flatArray);
    const positionsArray = getPositionsArray(bidimensionalArray);

    const shuffledArray = getShuffledArray(positionsArray);

    return shuffledArray;
}

export function getFlatArray(size) {
    const flatArray = Array.from(Array(size).keys());

    flatArray.shift(0);
    flatArray.push(0);

    return flatArray;
}

export function getBidimensionalArray(array) {
    const bidimensionalArray = [];
    const row = Math.sqrt(array.length);

    for (let i = row; i <= array.length; i += row) {
        bidimensionalArray.push(array.slice((i - row), i));
    }

    return bidimensionalArray;
}

export function getPositionsArray(bidimensionalArray) {
    const positionsArray = [];

    bidimensionalArray.forEach((row, i) => {
        row.forEach((col, j) => {
            const position = {
                id: bidimensionalArray[i][j],
                y: i,
                x: j
            };

            positionsArray.push(position);
        });
    });

    return positionsArray;
}

function getShuffledArray(positionsArray) {
    for (let i = 0; i < 500; i++) {
        const emptyTilePosition = getTilePosition(positionsArray, 0);
        const activeTiles = getActiveTiles(positionsArray, emptyTilePosition);
        const randomActiveTile = activeTiles[Math.floor(Math.random() * activeTiles.length)];

        swapPosition(positionsArray, emptyTilePosition, randomActiveTile);
    }

    return positionsArray;
}

export function getTilePosition(array, tileId) {
    let tilePosition;

    array.forEach((position, i) => {
        if (position.id === tileId) {
            tilePosition = array[i];
        }
    });

    return tilePosition;
}

function getActiveTiles(array, emptyTilePosition) {
    const activeTilesArray = [];

    array.forEach((position) => {
        if (position.x === emptyTilePosition.x + 1 && position.y === emptyTilePosition.y) {
            activeTilesArray.push(position);
        } else if (position.x === emptyTilePosition.x - 1 && position.y === emptyTilePosition.y) {
            activeTilesArray.push(position);
        } else if (position.y === emptyTilePosition.y + 1 && position.x === emptyTilePosition.x) {
            activeTilesArray.push(position);
        } else if (position.y === emptyTilePosition.y - 1 && position.x === emptyTilePosition.x) {
            activeTilesArray.push(position);
        }
    });

    return activeTilesArray;
}

export function swapPosition(positionsArray, pos1, pos2) {
    let index1, index2;
    const emptyX = pos1.x;
    const emptyY = pos1.y;
    const tileX = pos2.x;
    const tileY = pos2.y;

    positionsArray.forEach((position, i) => {
        if (pos1.id === position.id) {
            index1 = i;
        } else if (pos2.id === position.id) {
            index2 = i;
        }
    });

    positionsArray[index1].x = tileX;
    positionsArray[index1].y = tileY;
    positionsArray[index2].x = emptyX;
    positionsArray[index2].y = emptyY;
}
