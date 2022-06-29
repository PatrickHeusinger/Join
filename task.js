let allTasks = [];
let title;
let date;
let category;
let urgency;
let description;
let newTask

async function addTask() {
    title = document.getElementById('taskTitle');
    date = document.getElementById('taskDate');
    category = document.getElementById('category');
    urgency = document.getElementById('urgency');
    description = document.getElementById('taskDescription');
    newTask = {
        'title': title.value,
        'date': date.value,
        'category': category.value,
        'urgency': urgency.value,
        'description': description.value
    };

    allTasks.push(newTask);
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    cleanValues();
    console.log(allTasks);
}

function cleanValues() {
    title.value = '';
    date.value = '';
    description.value = '';
    newTask.value = '';
}

function renderTask() {
    emptyInner('mainContent');
    document.getElementById('mainContent').innerHTML = /*html*/ `
        <form onsubmit="return false">
        <div class="board">
            <div class="headline">
                <div class="headlinetitle">Add Task</div>
                <span class="headlinetitletext">Learning Managment System Project</span>
            </div>
            <div class="taskinnerwindow">
                <div class="boardRow1">
                    <div class="left dflexcolumn">

                        <span class="taskinnerwindowtitle">TITLE</span>
                        <input class="taskmargin taskinputstyle" name="title" id="taskTitle" type="text" placeholder="Title..." required>

                    </div>
                    <div class="right dflexcolumn">
                        <span class="taskinnerwindowtitle">DUE DATE</span>
                        <input class="taskmargin taskinputstyle" name="date" id="taskDate" type="date" required>
                    </div>
                </div>
                <div class="boardRow2">
                    <div class="left">
                        <span class="taskinnerwindowtitle">CATEGORY</span>
                        <select name="category" id="category" class="left dflexcolumn taskmargin taskinputstyle">
                            <option value="Development">Development</option>
                            <option value="Design">Design</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                    </div>
                    <div class="right">
                        <span class="taskinnerwindowtitle">URGENCY</span>
                        <select name="urgency" id="urgency" class="left dflexcolumn taskmargin taskinputstyle">
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
                <div class="boardRow3">

                    <div class="left">
                        <span class="taskinnerwindowtitle">DESCRIPTION</span>
                        <input class="taskmargin taskinputstyle" id="taskDescription" type="textfield" placeholder="Description..." required>
                    </div>

                    <div class="right">
                        <span class="taskinnerwindowtitle">ASSIGNED TO</span>
                        <div class="employers"></div>
                        <div class="btnTask">
                            <button onclick="cleanValues()" class="taskmargin" id="cancelTask">CANCEL</button>
                            <button onclick="addTask()" id="createTask">CREATE TASK</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </form>
    `;
}