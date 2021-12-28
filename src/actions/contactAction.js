
import axios from 'axios'
export const GET_CONTACT_LIST = "GET_CONTACT_LIST"
export const ADD_CONTACT = "ADD_CONTACT"
export const DELETE_CONTACT = "DELETE_CONTACT"
export const DETAIL_CONTACT = "DETAIL_CONTACT"
export const UPDATE_CONTACT = "UPDATE_CONTACT"
const BASE_URL_DEV = "http://localhost:3000"
const BASE_URL_PROD = "https://my-json-server.typicode.com/epiii/nyamm-contact-api"
const END_POINT = '/contacts/'
const API = BASE_URL_PROD + END_POINT

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
        url: API,
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
    // console.log('2. action / addContact', dispatch, data);

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
        url: API,
        timeout: 100000,
        data: data,
    })
        .then((response) => {
            // console.log('3. action / axios / success add', response);
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
    // console.log('2. action / deleteContact', dispatch, id);

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
        url: API + id,
        timeout: 100000,
        data: id,
    })
        .then((response) => {
            // console.log('3. action / axios / success del', response);
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
            // console.log('3. action / axios / fail del', error);
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

export const detailContact = (dispatch, data) => {
    // console.log('1. action / detail contact', data);
    dispatch({
        type: DETAIL_CONTACT,
        payload: {
            data: data
        }
    })
}

export const updateContact = (dispatch, data) => {
    console.log('2. action / updateContact', dispatch, data);

    dispatch({
        type: UPDATE_CONTACT,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
    });

    axios({
        method: 'PUT',
        url: API + data.id,
        timeout: 100000,
        data: data,
    })
        .then((response) => {
            console.log('3. action / axios / success update', response);
            dispatch({
                type: UPDATE_CONTACT,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            })
        })
        .catch((error) => {
            console.log('3. action / axios / fail update', error);
            dispatch({
                type: UPDATE_CONTACT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            })
        })
}