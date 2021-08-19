const taskText = document.querySelector('#task');
const btn = document.querySelector('#btn');
const taskContainer = document.querySelector('.task__container');
const tableBody = document.querySelector('#table__tr');

let id = 1;

const createTask = (e) => {
	e.preventDefault();

	const fragment = document.createDocumentFragment();

	const $tdId = document.createElement('td');
	$tdId.textContent = `${id++}`;

	const $tdTask = document.createElement('td');
	$tdTask.textContent = `${taskText.value}`;

	if (taskText.value == '') {
		alert('error');
	}

	/*
	$li.textContent = taskText.value;
	$ul.appendChild($li);

	taskContainer.appendChild($ul);
	*/

	taskText.value = '';
};

btn.addEventListener('click', createTask);
