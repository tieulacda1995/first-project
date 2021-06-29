import { combineReducers } from "redux";
import hobbyReducer from './hobby';
import tasksReducer from './tasks';
import taskFormReducer from './taskForm';

const rootReducer = combineReducers({
    hobbyReducer,
    tasksReducer,
    taskFormReducer,
});

export default rootReducer;