import {
    ADD_CONTACT,
    DELETE_CONTACT,
    DETAIL_CONTACT,
    GET_CONTACT_LIST,
    UPDATE_CONTACT
} from '../../actions/contactAction';

const contact = (state, action) => {
    const { type } = action
    // console.log('4. reducer ', action);

    switch (type) {
        case GET_CONTACT_LIST:
            // console.log('4. reducer / get list', action);
            return {
                ...state,
                getContactResult: action.payload.data,
                getContactLoading: action.payload.loading,
                getContactError: action.payload.errorMessage
            }

        case ADD_CONTACT:
            // console.log('4. reducer / add contact', action);
            return {
                ...state,
                addContactResult: action.payload.data,
                addContactLoading: action.payload.loading,
                addContactError: action.payload.errorMessage
            }

        case DELETE_CONTACT:
            // console.log('4. reducer / delte contact', action);
            return {
                ...state,
                deleteContactResult: action.payload.data,
                deleteContactLoading: action.payload.loading,
                deleteContactError: action.payload.errorMessage
            }

        case UPDATE_CONTACT:
            console.log('4. reducer / update contact', action);
            return {
                ...state,
                updateContactResult: action.payload.data,
                updateContactLoading: action.payload.loading,
                updateContactError: action.payload.errorMessage
            }

        case DETAIL_CONTACT:
            // console.log('4. reducer / get detail contact', action);
            return {
                ...state,
                detailContactResult: action.payload.data
            }

        default:
            return state;
    }
}

export default contact