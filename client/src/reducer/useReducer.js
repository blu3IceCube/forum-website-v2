export const initialState = false

export const authReducer = (state, action) => {
    if(action.type === 'USER') {
        console.log('action payload',action.payload)
        return action.payload
    }
    return state
}