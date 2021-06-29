import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

TaskItem.propTypes = {
    taskItemClick: PropTypes.func,
    deleteItem: PropTypes.func,
    task: PropTypes.object,
};

TaskItem.defaultProps = {
    taskItemClick: null,
    task: undefined,
    deleteItem: null,
}

function TaskItem(props) {
    const { taskItemClick, task, deleteItem, index } = props;
    // const [status, setStatus] = useState(props.task.status);

    const handleOnClick = (task) => {
        if (taskItemClick) {
            taskItemClick(task)
        }
    }
    const handleDelete = (task) => {
        if (deleteItem) {
            deleteItem(task)
        }
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td><span className={task.status ? "btn btn-danger" : "btn btn-success"} onClick={() => handleOnClick(task)}>
                {task.status ? "Kích hoạt" : "Ẩn"}
            </span></td>
            <td>
                <Button variant="warning" style={{ color: "#fff" }} >
                    <i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;
                    Sửa
                </Button>&nbsp;
                <Button variant="danger" onClick={() => handleDelete(task)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>&nbsp;
                    Xóa
                </Button>
            </td>
        </tr>
    );
}

export default TaskItem;