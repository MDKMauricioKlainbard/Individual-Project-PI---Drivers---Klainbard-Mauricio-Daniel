import regex from './regex';

const {regexText,urlRegExp,regexTextWithSpace,regexTextWithSpaceAndNumbers} = regex;
const validate = (errors, {name,surname,nationality,datebirth, description,image, Teams}) => {
    if (!regexText.test(name)) {
        errors.name = 'There must be a name. It cannot contain special symbols (spaces, numbers or special characters)'
    } else errors.name = ''
    if (!regexText.test(surname)) {
        errors.surname = 'There must be a last name. It cannot contain special symbols (spaces, numbers or special characters)'
    } else errors.surname = '';
    if (!urlRegExp.test(image)) {
        errors.image = 'It must be a valid URL, otherwise an image will be displayed by default.'
    } else errors.image = '';
    if (!regexTextWithSpace.test(nationality)) {
        errors.nationality = 'Nationality cannot contain special characters or numbers.'
    } else errors.nationality = '';
    if (!regexTextWithSpaceAndNumbers.test(description) || description.length < 20) {
        errors.description = 'The description must be at least 20 characters.'
    } else errors.description = '';
    if (!datebirth) {
        errors.datebirth = 'There must be a date of birth.';
    } else errors.datebirth = '';
    if (!Teams) {
        errors.Teams = 'There must be a team.';
    } else errors.Teams = '';
    return errors
}

export default validate