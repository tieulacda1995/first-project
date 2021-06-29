import React from 'react';
import { Button } from "react-bootstrap";
import "./AddItem.css"

const AddItem = (props) => {
    const click = () => {
        props.openForm();
    }
    return (
        <div className={"add"}>
            <Button className={"abs"} onClick={click}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Thêm Công Việc</Button>
        </div>
    );
}

export default AddItem;