var isAddingReducer = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_IS_ADDING':
            return !state;
        default:
            console.log('[Is Adding Reducer] Invalid type:', action.type);
            return state;
    }
}

module.exports = isAddingReducer;