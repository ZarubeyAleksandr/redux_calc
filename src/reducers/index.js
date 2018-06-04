const calcState = {
	value: 0,
	btns: [ "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/" ]
}

let str = ''
let notToOper = ['+', '-', '*', '/']
let firstOper = ['*', '/']

export const calcReducer = (state = calcState, action) => {
    if (state.value === 0) {
        if (firstOper.indexOf(action.text) < 0){
            str = action.text; 
        }
        else str = state.value;
    } else if (state.value === '-') {
        if (action.text === '+') str = 0
        else if (firstOper.indexOf(action.text) < 0) str = state.value + action.text
        else state.value
    } else {
        if (notToOper.indexOf(action.text) >= 0) {
            if (notToOper.indexOf(String(state.value).slice(-1)) >=0 ) {
                str = state.value.slice(0, state.value.length-1) + action.text;
                console.log(str)
            } else str = state.value + action.text;
        } else str = state.value + action.text;
    } 

    switch(action.type){
        case 'ADD_ELEM':
            return{
                ...state,
                value: str
                
            }
        case 'CLEAR':
            return{
                ...state,
                value: 0
            }
        case 'EQUAL':
            return{
                ...state,
                value: eval(action.value)
            }
        default:
            return state;
    }
}
