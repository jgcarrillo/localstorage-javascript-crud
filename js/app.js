const taskText = document.querySelector('#task');
const btn = document.querySelector('#btn');
const taskContainer = document.querySelector('.task__container');
const tableBody = document.querySelector('.table__body');

let taskList = [];

/**************
 ** CREATE TASK
 **************/
const createTask = (task) => {
	const newTask = {
		task,
		value: true,
	};

	taskList.push(newTask);

	return newTask;
};

/************
 ** SAVE TASK
 ************/
const saveTask = () => {
	localStorage.setItem('tasks', JSON.stringify(taskList));

	showTask();
};

/*************
 ** SHOW TASKS
 *************/
const showTask = () => {
	taskList = JSON.parse(localStorage.getItem('tasks'));

	if (taskList === null) {
		taskList = [];
	} else {
		console.log(taskList);
	}
};

/*********
 ** EVENTS
 *********/
btn.addEventListener('click', (e) => {
	e.preventDefault();

	if (taskText.value == '') {
		alert('Input value cannot be empty!');
		return;
	}

	createTask(taskText.value);
	saveTask();
	taskText.value = '';
});

document.addEventListener('DOMContentLoaded', showTask);
