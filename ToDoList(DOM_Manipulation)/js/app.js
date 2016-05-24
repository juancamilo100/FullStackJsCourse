var taskInput = document.getElementById('new-task'); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first button
var incompleteTaskHolder = document.getElementById('incomplete-tasks'); //incomplete-tasks (unordered list)
var completedTasksHolder = document.getElementById('completed-tasks'); //completed-tasks

var addTask = function () {
  console.log("Add task...");
}

var editTask = function () {
  console.log("Edit task...");
}

var deleteTask = function () {
  console.log("Delete task...");
}

var taskCompleted = function () {
  console.log("Task completed...");
}

var taskIncomplete = function () {
  console.log("Task incomplete...");
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  
}

//Set click handler to add task function
addButton.onclick = addTask;
taskInput.onclick = addTask;
