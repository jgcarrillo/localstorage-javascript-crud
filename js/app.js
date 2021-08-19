const taskText = document.querySelector('#task');
const btn = document.querySelector('#btn');
const taskContainer = document.querySelector('.task__container');
const tableBody = document.querySelector('.table__body');

let id = 1;

const createTask = (e) => {
	e.preventDefault();

	if (taskText.value == '') {
		alert('error');
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
