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
    category.value = '';
    urgency.value = '';
    description.value = '';
    newTask.value = '';
}