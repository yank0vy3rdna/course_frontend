export function verify(token) {
    // fetch(
    //     "/api/"
    // )
    return true
}

export function auth(username, password, setToken) {
    // setToken()
}

export function register(username, password) {

}

export function refresh(token, setToken) {

}

export function isLogin(token) {
    if (token)
        return token['access'] !== undefined
    return false
}