export default function closureGoForm(navigate) {
    return function goForm() {
        navigate('/home/form')
    }
}