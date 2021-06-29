import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../HobbyList';
import { addNewHobby, setActiveHobby } from '../../actions/hobby';

Test.propTypes = {

};

const randomNum = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
}
function Test(props) {

    const hobbyList = useSelector(state => state.hobbyReducer.list);
    const hobbyActive = useSelector(state => state.hobbyReducer.active);
    const dispatch = useDispatch();
    const handleAddHobbyClick = () => {
        const newId = randomNum();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`,

        }

        const action = addNewHobby(newHobby);
        dispatch(action);

    }

    const onHandleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action)

    }


    return (
        <div >
            <HobbyList hobbyList={hobbyList} activeId={hobbyActive} onHobbyClick={onHandleHobbyClick} />
            <button onClick={handleAddHobbyClick}>Random</button>
        </div>
    );
}

export default Test;