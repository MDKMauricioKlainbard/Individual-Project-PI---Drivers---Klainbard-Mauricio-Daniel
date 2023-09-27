export default function closureGoHome (dispatch, searchStatus) {
    return function goHome(event) {
        dispatch(searchStatus(false))
    }
}