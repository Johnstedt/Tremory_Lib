const notification = (state = {unseenNotificationsAmount: 0, notifications: [],lastValues: []}, action) => {
    switch (action.type) {
        case "SET_UNSEEN_NOTIFICATION_AMOUNT_FULFILLED":
            state = {
                ...state,
                unseenNotificationsAmount: action.payload,
            }
            break;
        case "SET_NOTIFICATIONS_FULFILLED":
            state = {
                ...state,
                notifications: action.payload,
            }
            break;    
    }
    return state;
}

export default notification;