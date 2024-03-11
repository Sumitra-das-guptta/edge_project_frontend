import axios from "axios";

// Create New ATL Job
export const CreateApplicant = (formData) => {

    return (
        axios.post(`http://127.0.0.1:8000/api/candidates`, formData, {
            headers: {
                // 'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                return [true, response]

            })
            .catch(err => {
                console.log(err);
                if (err.response) {
                    // Request made and server responded
                    if (err?.response?.data?.status === 422) {
                        let dummy_message = '';
                        if (err?.response?.data?.errors?.identityNo?.[0] !== undefined
                            && err?.response?.data?.errors?.email?.[0] !== undefined) {
                            dummy_message = 'National ID number and email address already taken'
                        }
                        else if (err?.response?.data?.errors?.identityNo?.[0] === undefined
                            && err?.response?.data?.errors?.email?.[0]) {
                            dummy_message = 'Email address already taken'
                        }
                        else {
                            dummy_message = 'National ID number already taken'
                        }
                        return ([false, dummy_message])
                    }
                    else {
                        return ([false, err.response.data?.message])
                    }

                } else if (err.request) {
                    // The request was made but no response was received
                    return ([false, err.message])

                } else {
                    // Something happened in setting up the request that triggered an Error
                    return ([false, err.message])
                }
            })
    )
};

// Create New ATL Job
export const CreateOTPForLogIn = (email) => {
    let data = new FormData();
    data.append('email', email);
    return (
        axios.post(`http://127.0.0.1:8000/api/request-otp`, data, {
            // headers: {
            //     // 'Authorization': 'Bearer ' + token,
            //     'Content-Type': 'application/json'
            // }
        })
            .then((response) => {
                return [true, response]

            })
            .catch(err => {
                console.log(err);
                if (err.response) {debugger
                    // Request made and server responded
                    if (err?.response?.status === 500) {
                        return ([false, 'Something went wrong!'])
                    }
                    else {
                        return ([false, err.response.data?.message])
                    }

                } else if (err.request) {
                    // The request was made but no response was received
                    return ([false, err.message])

                } else {
                    // Something happened in setting up the request that triggered an Error
                    return ([false, err.message])
                }
            })
    )
};

export const ValidateOTPForLogIn = (otp, email) => {
    let data = new FormData();
    data.append('email', email);
    data.append('otp', otp);

    return (
        axios.post(`http://127.0.0.1:8000/api/verify-otp`, data, {
            // headers: {
            //     // 'Authorization': 'Bearer ' + token,
            //     'Content-Type': 'application/json'
            // }
        })
            .then((response) => {
                return [true, response]

            })
            .catch(err => {
                console.log(err);
                
                if (err.response) {
                    // Request made and server responded
                    if (err?.response?.status == 500) {
                        return ([false, 'Something went wrong!'])
                    }
                    else {
                        return ([false, err.response.data?.message])
                    }

                } 
                 else if (err.request) {
                    // The request was made but no response was received
                    return ([false, err.message])

                } else {
                    // Something happened in setting up the request that triggered an Error
                    return ([false, err.message])
                }
            })
    )
};
