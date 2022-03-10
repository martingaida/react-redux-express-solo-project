const SIGN_IN_ON = 'modals/SIGNIN';
const LOG_IN_ON = 'modals/LOGIN';
const NEW_STORY_ON = 'modals/NEW';
const EDIT_ON = 'modals/EDIT';
const DELETE_ON = 'modals/DELETE';
const ALL_OFF = 'modals/OFF';

export const signinModalOn = () => {

    return {
        type: SIGN_IN_ON,
        payload: {
            sign_in: true,
            log_in: false,
            new_story: false,
            edit: false,
            delete: false
        }
    };
};

export const loginModalOn = () => {

    return {
        type: LOG_IN_ON,
        payload: {
            sign_in: false,
            log_in: true,
            new_story: false,
            edit: false,
            delete: false
        }
    };
};

export const newStoryModalOn = () => {

    return {
        type: NEW_STORY_ON,
        payload: {
            sign_in: false,
            log_in: false,
            new_story: true,
            edit: false,
            delete: false
        }
    };
};

export const editModalOn = () => {

    return {
        type: EDIT_ON,
        payload: {
            sign_in: false,
            log_in: false,
            new_story: false,
            edit: true,
            delete: false
        }
    };
};

export const deleteModalOn = () => {

    return {
        type: DELETE_ON,
        payload: {
            sign_in: false,
            log_in: false,
            new_story: false,
            edit: false,
            delete: true
        }
    };
};

export const allModalsOff = () => {

    return {
        type: ALL_OFF,
        payload: {
            sign_in: false,
            log_in: false,
            new_story: false,
            edit: false,
            delete: false
        }
    };
};

export const modalsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOG_IN_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case SIGN_IN_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case NEW_STORY_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case EDIT_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case DELETE_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case ALL_OFF: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        default:
            return state;
    }
};