const INITIAL_STATE = {
    
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
/*         case "ADD":
            return add(state, action.firstNumber, action.secondNumber) */
        default:
            return state;
    }
}

/* function add(state, firstNumber, secondNumber) {
    const answer = firstNumber + secondNumber;

    return Object.assign({}, state, {
        answer: answer
    });
} */


