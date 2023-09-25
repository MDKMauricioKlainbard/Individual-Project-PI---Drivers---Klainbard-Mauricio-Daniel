import { URL_IMAGE_ERROR } from "../dataURL"

const imageHandlerError = (event) => {
    event.target.src = URL_IMAGE_ERROR;
}

export default imageHandlerError