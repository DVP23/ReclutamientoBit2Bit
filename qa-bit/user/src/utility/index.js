import axios from "axios";

export const serverCall = async ({ type, url, body = null, success = null, fail = null, showAlertError = true, responseType = "json" }) => {
    type = type.toUpperCase();
    await axios({
        method: type,
        url: `http://localhost:3030/${url}`,
        data: body,
        responseType,
        config: {withCredentials: true},
    }).then((response) => {
        if (success) success(response.data, response);
    }).catch((error) => {
        if (fail) fail(error);
        // if (error.status !== 500) Alert(`Error ${error.response && error.response.status ? error.response.status : error.toString()}`, "error");
        // else if (showAlertError) Alert(error.error, "error");
    });
};
