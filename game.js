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

const levelTwoMatrix = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,1,0,0,0,1,0,5,0,0,0,0,0,0,1],
    [1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1],
    [1,0,1,0,0,0,0,1,0,0,0,0,0,5,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,5,0,0,0,1,0,0,0,0,1,0,1],
    [1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,5,0,0,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1],
    [1,0,0,0,0,1,0,0,0,4,0,0,0,1,0,0,0,1,0,0,1],
    [1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1],
    [1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const levelThreeMatrix = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,5,1,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1],
    [1,0,0,5,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,5,1,0,0,0,0,0,0,0,1,4,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
    [1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,3,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const levelOneMessages = [
    "💡 Save energy – turn off lights and unplug devices when not in use.",
    "🚲 Choose walking, cycling, or public transport instead of driving.",
    "🥦 Eat more plant-based meals – less meat means fewer greenhouse gases.",
    "🔄 Recycle and reuse – every item saved reduces waste and pollution.",
    "🌳 Plant a tree or support reforestation – nature is our best ally."
];

const levelTwoMessages = [
    "🚿 Save water – take shorter showers and fix leaks promptly.",
    "💧 Turn off the tap while brushing teeth or washing dishes.",
    "🌱 Water plants early in the morning or late evening to reduce evaporation.",
    "🧺 Run washing machines and dishwashers only with full loads.",
    "🚰 Choose a reusable bottle – reduce bottled water waste."
];

const levelThreeMessages = [
    "⚖️ Share resources fairly – cooperation prevents conflict.",
    "🕊️ Promote peace – invest in dialogue instead of weapons.",
    "🌍 Protect local resources – sustainable use benefits everyone.",
    "🤝 Support communities – strong bonds reduce the risk of wars.",
    "📚 Educate and raise awareness – knowledge is the best defense."
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
let globalTime = 240;
let globalTimerInterval = null;
let globalTimerRunning = false;
let currentLevel = 0;

const levels = [
    { matrix: levelOneMatrix, messages: levelOneMessages },
    { matrix: levelTwoMatrix, messages: levelTwoMessages },
    { matrix: levelThreeMatrix, messages: levelThreeMessages }
];

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

playerStartingPosition(levels[currentLevel].matrix);
playerCoordinateX = playerGridCol * tileSize + tileSize / 2;
playerCoordinateY = playerGridRow * tileSize + tileSize / 2;

drawLevel(levels[currentLevel].matrix);
drawPlayer();
updateStatusBar();

document.addEventListener("keydown", handleKeyPress);

let levelLocked = false;

function handleKeyPress(event) {
    if (levelLocked) return;

    const move = keystrokeMapping[event.key];
    if (!move || isMoving) return;
    if (!globalTimerRunning) { startGlobalTimer(); }

    const [rowChange, colChange] = move;
    const newRow = playerGridRow + rowChange;
    const newCol = playerGridCol + colChange;

    if (levels[currentLevel].matrix[newRow][newCol] !== 1) {
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
    drawLevel(levels[currentLevel].matrix);
    drawPlayer();
};

function checkTileInteraction(row, col) {
    const tileValue = levels[currentLevel].matrix[row][col];
    switch(tileValue) {
        case 3:
            stopGlobalTimer();
            handleLevelFinish();
            isMoving = false;
            break;
        case 4:
            showOverlay("⏳ You gained extra 20 seconds!")
            globalTime += 20;
            checkpointsPerLevelReached += 1;
            levels[currentLevel].matrix[row][col] = 0;
            updateStatusBar();
            break;
        case 5:
            if (currentMessageIndex < levels[currentLevel].matrix.length) {
                let msg = levels[currentLevel].messages[currentMessageIndex];
                showOverlay(msg, { saveToLog: true });
                collectedMessages.push(msg);
                currentMessageIndex++;
            } else {
                showOverlay("📜 No more hidden messages in this level!")
            }
            messagesPerLevelFound += 1;
            levels[currentLevel].matrix[row][col] = 0;
            updateStatusBar();
            break;
    };
};

function updateStatusBar() {
    const statusBar = document.getElementById("status-bar");
    const timeText = formatTime(globalTime);
    statusBar.textContent = `STATUS Checkpoint ${checkpointsPerLevelReached}/1 Messages ${messagesPerLevelFound}/5   ⏱️ Time left: ${timeText}   Level ${currentLevel + 1}/3`;
    };

function showOverlay(text, options = {}) {
    const { saveToLog = false} = options;
    const messageBox = document.getElementById("message");
    messageBox.innerHTML = `<p>${text}</p><button id="close-btn">Close</button>`;
    messageBox.classList.remove("hidden");

    let overlayShownAt = Date.now();

    const closeMessageOverlay = () => {
        messageBox.classList.add("hidden");
        document.removeEventListener("keydown", handleKeyClose);
    };

    document.getElementById("close-btn").addEventListener("click", closeMessageOverlay);
    
    const handleKeyClose = () => {
        if (!messageBox.classList.contains("hidden")) {
            const elapsed = Date.now() - overlayShownAt;
            if (elapsed >= 1000) {
                closeMessageOverlay();
            };
        };
    };

    document.addEventListener("keydown", handleKeyClose);
    
    setTimeout(closeMessageOverlay, 5000);
    if (saveToLog) {
        collectedMessages.push(text);
        const list = document.getElementById("message-list");
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
    };
};

let currentMessageIndex = 0;

function handleLevelFinish() {
    levelLocked = true;
    let countdown = 10;
    const messageBox = document.getElementById("message");

    const updateCountdown = () => {
        messageBox.innerHTML = `
            <p>🎉 Congrats, you escaped the heatwave!</p>
            <p>But the fight for your life on this planet isn’t over... prepare for the next challenge!</p>
            <p>⏳ Next level starts in <strong>${countdown}</strong> seconds...</p>
        `;
    };

    updateCountdown();
    messageBox.classList.remove("hidden");

    const interval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            updateCountdown();
        } else {
            clearInterval(interval);
            messageBox.classList.add("hidden");
            loadNextLevel();
        };
    }, 1000);
};

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
};

function startGlobalTimer() {
    if (globalTimerRunning) return;
    globalTimerRunning = true;

    globalTimerInterval = setInterval(() => {
        globalTime--;

        updateStatusBar();

        if (globalTime <= 0) {
            clearInterval(globalTimerInterval);
            globalTimerRunning = false;
            showOverlay("💀 Time’s up! The world overheated...");
        };
        }, 1000);
};

function stopGlobalTimer() {
    clearInterval(globalTimerInterval);
    globalTimerRunning = false;
};

function loadLevel(index) {
    currentLevel = index;
    checkpointsPerLevelReached = 0;
    messagesPerLevelFound = 0;
    currentMessageIndex = 0;
    levelLocked = false;

    const level = levels[currentLevel];
    drawLevel(level.matrix);
    playerStartingPosition(level.matrix);
    playerCoordinateX = playerGridCol * tileSize + tileSize / 2;
    playerCoordinateY = playerGridRow * tileSize + tileSize / 2;

    updateStatusBar();
};

function loadNextLevel() {
    if (currentLevel < levels.length - 1) {
        loadLevel(currentLevel + 1);
        startGlobalTimer();
    } else {
        handleGameFinish();
    };
};

function handleGameFinish() {
    levelLocked = true;
    stopGlobalTimer();

    const messageBox = document.getElementById("message");
    messageBox.innerHTML = `
        <p>🌍 You made it! The world has a chance thanks to you!</p>
        <p>Here are the messages you collected:</p>
        <ul>${collectedMessages.map(m => `<li>${m}</li>`).join("")}</ul>
        <button id="restart-btn">Play Again</button>
    `;
    messageBox.classList.remove("hidden");

    document.getElementById("restart-btn").addEventListener("click", () => {
        globalTime = 240;
        collectedMessages = [];
        currentLevel = 0;
        loadLevel(0);
        startGlobalTimer();
        messageBox.classList.add("hidden");
    });
};
