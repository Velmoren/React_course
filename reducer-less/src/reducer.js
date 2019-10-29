const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'PLUS':
            return +state + 1;
        case 'MINUS':
            return +state - 1;
        case 'RESET':
            return state = 0;
        case 'DOWNLOAD':
            return state = action.func
        default:
            return state;
    }
}

export default reducer;