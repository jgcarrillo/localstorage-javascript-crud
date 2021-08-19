const taskText = document.querySelector('#task');
const btn = document.querySelector('#btn');
const taskContainer = document.querySelector('.task__container');

const createTask = (e) => {
	e.preventDefault();

	const $ul = document.createElement('ul');
	const $li = document.createElement('li');

	if (taskText.value == '') {
		alert('error');
	}

	$li.textContent = taskText.value;
	$ul.appendChild($li);

	taskContainer.appendChild($ul);

	taskText.value = '';
};

btn.addEventListener('click', createTask);
