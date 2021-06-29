import React from 'react';
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./Sort.css";

const Sort = () => {
    return (
        <DropdownButton title={"Sắp Xếp"} className={"sort"}>
            <Dropdown.Item eventKey="1">
                <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>&nbsp;
                Tên A-Z
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
                <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>&nbsp;
                Tên Z-A</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">Trạng Thái Kích Hoạt</Dropdown.Item>
            <Dropdown.Item eventKey="4">Trạng Thái Ẩn</Dropdown.Item>
        </DropdownButton>
    );
}

export default Sort;