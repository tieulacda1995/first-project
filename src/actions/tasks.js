export const addNewTasks = (task) => {
    return {
        type: 'ADD_TASKS',
        payload: {
            id: task.id,
            name: task.name,
            status: task.status,
        },
    }
};
export const updateTaskStatus = (task) => {
    return {
        type: 'UPDATE_TASKS_STATUS',
        payload: {
            id: task.id,
            name: task.name,
            status: task.status,
        },
    }
};
export const deleteTask = (task) => {
    return {
        type: 'DELETE_TASKS',
        payload: {
            id: task.id,
            name: task.name,
            status: task.status,
        },
    }
};