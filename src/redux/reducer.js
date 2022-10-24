const data = {
    inputValue: 0,
    name: 'hhh'
}

export default (state = data, action) => {
    let newState = {...state};
    if (action.type === 'add') {
        newState.inputValue += action.inputValue;
        newState.name = action.name;
    }

    return newState;
}