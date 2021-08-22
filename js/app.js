const taskText = document.querySelector('#task');
const btn = document.querySelector('#btn');
const taskContainer = document.querySelector('.task__container');
const tableBody = document.querySelector('.table__body');

// let id = 1;

const taskList = [];

const createTask = (task) => {
	const newTask = {
		task,
		value: true,
	};

	taskList.push(newTask);

	return newTask;
};

const saveTask = () => {
	localStorage.setItem('tasks', JSON.stringify(taskList));
};

const showTask = () => {
	localStorage.getItem('taskList');
};

btn.addEventListener('click', (e) => {
	e.preventDefault();

	createTask(taskText.value);
	saveTask();
	taskText.value = '';
	console.log(taskList);
});

document.addEventListener('DOMContentLoaded', () => {
	localStorage.getItem('taskList');
	console.log(taskList);
});

/*
const createTask = (e) => {
	e.preventDefault();

	if (taskText.value == '') {
		alert('error');
		return;
	}

	const $tr = document.createElement('tr');

	const $tdId = document.createElement('td');
	$tdId.textContent = `${id++}`;

	const $tdTask = document.createElement('td');
	$tdTask.textContent = `${taskText.value}`;

	const $tdEdit = document.createElement('td');
	$tdEdit.textContent = 'EDIT';

	const $tdDelete = document.createElement('td');
	$tdDelete.textContent = 'DELETE';

	$tr.appendChild($tdId);
	$tr.append($tdTask);
	$tr.appendChild($tdEdit);
	$tr.appendChild($tdDelete);

	tableBody.appendChild($tr);

	taskText.value = '';
};

const deleteTask = (e) => {};

btn.addEventListener('click', createTask);
*/
