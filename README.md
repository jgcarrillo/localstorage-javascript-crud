![image](assets/home.jpg)

<div align="center">
    <b>💿💡 Basic web made with Vanilla JavaScript that persits data with Local Storage.</b>
</div>

## Table of contents 👇

-   [📁 About the project](#-about-the-project)
-   [⚗️ Basic Usage](#-Basic-usage)
-   [💛 Contact](#-contact)

### About the project

The project is divided in different functions that manage individually the different parts of the CRUD.

```js
// Create a new task with the name provided in the input html
// Then add that object to an array of tasks
createTask(task);

// Storage the content of the tasks array in Local Storage
// Shows in the HTML the list of tasks too
saveTask();

// Receive the name of the task and then
// delete that task from the tasks array.
// It also save again the resultant array
deleteTask(taskName);

// Change the value of the object property 'value'
// to true. The task is done.
editTask(taskName);
```

There are also different events associated with the functions:

```js
// This event button allows the creation of the task (ADD).
btn.addEventListener('click', ...);

// This event button manage the edit and also the delete function
// based on the target event that has been pressed.
taskContainer.addEventListener('click', ...);

// Show the taks inside the array when the DOM loads.
document.addEventListener('DOMContentLoaded', showTask);
```

### Basic usage

The use of the app is very simple. You only need to add a new task **by pressing** the 'enter' key or the 'Add' button. Then the task will appeared in the HTML and you can select different options:

-   If you choose 'Edit', the background of the table data will change from the default background color to green to indicates that the task is completed.
-   If you select 'Delete', then the task will be removed from the array and also from the HTML.

### 💛 Contact

If you have some doubts or need to ask something about the project, feel free to reach me here:

-   Twitter: [https://twitter.com/jgcarrillo](https://twitter.com/jgcarrillo_)
-   LinkedIn: [https://es.linkedin.com/in/jgcarrilloweb](https://es.linkedin.com/in/jgcarrilloweb)
-   Website: [https://jgcarrillo.com/](https://jgcarrillo.com/)
