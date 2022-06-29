
function renderBacklog() {

    document.getElementById('mainContent').innerHTML = '';
    renderBacklogTasks();
}

function renderBacklogTasks() {
    document.getElementById('mainContent').innerHTML = /*html*/`
    <div class="board">
        <div class="headline">
            <div class="headlinetitle">Backlog</div>
            <span class="headlinetitletext">Learning Managment System Project</span>
        </div>
        <div class="blContent">
        <div class="blBacklog">
            <div class="blHeadlines">
                <div>AssignedTo</div>
                <div>Category</div>
                <div>Details</div>
            </div>
            <div id="blBacklog" class="blBacklog">
        
            </div>
        </div>
    </div>
    `;
    renderBacklogContent();
}

function renderBacklogContent() {
    document.getElementById('blBacklog').innerHTML = '';
    for (let i = 0; i < allTasks.length; i++) {
       let task = allTasks[i];
            
            document.getElementById('blBacklog').innerHTML += /*html*/`
            <div id="blTask${i}">
                <div>${task['title']}</div>
                <div>${task['description']}</div>
                <div>${task['category']}</div>
                <div><button onclick="deleteTask(${i})">Delete</button></div>
                <div><button onclick="toBoard(${i})">Board</button></div>
            </div>
        `;
    }
}

async function deleteTask(i) {
    allTasks.splice(i, 1);
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    renderBacklogContent();    
}

let boardToDo = [];

async function toBoard() {
    boardToDo.push(allTasks);
    await backend.setItem('boardToDo', JSON.stringify(boardToDo));
    deleteTask(i);
    console.log(boardToDo);
}


// async function save() {
//     await backend.setItem('boardToDo',JSON.stringify(boardToDo));

//     toBoard();
//}

