import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/modal';
import * as modals from '../../store/modals';
import { deleteStory } from '../../store/stories';
import './deleteStoryModal.css';

const DeleteStoryModal = (storyId) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const modalState = useSelector(state => state.modals.modals);

    const changeRoute = () => {
        history.push('/')
    };

    return (
        <>
            <button className='btn-plain' onClick={() => dispatch(modals.deleteStoryModalOn())}>Delete</button>
            {modalState?.delete_story && (
                <Modal onClose={() => dispatch(modals.allModalsOff())}>
                    <h1>Are you sure?</h1>
                    <button className='btn-plain' onClick={() => {dispatch(deleteStory(storyId.storyId)); dispatch(changeRoute())}}>Yes</button>
                    <button className='btn-black' onClick={() => dispatch(modals.allModalsOff())}>No</button> 
                </Modal>
            )}
        </>
    )
};

export default DeleteStoryModal;