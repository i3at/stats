var tasksReducer = (state = ['Task 1', 'Task 2', 'Task 3'], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.item];
        case 'REMOVE_TASK':
            return state.filter((e, i)=> i != action.index);
        default:
            console.log('[Tasks Reducer] Invalid type', action.type);
            return state;
    }
}

module.exports = tasksReducer;