import { GET_CONTACT_LIST } from '../../actions/contactAction';

const contact = (state, action) => {
    const { type } = action
    console.log('4. reducer ', action);

    switch (type) {
        case GET_CONTACT_LIST:
            console.log('5. reducer / get list', action);
            return {
                ...state,
                getContactResult: action.payload.data,
                getContactLoading: action.payload.loading,
                getContactError: action.payload.errorMessage
            }
            break;

        default:
            console.log('5. reducer / default', action);
            return state
            break;
    }
}

export default contact