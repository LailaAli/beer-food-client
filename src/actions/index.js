import $ from "jquery-ajax";

export function fetchItems(searchInput) {

    return function(dispatch) {
        dispatch(requestItems());
        console.log(searchInput);
        
        $.get("http://localhost:5000/api/?search=" + searchInput).done(function(data) {
            console.log(data)
            dispatch(receiveItems(data[0]));
        });
    };
}

function requestItems() {
    return {
        type: "REQUEST_ITEMS"
    };
}

function receiveItems(items) {
    return {
        type: "RECEIVE_ITEMS",
        items
    };
}
