let allTasks = [];
let boardToDo = [];
let title;
let date;
let category;
let urgency;
let description;
let newTask;
let board;
let id = 0;
let today = new Date();

async function addTask() {
    title = document.getElementById('taskTitle');
    date = document.getElementById('taskDate');
    category = document.getElementById('category');
    urgency = document.getElementById('urgency');
    description = document.getElementById('taskDescription');
    newTask = {
        'id': getRandomID(allTasks),
        'title': title.value,
        'date': date.value,
        'category': category.value,
        'urgency': urgency.value,
        'description': description.value,
        'created': today,
        'board': 'toDo'
    };
    allTasks.push(newTask);
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    cleanValues();
    console.log(allTasks);
}


function getRandomID(allTasks) {
    let newID = Math.floor(Math.random() * new Date().getTime());
    console.log(newID);
    return allTasks.some(elem => elem.uid == newID) ? getRandomID(allTasks) : newID;
}


function cleanValues() {
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('urgency').value = '';
    document.getElementById('category').value = '';
}


function renderTask() {
    emptyInner('mainContent');
    document.getElementById('mainContent').innerHTML = /*html*/ `
        <div class="board">
            <form onsubmit="return false">
                <div class="headline">
                    <div class="headlinetitle">ADD TASK</div>
                    <span class="headlinetitletext">Learning Managment System Project</span>
                </div>
                <div id="responsivMain" class="d-none">
                    <div class="responsivPosition">
                        <div onclick="responsiveClose()" class="responsiveClose"><img class ="responsivCloseImg" src="./img/close.png"></div>
                        <nav>
                            <div class="sidebarMenu">
                                <ul class="innerMenu">
                                    <li><a href="index.html"><img class="navbarimg" src="./img/logo.png"></a></li>
                                    <li class="sideBar" onclick="renderBoard()">BOARD</li>
                                    <li class="sideBar" onclick="renderBacklog()">BACKLOG</li>
                                    <li class="sideBar" onclick="renderTask()">ADD TASK</li>
                                    <li class="sideBar" onclick="renderHelp()">HELP</li>
                                </ul>
                            </div>
                        </nav>
                        <footer class="footerDiv">
                        <div class="footer">
                            <div class="footerimprint" onclick="renderImprint()">Imprint</div>
                            <div class="footerpolicy" onclick="renderPolicy()">Policy</div>
                        </div>
                        </footer>
                    </div>
                </div>
                <div class="responsivMenu d-none" onclick="responsiveRender()"><img class="responsivImg" src="./img/menu.png">
                </div>
                <div class="taskinnerwindow">
                    <div class="boardRow1">
                        <div class="left dflexcolumn">
                            <span class="taskinnerwindowtitle">TITLE</span>
                            <input class="taskmargin taskinputstyle" name="title" id="taskTitle" maxlength="40" minlength="4" type="text" placeholder="Title...">
                        </div>
                        <div class="right dflexcolumn">
                            <span class="taskinnerwindowtitle">DUE DATE</span>
                            <input class="taskmargin taskinputstyle" name="date" id="taskDate" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="- select date -">
                        </div>
                    </div>
                    <div class="boardRow2">
                        <div class="left">
                            <span class="taskinnerwindowtitle">CATEGORY</span>
                            <select name="category" id="category" class="left dflexcolumn taskmargin taskinputstyle">
                                <option value="" disabled selected>- select category -</option>
                                <option value="Development">Development</option>
                                <option value="Design">Design</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Marketing">Other</option>
                            </select>
                        </div>
                        <div class="right">
                            <span class="taskinnerwindowtitle">URGENCY</span>
                            <select  name="urgency" id="urgency" class="left dflexcolumn taskmargin taskinputstyle">
                                <option value="" disabled selected>- select     urgency -</option>
                                <option class="urgencyhigh" value="High">High</option>
                                <option class="urgencymedium" value="Medium">Medium</option>
                                <option class="urgencylow" value="Low">Low</option>
                            </select>
                        </div>
                    </div>
                    <div class="boardRow3">
                        <div class="left">
                            <span class="taskinnerwindowtitle">DESCRIPTION</span>
                            <textarea class="taskinputstyletext"  id="taskDescription" type="textfield" placeholder="Description..."></textarea>
                        </div>
                        <div class="right">
                            <span class="taskinnerwindowtitle">ASSIGNED TO</span>
                            <div class="employers"></div>
                            <div class="btnTask">
                                <button onclick="cleanValues()"class="taskmargin" id="cancelTask">CANCEL</button>
                                <button onclick="addTask()" id="createTask">CREATE TASK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `;
}