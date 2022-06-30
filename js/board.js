function renderBoard() {
    emptyInner('mainContent');
    renderBoardTasks();
}

function renderBoardTasks() {
    document.getElementById('mainContent').innerHTML = /*html*/ `
        <div class="board">
            <div class="headline">
                <div class="headlinetitle">Board</div>
                <span class="headlinetitletext">Learning Managment System Project</span>
            </div>
            <div class="boardContentPosition">
                <div class="boardContentStyle">
                    <div>TO DO</div>
                    <div class="toDO boardBg1" id="toDo" ondrop="moveTo('toDo')" ondragover="allowDrop(event)"></div>

                </div>
                <div class="boardContentStyle">
                    <div>IN PROGRESS</div>
                    <div class="inPro boardBg2" id="inPro" ondrop="moveTo('inPro')" ondragover="allowDrop(event)"></div>
                </div>
                <div class="boardContentStyle">
                    <div>TESTING</div>
                    <div class="testing boardBg3" id="testing" ondrop="moveTo('testing')" ondragover="allowDrop(event)"></div>
                </div>
                <div class="boardContentStyle">
                    <div>DONE</div>
                    <div class="done boardBg4" id="done" ondrop="moveTo('done')" ondragover="allowDrop(event)"></div>
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
        document.getElementById('toDo').innerHTML += /*html*/ `
            <div id="toDOTask${i}" draggable="true" ondragstart="drag(event)">
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
    renderBoard();
}


async function deleteBoardTask(i) {
    boardToDo.splice(i, 1);
    await backend.setItem('boardToDo', JSON.stringify(boardToDo));
    renderBoardContent();
}

let currenDraggedElement;

function startDragging(id) {
    currenDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}


function moveTo(section) {

    //  ev.preventDefault();
    //  let dropTask = boardToDo.find();
    //  ev.target.appendChild(document.getElementById(dropTask));
    save();

}

async function save() {
    await backend.setItem('boardToDo', JSON.stringify(boardToDo));
    initBoard();
}