const search = (state = { result: [], lastValues: [], add_user_list: [] }, action) => {
    switch (action.type) {
        case "SET_SEARCH_QUIERY_FULFILLED":
            state = {
                ...state,
                result: action.payload,
            }
            break;
        case "EXTEND_SEARCH_QUIERY_FULFILLED":
            state = {
                ...state,
                result: arrayUnique(state.result.concat(action.payload))
            }
            break;
        case "SEARCH_USER_QUIERY_FULFILLED":
            state = {
                ...state,
                add_user_list: action.payload
            }
            break;
    }
    return state;
}

function arrayUnique(array) {

    var a = array.concat();


    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i].id != undefined && a[j].id != undefined) {
                if (a[i].id === a[j].id) {
                    a.splice(j--, 1);
                }
            } else if ((a[i].point_id != undefined && a[j].point_id != undefined)) {
                if (a[i].point_id === a[j].point_id) {
                    a.splice(j--, 1);
                }
            }
        }
    }



    return a;
}

export default search;