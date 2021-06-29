import React from 'react';
import PropTypes from 'prop-types';
import './Hobby.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onHobbyClick: null,
}

function HobbyList(props) {
    const { hobbyList, activeId, onHobbyClick } = props;

    const onHandleClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby);
        }
    }

    const aaa = hobbyList.map((hobby, index) => {
        return <li key={index} onClick={() => onHandleClick(hobby)} className={hobby.id === activeId ? "active" : ""}>{hobby.title}</li>
    })
    return (
        <div className={"color-box"} >
            <ul className="hobby-list">
                {aaa}
            </ul>
        </div>
    );
}

export default HobbyList;