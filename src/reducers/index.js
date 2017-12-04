const INITIAL_STATE = {
    searchInput: 'Two Hearted Ale',
    notFound: ' '
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "GO":
            return go(state, action.searchInput)
        default:
            return state;
    }
}

function go(state, searchInput) {
    const result='';  //searchInputData;

    return Object.assign({}, state, {
        searchInput: result
    });
}


