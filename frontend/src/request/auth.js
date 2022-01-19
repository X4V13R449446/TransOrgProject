export const setToken = (token=null) => {
    return localStorage.setItem('authToken', token)
}

export const getToken = () => {
    return localStorage.getItem('authToken') || null
}

export const removeToken = () => {
    localStorage.removeItem('authToken')
}

export const getAuthHeaders = (extraData = {}) => {
    let token = getToken()
    const headers = {
        "headers": {
            "Authorization": `Token ${token}`,
            ...extraData
        }
    }
    return headers
}
