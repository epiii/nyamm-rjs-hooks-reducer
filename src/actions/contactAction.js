
import axios from 'axios'
export const GET_CONTACT_LIST = "GET_CONTACT_LIST"
export const ADD_CONTACT = "ADD_CONTACT"
export const DELETE_CONTACT = "DELETE_CONTACT"

export const getContactList = (dispatch) => {
    // console.log('2. action / getContactList', dispatch);

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
            // console.log('3. action / axios / success', response.data);
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
            // console.log('3. action / axios / fail', error);
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

export const addContact = (dispatch, data) => {
    console.log('2. action / addContact', dispatch, data);

    dispatch({
        type: ADD_CONTACT,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });

    axios({
        method: 'POST',
        url: 'http://localhost:3000/contacts',
        timeout: 100000,
        data: data,
    })
        .then((response) => {
            console.log('3. action / axios / success', response);
            dispatch({
                type: ADD_CONTACT,
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
                type: ADD_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            })
        })
}

export const deleteContact = (dispatch, id) => {
    console.log('2. action / deleteContact', dispatch, id);

    dispatch({
        type: DELETE_CONTACT,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });

    axios({
        method: 'DELETE',
        url: 'http://localhost:3000/contacts/' + id,
        timeout: 100000,
        data: id,
    })
        .then((response) => {
            console.log('3. action / axios / success', response);
            dispatch({
                type: DELETE_CONTACT,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            })
        })
        .catch((error) => {
            console.log('3. action / axios / fail del', error);
            dispatch({
                type: DELETE_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            })
        })
}