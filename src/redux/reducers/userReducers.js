
const initialState = {
    data: {}
}

function userReducers(state = initialState, action) {

    switch (action.type) {
        
        case 'GET_USER':
            return {
                data: action.data
            }

        default:
            return state
    }
}

export default userReducers