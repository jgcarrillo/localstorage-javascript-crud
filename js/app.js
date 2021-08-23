const taskText = document.querySelector('#task');
const btn = document.querySelector('#btn');
const btnDelete = document.querySelector('#button-delete');
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

/**************
 ** DELETE TASK
 *************/
const deleteTask = (taskName) => {
	let indexArray;

	taskList.forEach((elem, index) => {
		if (elem.task === taskName) {
			console.log(taskName);
			indexArray = index;
		}
	});

	taskList.splice(indexArray, 1);
	saveTask();
};

/*************
 ** SHOW TASKS
 *************/
const showTask = () => {
	tableBody.innerHTML = '';

	taskList = JSON.parse(localStorage.getItem('tasks'));

	if (taskList === null) {
		taskList = [];
	} else {
		// RENDER HERE THE TASKS
		taskList.forEach((element, index) => {
			tableBody.innerHTML += `
				<tr>
					<td>${index}</td>
					<td>${element.task}</td>
					<td>Edit</td>
					<td><button class="button button--delete" id="button-delete">Delete</button></td>
				</tr>
			`;
		});
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

taskContainer.addEventListener('click', (e) => {
	e.preventDefault();

	const url = e.path[2].childNodes[3].innerHTML;

	if (e.target.innerHTML === 'Delete') {
		deleteTask(url);
	}
});

document.addEventListener('DOMContentLoaded', showTask);
