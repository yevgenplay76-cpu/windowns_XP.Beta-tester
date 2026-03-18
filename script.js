let windows = [];
let zIndex = 100;
let startMenuVisible = false;

// Check for update and account
if (localStorage.getItem('windowsUpdated')) {
    if (!localStorage.getItem('userAccount')) {
        createAccount();
    } else {
        applyUpdateChanges();
    }
}

function createAccount() {
    alert('Welcome to Windows XP! Please create your account.');
    const username = prompt('Enter your username:');
    if (!username) return;
    const password = prompt('Enter your password:');
    if (!password) return;
    localStorage.setItem('userAccount', JSON.stringify({username, password}));
    alert(`Welcome, ${username}! Your account has been created.`);
    applyUpdateChanges();
}

function applyUpdateChanges() {
    const updateLevel = localStorage.getItem('windowsUpdated');
    
    // Add more programs to start menu
    const startMenu = document.querySelector('#start-menu ul');
    startMenu.innerHTML += `
        <li onclick="openWindow('calculator')">Calculator</li>
        <li onclick="openWindow('notepad')">Notepad</li>
        <li onclick="openWindow('paint')">Paint</li>
        <li onclick="openWindow('wordpad')">WordPad</li>
        <li onclick="openWindow('solitaire')">Solitaire</li>
        <li onclick="openWindow('minesweeper')">Minesweeper</li>
        <li onclick="openWindow('pinball')">Pinball</li>
    `;
    
    // Add more desktop icons
    const desktopIcons = document.getElementById('desktop-icons');
    desktopIcons.innerHTML += `
        <div class="icon" onclick="openWindow('calculator')">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmZmZmZmYiLz4KPHRleHQgeD0iMTYiIHk9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDAwMDAwIiBmb250LXNpemU9IjEwIj5DQUwvdGV4dD4KPHRleHQgeD0iMTYiIHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LXNpemU9IjEwIj5DQUwvdGV4dD4KPC9zdmc+" alt="Calculator">
            <span>Calculator</span>
        </div>
        <div class="icon" onclick="openWindow('notepad')">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmZmZmZmYiLz4KPHRleHQgeD0iMTYiIHk9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDAwMDAwIiBmb250LXNpemU9IjEwIj5OT1Q8L3RleHQ+Cjx0ZXh0IHg9IjE2IiB5PSIzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmYiIgZm9udC1zaXplPSIxMCI+Tk9UPC90ZXh0Pgo8L3N2Zz4=" alt="Notepad">
            <span>Notepad</span>
        </div>
    `;
    
    // Change clock to show date too
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', { hour12: true });
        document.getElementById('time').textContent = timeString;
    }
    
    updateTime();
    setInterval(updateTime, 1000);
    
    if (updateLevel === 'vista') {
        // Additional Vista features
        document.body.style.backgroundColor = '#e6f3ff'; // Lighter blue
        alert('Welcome to Windows Vista! Enjoy the new look and features.');
    }
}

function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    startMenuVisible = !startMenuVisible;
    startMenu.classList.toggle('hidden', !startMenuVisible);
}

function openWindow(type) {
    toggleStartMenu();
    const windowId = `window-${Date.now()}`;
    let title = '';
    let content = '';

    switch (type) {
        case 'my-computer':
            title = 'My Computer';
            content = `
                <div style="display: flex; flex-wrap: wrap;">
                    <div class="icon" style="margin: 10px;">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmZmZmZmYiLz4KPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjgiIGZpbGw9IiMwMDAwMDAiLz4KPHRleHQgeD0iMTYiIHk9IjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LXNpemU9IjEwIj5EPC90ZXh0Pgo8L3N2Zz4=" alt="Drive">
                        <span>Local Disk (C:)</span>
                    </div>
                </div>
            `;
            break;
        case 'my-documents':
            title = 'My Documents';
            content = `
                <div id="file-toolbar">
                    <button onclick="createFolder()">New Folder</button>
                    <button onclick="createTextDocument()">New Text Document</button>
                    <button onclick="createDrawing()">New Drawing</button>
                </div>
                <div id="file-list">
                    <div class="file-item" onclick="openFile('folder', 'My Pictures')">📁 My Pictures</div>
                    <div class="file-item" onclick="openFile('folder', 'My Music')">📁 My Music</div>
                </div>
            `;
            break;
        case 'internet-explorer':
            title = 'Internet Explorer';
            content = `
                <div id="ie-toolbar">
                    <button onclick="ieBack()">Back</button>
                    <button onclick="ieForward()">Forward</button>
                    <input type="text" id="ie-url" value="http://www.example.com">
                    <button onclick="ieGo()">Go</button>
                </div>
                <div id="ie-content">
                    <h1>Welcome to Internet Explorer</h1>
                    <p>This is a simulated Internet Explorer window.</p>
                    <p>You can enter a URL above and click Go to "navigate".</p>
                </div>
            `;
            break;
        case 'dinosaur-game':
            title = 'Dinosaur Game';
            content = `
                <div id="dino-game">
                    <div id="dino"></div>
                    <div id="score">Score: 0</div>
                </div>
                <p>Press SPACE to jump! DOWN ARROW to duck!</p>
            `;
            break;
        case 'app-store':
            title = 'App Store';
            content = `
                <div id="store-tabs">
                    <button onclick="showTab('games')">Games</button>
                    <button onclick="showTab('programs')">Programs</button>
                    <button onclick="showTab('library')">Library</button>
                </div>
                <div id="store-content">
                    <div id="games-tab" class="tab-content">
                        <h3>Games</h3>
                        <div class="app" onclick="downloadApp('Solitaire')">Solitaire - $9.99 <button onclick="downloadApp('Solitaire')">Download</button></div>
                        <div class="app" onclick="downloadApp('Minesweeper')">Minesweeper - $4.99 <button onclick="downloadApp('Minesweeper')">Download</button></div>
                        <div class="app" onclick="downloadApp('Pinball')">Pinball - $14.99 <button onclick="downloadApp('Pinball')">Download</button></div>
                    </div>
                    <div id="programs-tab" class="tab-content hidden">
                        <h3>Programs</h3>
                        <div class="app" onclick="downloadApp('Calculator')">Calculator - Free <button onclick="downloadApp('Calculator')">Download</button></div>
                        <div class="app" onclick="downloadApp('Notepad')">Notepad - Free <button onclick="downloadApp('Notepad')">Download</button></div>
                        <div class="app" onclick="downloadApp('Paint')">Paint - Free <button onclick="downloadApp('Paint')">Download</button></div>
                        <div class="app" onclick="downloadApp('WordPad')">WordPad - $19.99 <button onclick="downloadApp('WordPad')">Download</button></div>
                        <div class="app" onclick="downloadApp('Windows XP SP2')">Windows XP Service Pack 2 - Free <button onclick="downloadApp('Windows XP SP2')">Download</button></div>
                        <div class="app" onclick="downloadApp('Windows Vista')">Windows Vista Upgrade - $99.99 <button onclick="downloadApp('Windows Vista')">Download</button></div>
                    </div>
                    <div id="library-tab" class="tab-content hidden">
                        <h3>Library</h3>
                        <p>Your downloaded apps will appear here.</p>
                        <div id="library-apps"></div>
                    </div>
                </div>
            `;
            break;
        case 'calculator':
            title = 'Calculator';
            content = `<iframe src="https://www.calculator.net/" width="100%" height="400px"></iframe>`;
            break;
        case 'notepad':
            title = 'Notepad';
            content = `<textarea style="width: 100%; height: 300px;"></textarea>`;
            break;
        case 'paint':
            title = 'Paint';
            content = `<canvas id="paint-canvas" width="400" height="300" style="border: 1px solid #000;"></canvas><br><button onclick="clearCanvas()">Clear</button>`;
            break;
        case 'wordpad':
            title = 'WordPad';
            content = `<div contenteditable="true" style="width: 100%; height: 300px; border: 1px solid #000; padding: 8px;"></div>`;
            break;
        case 'solitaire':
            title = 'Solitaire';
            content = `<iframe src="https://www.solitr.com/" width="100%" height="400px"></iframe>`;
            break;
        case 'minesweeper':
            title = 'Minesweeper';
            content = `<iframe src="https://minesweeper.online/" width="100%" height="400px"></iframe>`;
            break;
        case 'pinball':
            title = 'Pinball';
            content = `<iframe src="https://www.pinball.com/" width="100%" height="400px"></iframe>`;
            break;
    }

    const windowHTML = `
        <div id="${windowId}" class="window" style="top: 50px; left: 100px; width: 400px; height: 300px;">
            <div class="window-header" onmousedown="startDrag(event, '${windowId}')">
                <span>${title}</span>
                <div class="window-controls">
                    <div class="window-control" onclick="minimizeWindow('${windowId}')">_</div>
                    <div class="window-control" onclick="maximizeWindow('${windowId}')">□</div>
                    <div class="window-control" onclick="closeWindow('${windowId}')">×</div>
                </div>
            </div>
            <div class="window-content">
                ${content}
            </div>
        </div>
    `;

    document.getElementById('windows').insertAdjacentHTML('beforeend', windowHTML);
    windows.push(windowId);

    if (type === 'paint') {
        setTimeout(() => initPaint(windowId), 100);
    }
}

function closeWindow(id) {
    document.getElementById(id).remove();
    windows = windows.filter(w => w !== id);
}

function minimizeWindow(id) {
    // For simplicity, just hide the window
    document.getElementById(id).style.display = 'none';
}

function maximizeWindow(id) {
    const win = document.getElementById(id);
    if (win.style.width === '100vw') {
        win.style.width = '400px';
        win.style.height = '300px';
        win.style.top = '50px';
        win.style.left = '100px';
    } else {
        win.style.width = '100vw';
        win.style.height = 'calc(100vh - 30px)';
        win.style.top = '0';
        win.style.left = '0';
    }
}

let dragElement = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

function startDrag(e, id) {
    dragElement = document.getElementById(id);
    dragOffsetX = e.clientX - dragElement.offsetLeft;
    dragOffsetY = e.clientY - dragElement.offsetTop;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
    if (dragElement) {
        dragElement.style.left = (e.clientX - dragOffsetX) + 'px';
        dragElement.style.top = (e.clientY - dragOffsetY) + 'px';
    }
}

function stopDrag() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    dragElement = null;
}

function shutdown() {
    if (confirm('Are you sure you want to shut down?')) {
        // Simulate reboot by reloading the page
        location.reload();
    }
}

// Update time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: true });
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

// Dinosaur Game
let dinoGame = null;

function initDinoGame(windowId) {
    const gameContainer = document.querySelector(`#${windowId} #dino-game`);
    const dino = document.querySelector(`#${windowId} #dino`);
    const scoreElement = document.querySelector(`#${windowId} #score`);

    let dinoY = 0;
    let dinoVelocity = 0;
    let dinoDucking = false;
    let obstacles = [];
    let score = 0;
    let highScore = localStorage.getItem('dinoHighScore') || 0;
    let gameRunning = true;

    scoreElement.textContent = `Score: ${score} | High: ${highScore}`;

    function jump() {
        if (dinoY === 0 && !dinoDucking) {
            dinoVelocity = 15;
        }
    }

    function duck() {
        dinoDucking = true;
        dino.style.height = '20px';
        dino.style.bottom = '0px';
    }

    function stand() {
        dinoDucking = false;
        dino.style.height = '40px';
    }

    function createObstacle() {
        const obstacle = document.createElement('div');
        obstacle.className = 'obstacle';
        obstacle.style.right = '-50px';
        if (Math.random() < 0.3) {
            // Bird
            obstacle.style.height = '20px';
            obstacle.style.bottom = '50px';
            obstacle.classList.add('bird');
        } else {
            // Cactus
            obstacle.style.height = '40px';
            obstacle.style.bottom = '0px';
        }
        gameContainer.appendChild(obstacle);
        obstacles.push(obstacle);
    }

    function updateGame() {
        if (!gameRunning) return;

        // Update dino
        if (!dinoDucking) {
            dinoVelocity -= 1;
            dinoY += dinoVelocity;
            if (dinoY < 0) dinoY = 0;
            dino.style.bottom = dinoY + 'px';
        }

        // Update obstacles
        obstacles.forEach((obs, index) => {
            const right = parseInt(obs.style.right);
            obs.style.right = (right + 5) + 'px';

            if (right > 600) {
                obs.remove();
                obstacles.splice(index, 1);
                score++;
                scoreElement.textContent = `Score: ${score} | High: ${highScore}`;
            }

            // Collision detection
            const obsHeight = parseInt(obs.style.height);
            const obsBottom = parseInt(obs.style.bottom);
            const dinoHeight = dinoDucking ? 20 : 40;
            const dinoBottom = dinoDucking ? 0 : dinoY;

            if (right < 90 && right > 30) {
                if (dinoBottom + dinoHeight > obsBottom && dinoBottom < obsBottom + obsHeight) {
                    gameRunning = false;
                    if (score > highScore) {
                        highScore = score;
                        localStorage.setItem('dinoHighScore', highScore);
                    }
                    alert(`Game Over! Score: ${score}\nHigh Score: ${highScore}`);
                }
            }
        });

        // Create new obstacles
        if (Math.random() < 0.01) {
            createObstacle();
        }

        requestAnimationFrame(updateGame);
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            jump();
        } else if (e.code === 'ArrowDown') {
            e.preventDefault();
            duck();
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowDown') {
            stand();
        }
    });

    updateGame();
}

// Internet Explorer functions
function ieBack() {
    alert('Back button clicked');
}

function ieForward() {
    alert('Forward button clicked');
}

function ieGo() {
    const url = document.getElementById('ie-url').value;
    const content = document.getElementById('ie-content');
    content.innerHTML = `<h1>Navigating to ${url}</h1><p>This is a simulation. In real IE, you'd see the webpage here.</p>`;
}

// Click outside to close start menu
document.addEventListener('click', (e) => {
    const startMenu = document.getElementById('start-menu');
    const startButton = document.getElementById('start-button');
    if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
        startMenu.classList.add('hidden');
        startMenuVisible = false;
    }
});

function installApp(appName) {
    alert(`${appName} installed successfully!`);
    addToLibrary(appName);
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabName + '-tab').classList.remove('hidden');
}

function downloadApp(appName) {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.innerHTML = `<div class="progress-fill" style="width: 0%"></div><span>Downloading ${appName}...</span>`;
    
    const appElement = event.target.parentElement;
    appElement.appendChild(progressBar);
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            progressBar.innerHTML = `<span>${appName} downloaded!</span>`;
            setTimeout(() => {
                if (appName.includes('Windows')) {
                    installUpdate(appName);
                } else {
                    installApp(appName);
                }
                progressBar.remove();
            }, 1000);
        }
        progressBar.querySelector('.progress-fill').style.width = progress + '%';
    }, 200);
}

function addToLibrary(appName) {
    const library = document.getElementById('library-apps');
    const appDiv = document.createElement('div');
    appDiv.className = 'app';
    appDiv.textContent = appName;
    library.appendChild(appDiv);
}

function installUpdate(appName) {
    if (appName.includes('SP2')) {
        localStorage.setItem('windowsUpdated', 'sp2');
    } else if (appName.includes('Vista')) {
        localStorage.setItem('windowsUpdated', 'vista');
    }
    alert(`${appName} installed! The system will reboot.`);
    location.reload();
}

function createFolder() {
    const name = prompt('Enter folder name:');
    if (name) {
        const fileList = document.getElementById('file-list');
        const folderDiv = document.createElement('div');
        folderDiv.className = 'file-item';
        folderDiv.onclick = () => openFile('folder', name);
        folderDiv.textContent = `📁 ${name}`;
        fileList.appendChild(folderDiv);
    }
}

function createTextDocument() {
    const name = prompt('Enter document name:');
    if (name) {
        const fileList = document.getElementById('file-list');
        const docDiv = document.createElement('div');
        docDiv.className = 'file-item';
        docDiv.onclick = () => openFile('text', name);
        docDiv.textContent = `📄 ${name}.txt`;
        fileList.appendChild(docDiv);
    }
}

function createDrawing() {
    const name = prompt('Enter drawing name:');
    if (name) {
        const fileList = document.getElementById('file-list');
        const drawDiv = document.createElement('div');
        drawDiv.className = 'file-item';
        drawDiv.onclick = () => openFile('drawing', name);
        drawDiv.textContent = `🎨 ${name}.png`;
        fileList.appendChild(drawDiv);
    }
}

function openFile(type, name) {
    if (type === 'folder') {
        alert(`Opening folder: ${name}`);
    } else if (type === 'text') {
        openWindow('notepad');
    } else if (type === 'drawing') {
        openWindow('paint');
    }
}

function clearCanvas() {
    const canvas = document.getElementById('paint-canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initPaint(windowId) {
    const canvas = document.querySelector(`#${windowId} #paint-canvas`);
    const ctx = canvas.getContext('2d');
    let drawing = false;

    canvas.addEventListener('mousedown', () => drawing = true);
    canvas.addEventListener('mouseup', () => drawing = false);
    canvas.addEventListener('mousemove', draw);

    function draw(e) {
        if (!drawing) return;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
}

// Power outage simulation
function powerOutage() {
    const overlay = document.createElement('div');
    overlay.id = 'power-outage';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'black';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        location.reload();
    }, 3000);
}

// Random power outage every 5-10 minutes
setTimeout(() => {
    powerOutage();
}, Math.random() * 300000 + 300000);