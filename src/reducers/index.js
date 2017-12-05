import Beer from '../components/response';

const INITIAL_STATE = {
    beerData: [Beer]
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'RECEIVE_ITEMS':
            return receiveItems(state, action);
        default:
            return state;
    }
}

function receiveItems(state, action) {
    return Object.assign({}, state, {
        beerData: action.items
    });
}