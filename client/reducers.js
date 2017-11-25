import { combineReducers } from 'redux';
import answerMap from './answerMap'

const pages = {
    MAIN: 'MAIN',
    DOCS: 'DOCS',
    TESTS: 'TESTS',
    ABOUT: 'ABOUT'
}

const currentPage = (state = { pageName: pages.MAIN, subPageName: null }, action) => ({
    NAVIGATE() { 
        return Object.assign(
            {}, 
            { pageName: pages[action.pageName], subPageName: action.subPageName, anchor: action.anchor }
        ) 
    }
}[action.type] || (() => state))();

const userStatus = {
    LOGGED_OUT: 'LOGGED_OUT',
    LOGGED_IN: 'LOGGED_IN',
    WORKING: 'WORKING'
}

const answerStatus = {
    TRUE: 'TRUE',
    FALSE: 'FALSE',
    NONE: 'NONE'
}

const currentUser = (
    state = { 
        name: null, 
        group: null, 
        status: userStatus.LOGGED_OUT,
        variant: null,
        elapsedTime: 0,
        result: []
    }, 
    action
) => ({
    LOGIN() { return Object.assign({}, { name: action.name, group: action.group }) },
    INCREMENT_TIME() { return Object.assign({}, state, { elapsedTime: state.elapsedTime + 1 }) },
    VALIDATE_ANSWERS() {
        const result = answerMap[action.testID][state.variant].map((e,i) => {
            if(action.answers[i] == 0) return answerStatus.NONE;
            return e == action.answers[i] ? answerStatus.TRUE : answerStatus.FALSE;
        });
        return Object.assign({}, state, { result });
    }
}[action.type] || (() => state))();

export default combineReducers({ currentPage });
