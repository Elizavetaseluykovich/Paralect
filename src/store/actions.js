import axios from "axios"

export function getUser(userName) {
    return async (dispatch) => {
        axios(`https://api.github.com/users/${userName}`)
        .then(response => {
            dispatch({type: "GET_USER", payload: {
                data: response.data
            }});
        }).catch(() => {
            dispatch({type: "SET_ERROR"});
        })
    }
}

export function getRepositories(userName, currentPage, per_page) {
    return async (dispatch) => {
        axios(`https://api.github.com/users/${userName}/repos?per_page=${per_page}&page=${currentPage}`)
        .then(response => {
            console.log(response.data);
            dispatch({type: "GET_USERS_REPOS", payload: {repArr: response.data}});
        }).catch(() => {
            dispatch({type: "SET_ERROR_REP"});
        })
    }
}