
import React, { useState } from 'react';
import { Row, Col, InputGroup, FormControl, Table, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './TaskList.css';
import TaskItem from "../TaskItem";
import { deleteTask, updateTaskStatus } from '../../actions/tasks';

TaskList.propTypes = {

};

function TaskList(props) {

    const tasksList = useSelector(state => state.tasksReducer);
    const [filterString, setFilterString] = useState("");
    const [filterStatus, setFilterStatus] = useState(null);
    const dispatch = useDispatch();


    const handleTaskItemClick = (task) => {

        dispatch(updateTaskStatus(task));
    }
    const handleDeleteItem = (task) => {
        console.log(task);
        dispatch(deleteTask(task));
    }

    const handleOnChange = (e) => {

        const newFilter = e.target.value;
        if (newFilter === "true") {
            setFilterStatus(true);
        }
        if (newFilter === "false") {
            setFilterStatus(false)
        }
        if (newFilter === 'all') {
            setFilterStatus(null)
        }

    }

    return (
        <Row className={'table'}>
            <Col sm={12} md={12}>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng Thái</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><InputGroup>
                                <FormControl
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setFilterString(e.target.value)}
                                />
                            </InputGroup>
                            </td>
                            <td>
                                <Form.Control as="select" onChange={handleOnChange}>
                                    <option value={'all'}>Tất cả</option>
                                    <option value={false}>Ẩn</option>
                                    <option value={true}>Kích hoạt</option>
                                </Form.Control>
                            </td>
                            <td></td>
                        </tr>
                        {tasksList.map((task, index) => {
                            if ((task.name.toLowerCase().search(filterString) >= 0) && task.status === filterStatus)
                                return <TaskItem key={index}
                                    task={task}
                                    index={index}
                                    taskItemClick={handleTaskItemClick}
                                    deleteItem={handleDeleteItem} />
                            if ((task.name.toLowerCase().search(filterString) >= 0) && filterStatus === null)
                                return <TaskItem key={index}
                                    task={task}
                                    index={index}
                                    taskItemClick={handleTaskItemClick}
                                    deleteItem={handleDeleteItem} />
                            return null;

                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default TaskList;
