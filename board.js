function renderBoard() {
    emptyInner('mainContent');
    document.getElementById('mainContent').innerHTML = /*html*/`
    <div class="board">
        <div class="headline">
            <div class="headlinetitle">Board</div>
            <span class="headlinetitletext">Learning Managment System Project</span>
        </div>
        <div id="toDO" class="toDO">
        
        </div>
    </div>

    `;
    renderBoardTask();
}

function renderBoardTask() {
    document.getElementById('toDO').innerHTML = '';
    for (let i = 0; i < boardToDo.length; i++) { 
    //boardToDo[i] = allTasks[i];
    let btask = boardToDo[i];

        document.getElementById('toDO').innerHTML += /*html*/ `
                    <div id="toDO${i}">
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
    renderBoard();
}

async function deleteBoardTask(i) {
    boardToDo.splice(i, 1);
    await backend.setItem('boardToDo', JSON.stringify(boardToDo));
    renderBoardTask();   
}