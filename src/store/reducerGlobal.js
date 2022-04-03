const initialState = {
    connection: true,
}

export const reducerGlobal = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_CONNECTION':
            return {
                ...state,
                connection: action.connection,
            };

        default:
            return {
                ...state,
            };
    }
}