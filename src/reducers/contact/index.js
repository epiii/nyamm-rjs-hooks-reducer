import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACT_LIST } from '../../actions/contactAction';

const contact = (state, action) => {
    const { type } = action
    console.log('4. reducer ', action);

    switch (type) {
        case GET_CONTACT_LIST:
            // console.log('5. reducer / get list', action);
            return {
                ...state,
                getContactResult: action.payload.data,
                getContactLoading: action.payload.loading,
                getContactError: action.payload.errorMessage
            }

        case ADD_CONTACT:
            console.log('5. reducer / add contact', action);
            return {
                ...state,
                addContactResult: action.payload.data,
                addContactLoading: action.payload.loading,
                addContactError: action.payload.errorMessage
            }

        case DELETE_CONTACT:
            console.log('5. reducer / delte contact', action);
            return {
                ...state,
                deleteContactResult: action.payload.data,
                deleteContactLoading: action.payload.loading,
                deleteContactError: action.payload.errorMessage
            }

        default:
            // console.log('5. reducer / default', action);
            return state
            break;
    }
}

export default contact