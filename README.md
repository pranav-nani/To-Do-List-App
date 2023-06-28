# To Do List App  [Live Demo](https://pranav-nani.github.io/To-Do-List-App/).
The To-Do List App is a web-based application built using HTML, CSS, and JavaScript. It offers users a convenient way to manage and organize their tasks effectively. The provided code showcases the core functionalities of the app.

With this app, users can add new tasks by typing them into the input box and clicking the "Add" button. If the input box is empty, an alert will be displayed, prompting the user to enter a task.

The app dynamically generates a list of tasks as `<li>` elements within a container. Each task is displayed as a list item, and a delete button (represented by an "x" symbol) is added to the right side of each task.

Users can mark a task as completed by clicking on it. When a task is clicked, the app toggles the "checked" class on the `<li>` element, visually indicating that the task is completed. Additionally, a success alert is shown to acknowledge the completion of the task.
When a user clicks the delete button (the "x" symbol), the corresponding task is removed from the list.

![image](https://github.com/pranav-nani/To-Do-List-App/assets/88759848/25a3a937-74d7-45ca-ac04-be7db3a1e02b)


The app utilizes local storage to save the tasks. Whenever a change is made to the task list, such as adding or deleting tasks, the app updates the local storage to persist the changes. On page load, the saved task list is retrieved from local storage and displayed.

The app incorporates an engaging confetti effect using the `confetti()` function from a library. When a task is marked as completed, a colorful confetti animation is triggered, providing a delightful visual feedback.
![image](https://github.com/pranav-nani/To-Do-List-App/assets/88759848/7d6d6e26-ea00-48a9-a070-5544d116924c)

Overall, the To-Do List App serves as a practical tool for managing tasks, allowing users to add, complete, and delete tasks with ease. It offers a clean and user-friendly interface, making task management a streamlined process.
