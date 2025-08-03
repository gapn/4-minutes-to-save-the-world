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

const canvas = document.getElementById("game-canvas");
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
        case 0: return "white"; //path
        case 1: return "black"; //wall
        case 2: return "green"; //start
        case 3: return "red"; //finish
        case 4: return "blue"; //checkpoint
        case 5: return "yellow"; //message
        default: return "magenta"; //fallback/debug
    };
};


let playerGridRow, playerGridCol;
let playerCoordinateX, playerCoordinateY;
let targetX, targetY;
let startX, startY;
let isMoving = false;
let moveStartTime;
const playerMoveDuration = 150;
let checkpointsPerLevelReached = 0;
let messagesPerLevelFound = 0;
let collectedMessages = [];

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
            checkTileInteraction(playerGridRow, playerGridCol);
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

function checkTileInteraction(row, col) {
    const tileValue = levelOneMatrix[row][col];
    switch(tileValue) {
        case 3:
            showme("Level complete!");
            isMoving = false;
            break;
        case 4:
            alert("Checkpoint reached!");
            checkpointsPerLevelReached += 1;
            levelOneMatrix[row][col] = 0;
            updateStatusBar();
            break;
        case 5:
            if (currentMessageIndex < levelOneMatrix.length) {
                let msg = levelOneMessages[currentMessageIndex];
                showMessagesOverlay(msg);
                collectedMessages.push(msg);
                currentMessageIndex++;
            } else {
                showMessagesOverlay("📜 No more hidden messages in this level!")
            }
            messagesPerLevelFound += 1;
            levelOneMatrix[row][col] = 0;
            updateStatusBar();
            break;
    };
};

function updateStatusBar() {
  const statusBar = document.getElementById("status-bar");
  statusBar.textContent = `STATUS Checkpoint ${checkpointsPerLevelReached}/1 Messages ${messagesPerLevelFound}/5`;
};

function showMessagesOverlay(text) {
    const messageBox = document.getElementById("message");
    messageBox.innerHTML = `<p>${text}</p><button id="close-btn">Close</button>`;
    messageBox.classList.remove("hidden");

    const closeMessageOverlay = () => {
        messageBox.classList.add("hidden");
        document.removeEventListener("keydown", handleKeyClose);
    };

    document.getElementById("close-btn").addEventListener("click", closeMessageOverlay);
    
    const handleKeyClose = () => {
        if (!messageBox.classList.contains("hidden")) {
            closeMessageOverlay();
        }
    };

    document.addEventListener("keydown", handleKeyClose);
    
    setTimeout(closeMessageOverlay, 5000);
    
    collectedMessages.push(text);
    const list = document.getElementById("message-list");
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
};

const levelOneMessages = [
    "💡 Save energy – turn off lights and unplug devices when not in use.",
    "🚲 Choose walking, cycling, or public transport instead of driving.",
    "🥦 Eat more plant-based meals – less meat means fewer greenhouse gases.",
    "🔄 Recycle and reuse – every item saved reduces waste and pollution.",
    "🌳 Plant a tree or support reforestation – nature is our best ally."
]

let currentMessageIndex = 0;