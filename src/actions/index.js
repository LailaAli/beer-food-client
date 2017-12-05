import $ from "jquery-ajax";

export function fetchItems(searchInput) {

    return function(dispatch) {
        dispatch(requestItems());
        console.log("//This is the searchInput from actions")
        console.log(searchInput);
        
        $.get("http://localhost:5000/api/?search=" + searchInput).done(function(data) {
        console.log("//Here is the data from actions")    
        console.log( data)
            dispatch(receiveItems(data));
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
