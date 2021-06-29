const initialState = {
    name: "",
    status: false,
}

const taskFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            return state;
        case 'UPDATE':
            const newState = {
                name: action.payloat.name,
                status: action.payloat.status
            }

            return newState;

        default:
            return state;
    }

}
export default taskFormReducer;