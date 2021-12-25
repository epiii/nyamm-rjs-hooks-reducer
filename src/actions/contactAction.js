
import axios from 'axios'
export const GET_CONTACT_LIST = "GET_CONTACT_LIST"

export const getContactList = (dispatch) => {
    console.log('2. action / getContactList', dispatch);

    dispatch({
        type: GET_CONTACT_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });

    axios({
        method: 'GET',
        url: 'http://localhost:3000/contacts',
        timeout: 100000,
    })
        .then((response) => {
            console.log('3. action / axios / success', response.data);
            dispatch({
                type: GET_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            })
        })
        .catch((error) => {
            console.log('3. action / axios / fail', error);
            dispatch({
                type: GET_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            })
        })
}
