export default function closureStartApp (navigate) {
    return function startApp () {
        navigate('/home')
    }
}