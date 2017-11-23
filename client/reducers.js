import { combineReducers } from 'redux';

const pages = {
    MAIN: 'MAIN',
    DOCS: 'DOCS',
    TESTS: 'TESTS',
    ABOUT: 'ABOUT'
}

// const currentPage = (state = pages.main, action) => ({
//     navigate() { return pages[action.pageName] || state }
// }[action.type]) || state;
const currentPage = (state = pages.MAIN, action) => {
    switch(action.type) {
        case 'navigate': return pages[action.pageName] || state;
        default: return state;
    }
}

export default combineReducers({ currentPage });
