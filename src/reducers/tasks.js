const initialState = JSON.parse(localStorage.getItem('tasks')) || [];


const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASKS':
            const newListTasks = [...state]
            const newTask = {
                id: action.payload.id,
                name: action.payload.name,
                status: action.payload.status,
            }
            newListTasks.push(newTask)
            localStorage.setItem("tasks", JSON.stringify(newListTasks));
            return newListTasks;
        case 'UPDATE_TASKS_STATUS':
            const newUpdateTasks = [...state]
            const index = newUpdateTasks.findIndex(x => x.id === action.payload.id);
            const updateTask = {
                id: action.payload.id,
                name: action.payload.name,
                status: !action.payload.status,
            }
            newUpdateTasks[index] = updateTask
            localStorage.setItem("tasks", JSON.stringify(newUpdateTasks));
            return newUpdateTasks;
        case 'UPDATE_TASKS':
            break;
        case 'DELETE_TASKS':
            const newDeleteListTasks = [...state]
            const indexDelete = newDeleteListTasks.findIndex(x => x.id === action.payload.id);
            newDeleteListTasks.splice(indexDelete, 1);
            localStorage.setItem("tasks", JSON.stringify(newDeleteListTasks));
            return newDeleteListTasks;

        default:
            return state;
    }
}

export default tasksReducer;