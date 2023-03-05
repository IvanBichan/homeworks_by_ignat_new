const initState = {
    themeId: 1,
}

type ThemeReducerType = {
    themeId:number
}


export const themeReducer = (state:ThemeReducerType = initState, action: ChangeThemeIdType): ThemeReducerType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId:action.id}
        }
        // дописать


        default:
            return state
    }
}
type ChangeThemeIdType = {
    type:'SET_THEME_ID',
    id:number
}
export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
