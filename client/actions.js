export const navigate = (pageName, subPageName = null, anchor = null) => ({
    type: 'NAVIGATE',
    pageName,
    subPageName,
    anchor
});

export const validateAnswers = (testID, answers) => ({
    type: 'VALIDATE_ANSWERS',
    testID,
    answers
});

export const incrementTime = () => { type: 'INCREMENT_TIME' }

const loadScore = () => {
    try {
        const serializedScore = localStorage.getItem('userScore');
        if(serializedScore === null) return [];
        return JSON.parse(serializedScore);
    } catch(err) {
        console.log('An error occurred while loading score from localstorage: ', err);
        return undefined;
    }
}

const saveScore = (userScore) => {
    try {
        const serializedScore = JSON.stringify(userScore);
        localStorage.setItem('userScore', serializedScore);
    } catch(err) {
        console.log('An error occurred while saving score to localstorage: ', err);
    }
}

export const saveResults = currentUser => dispatch => {
    const userScore = [...loadScore(), currentUser]
    saveScore(userScore);
    return userScore;
}
