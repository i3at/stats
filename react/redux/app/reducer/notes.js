var notesReducer = (state = ['Android', 'iOS', 'Windows'], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'REMOVE_ITEM':
            return state.filter((e, i)=> i != action.index);
        default:
            console.log('[Notes Reducer] Invalid type', action.type);
            return state;
    }
}

module.exports = notesReducer;