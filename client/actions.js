export const navigate = (pageName, subPageName = null, anchor = null) => ({
    type: 'NAVIGATE',
    pageName,
    subPageName,
    anchor
});

export const login = (name, group, variant) => ({
    type: 'LOGIN',
    name,
    group,
    variant
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const retry = () => ({
    type: 'RETRY'
});

export const validateAnswers = (testID, answers) => ({
    type: 'VALIDATE_ANSWERS',
    testID,
    answers
});

export const setTime = (value) => ({ 
    type: 'SET_TIME',
    value
})

export const loadScore = () => {
    try {
        const serializedScore = localStorage.getItem('userScore');
        if(serializedScore === null) return [];
        return JSON.parse(serializedScore);
    } catch(err) {
        console.log('An error occurred while loading score from localstorage: ', err);
        return undefined;
    }
}

export const loadResults = () => ({
    type: 'LOAD_RESULTS'
});

const saveScore = (userScore) => {
    try {
        const serializedScore = JSON.stringify(userScore);
        localStorage.setItem('userScore', serializedScore);
    } catch(err) {
        console.log('An error occurred while saving score to localstorage: ', err);
    }
}

export const saveResults = (currentUser, elapsedTime, testID, date) => dispatch => {
    const userScore = [Object.assign({}, currentUser, { elapsedTime, testID, date }), ...loadScore()]
    saveScore(userScore);
    console.log(userScore);
    return userScore;
}

export const clearResults = () => dispatch => {
    try {
        localStorage.setItem('userScore', JSON.stringify([]));
    } catch(err) {
        console.log('An error occurred while saving score to localstorage: ', err);
    }
}
