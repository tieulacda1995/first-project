import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./TaskForm.css";

import { useDispatch, useSelector } from 'react-redux';
import { addNewTasks } from '../../actions/tasks';

const TaskForm = (props) => {
    const form = useSelector(state => state.taskFormReducer);

    const [name, setName] = useState(form.name);
    const [status, setStatus] = useState(form.status);
    const [err, setErr] = useState(false);
    const dispatch = useDispatch();

    const randomNum = () => {
        return 1000 + Math.trunc(Math.random() * 9000);
    }

    const click = () => {
        props.closeForm();
    }


    const convertBool = (str) => {
        switch (str) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                break;
        }
    }
    const onSubmit = event => {
        event.preventDefault();
        if (name === "") {
            setErr(true);
            return
        }
        setErr(false);
        const newId = randomNum();
        const newTask = {
            id: newId,
            name,
            status,
        }
        // props.onSubmit(name, status);
        const action = addNewTasks(newTask);
        dispatch(action);

        setName("");
        setStatus(false);
    }

    const handleCancel = () => {
        setName("");
        setStatus(false);
    }

    return (
        <div className={'form-nhap'}>
            <div className={'them'}>
                Thêm Công Việc
                <span className={"fl-right"} onClick={click}><i className="fa fa-times-circle" aria-hidden="true"></i></span>
            </div>
            <Form className={'form'} onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail" className={'left'}>
                    <Form.Label>Tên:<span style={{ color: "red" }}>*</span></Form.Label>&nbsp;
                    {err && <span style={{ color: "red" }}>vui long dien ten</span>}
                    <Form.Control name={"name"} onChange={(e) => setName(e.target.value)} value={name} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className={'left'}>
                    <Form.Label>Trạng Thái:</Form.Label>
                    <Form.Control as="select" name={"status"} onChange={(e) => setStatus(convertBool(e.target.value))} value={status}>
                        <option value={false}>Ẩn</option>
                        <option value={true}>Kích hoạt</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="warning" className={'margin-bot'} style={{ color: "#fff" }} type="submit">
                    <i className="fa fa-plus" aria-hidden="true"></i>&nbsp;
                    Lưu Lại
                </Button>&nbsp;
                <Button variant="danger" className={'margin-bot'} onClick={handleCancel}>
                    <i className="fa fa-times" aria-hidden="true"></i>&nbsp;
                    Hủy Bỏ
                </Button>
            </Form>


        </div>
    );
}

export default TaskForm;