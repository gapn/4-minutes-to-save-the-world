// Game skeleton
console.log("Game project initialized.");

const levelOneMatrix = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,5,1,1],
    [1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1],
    [1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,0,0,0,0,0,5,0,1,0,0,0,1,0,1,0,4,1],
    [1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1],
    [1,5,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1],
    [1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,5,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
    [1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1],
    [1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1],
    [1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");
const tileSize = 30;

function drawLevel(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            drawTile(matrix[row][col], row, col);
        };
    };
};

function drawTile(value, row, col) {
    const color = getTileColor(value);
    context.fillStyle = color;
    context.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
};

function getTileColor(value) {
    switch(value) {
        case 0: return "white";
        case 1: return "black";
        case 2: return "green";
        case 3: return "red";
        case 4: return "blue";
        case 5: return "yellow";
        default: return "magenta";
    };
};

drawLevel(levelOneMatrix);