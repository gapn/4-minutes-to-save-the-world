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


let playerGridRow, playerGridCol;
let playerCoordinateX, playerCoordinateY;
let targetX, targetY;
let startX, startY;
let isMoving = false;
let moveStartTime;
const playerMoveDuration = 150;

function playerStartingPosition(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 2) {
                playerGridRow = row;
                playerGridCol = col;
            };
        };
    };
};

function drawPlayer() {
    context.beginPath();
    context.fillStyle = "turquoise";
    context.arc(playerCoordinateX, playerCoordinateY, tileSize / 3, 0, Math.PI * 2);
    context.fill();
};

playerStartingPosition(levelOneMatrix);
playerCoordinateX = playerGridCol * tileSize + tileSize / 2;
playerCoordinateY = playerGridRow * tileSize + tileSize / 2;

drawLevel(levelOneMatrix);
drawPlayer();

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
    const move = keystrokeMapping[event.key];
    if (!move || isMoving) return; // ignoriraj, če ni smeri ali če je v gibanju

    const [rowChange, colChange] = move;
    const newRow = playerGridRow + rowChange;
    const newCol = playerGridCol + colChange;

    if (levelOneMatrix[newRow][newCol] !== 1) {
        moveTo(newRow, newCol);
    }
}


const keystrokeMapping = {
    ArrowUp: [-1, 0],
    ArrowDown: [1, 0],
    ArrowLeft: [0, -1],
    ArrowRight: [0, 1]
};


function moveTo(newRow, newCol) {
    targetX = newCol * tileSize + tileSize / 2;
    targetY = newRow * tileSize + tileSize / 2;

    startX = playerCoordinateX;
    startY = playerCoordinateY;

    moveStartTime = performance.now();
    isMoving = true;

    playerGridRow = newRow;
    playerGridCol = newCol;
};

function update(timestamp) {
    if (isMoving) {
        let elapsedTime = timestamp - moveStartTime;
        let progress = Math.min(elapsedTime / playerMoveDuration, 1);

        playerCoordinateX = startX + (targetX - startX) * progress;
        playerCoordinateY = startY + (targetY - startY) * progress;

        if (progress >= 1) {
            isMoving = false;
        };
    };
    renderGame();
    requestAnimationFrame(update);
};

requestAnimationFrame(update);

function renderGame() {
    drawLevel(levelOneMatrix);
    drawPlayer();
};