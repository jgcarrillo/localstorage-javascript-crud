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
					<td><button class="button button-table button--edit" id="button-edit">Edit</button></td>
					<td><button class="button button-table button--delete" id="button-delete">Delete</button></td>
				</tr>
			`;
		});
	}
};

/**************
 ** DELETE TASK
 *************/
const deleteTask = (taskName) => {
	let indexArray;

	taskList.forEach((elem, index) => {
		if (elem.task === taskName) {
			indexArray = index;
		}
	});

	taskList.splice(indexArray, 1);
	saveTask();
};

/************
 ** EDIT TASK
 ************/
const editTask = (taskName) => {
	const urlTaskName = taskName.innerHTML;
	const parentNode = taskName.parentNode;

	taskList.forEach((elem, index) => {
		if (elem.task === urlTaskName) {
			parentNode.classList.toggle('done');
		}
	});
};

/*********
 ** EVENTS
 *********/

// ADD TASK
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

// DELETE OR MODIFY TASK
taskContainer.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.innerHTML === 'Delete' || 'Done') {
		const url = e.path[2].childNodes[3].innerHTML;
		const editUrl = e.path[2].childNodes[3];
		if (e.target.innerHTML === 'Delete') {
			deleteTask(url);
		}

		if (e.target.innerHTML === 'Edit') {
			editTask(editUrl);
		}
	}
});

// FIRST LOADING OF THE HTML
document.addEventListener('DOMContentLoaded', showTask);
