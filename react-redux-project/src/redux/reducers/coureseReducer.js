
export default function courseReducer(state =[] , action){

    switch(action.type){
        case "CREATE_COURSE":
        return [
            ...state , {...state.course}
        ]
        default:
        // the purpose of this default state 
        // so in case we have many reducer. redux will determine which one 
        // to use through the switch statement and this cause react 
        // to re render so it can also call the state 
        return state
        // 
    }
} 