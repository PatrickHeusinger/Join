let allTasks = [];

async function addTask() {
    let title = document.getElementById('taskTitle');
    let date = document.getElementById('taskDate');
    let category = document.getElementById('category');
    let urgency = document.getElementById('urgency');
    let description = document.getElementById('taskDescription');
    let newTask = {
        'title': title.value,
        'date': date.value,
        'category': category.value,
        'urgency': urgency.value,
        'description': description.value
    };

    allTasks.push(newTask);
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    console.log(allTasks);

}