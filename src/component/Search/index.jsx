import React from 'react';
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Search = () => {
    return (
        <InputGroup>
            <FormControl
                placeholder="Tìm"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />

            <Button className={"btn-search"}><i className="fa fa-search" aria-hidden="true"></i></Button>
        </InputGroup>
    );
}

export default Search;