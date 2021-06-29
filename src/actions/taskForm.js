export const addNew_form = () => {
    return {
        type: 'ADD_NEWS',
    }
}

export const update_form = (task) => {
    return {
        type: 'UPDATE',
        payloat: {
            name: task.name,
            status: task.status,
        }
    }
}