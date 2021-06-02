const initialState = {
    error: false,
    login: '',
    avatar_url: '',
    userUrl: '',
    followers: 0,
    following: 0,
    name: '',
    repArr: [],
    currentPage: 1, 
    public_repos: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "GET_USER": 
            const {data} = action.payload;
            return {
                ...state,
                login: data.login,
                name: data.name,
                avatar_url: data.avatar_url,
                userUrl: data.html_url,
                followers: data.followers,
                following: data.following,
                public_repos: data.public_repos,
                error: false
            }
        case "GET_USERS_REPOS": 
            const {repArr} = action.payload;
            return {
                ...state,
                repArr: [...repArr]
            }
        case "SET_ERROR_REP": 
            return {
                ...state,
                repArr: []
            }
        case "SET_ERROR": 
            return {
                ...state,
                error: true
            }
        case "SET_PAGE":
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export default reducer;