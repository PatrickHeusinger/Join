function renderBoard() {
    emptyInner('mainContent');
    renderBoardTasks();
}

function renderBoardTasks() {
    document.getElementById('mainContent').innerHTML = /*html*/`
        <div class="board">
            <div class="headline">
                <div class="headlinetitle">Board</div>
                <span class="headlinetitletext">Learning Managment System Project</span>
            </div>
            <div class="boardContentPosition">
                <div class="boardContentStyle">
                    <div>TO DO</div>
                    <div id="toDo" class="toDO boardBg1"></div>

                </div>
                <div class="boardContentStyle">
                    <div>IN PROGRESS</div>
                    <div class="inPro boardBg2"></div>
                </div>
                <div class="boardContentStyle">
                    <div>TESTING</div>
                    <div class="testing boardBg3"></div>
                </div>
                <div class="boardContentStyle">
                    <div>DONE</div>
                    <div class="done boardBg4"></div>
                </div>
            </div>
        </div>
    `;
    renderBoardContent();
}


function renderBoardContent() {
    emptyInner('toDo');
    for (let i = 0; i < boardToDo.length; i++) {
        let btask = boardToDo[i];
        document.getElementById('toDo').innerHTML += /*html*/`
            <div id="toDOTask${i}">
                <div>${btask['title']}</div>
                <div>${btask['description']}</div>
                <div>${btask['category']}</div>
                <div><button onclick="deleteBoardTask(${i})">Delete</button></div>
            </div>
        `;
    }
}

async function initBoard() {
    await downloadFromServer();
    boardToDo = JSON.parse(backend.getItem('boardToDo')) || [];
    console.log('boardToDo');
}


async function deleteBoardTask(i) {
    boardToDo.splice(i, 1);
    await backend.setItem('boardToDo', JSON.stringify(boardToDo));
    renderBoardContent();
}