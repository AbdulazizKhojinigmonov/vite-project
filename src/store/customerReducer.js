

const initialState = {
    customer : [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const GET_CUSTOMER = 'GET_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CUSTOMER':
        return {...state,customer: [...state.customer,{ id: Date.now(),id:action.payload}]}
        case 'GET_CUSTOMER':
        return {...state,customer: state.customer.filter((customer) => customer.id !== action.payload)}
        case 'REMOVE_CUSTOMER':
        return {...state,customer: state.customer.filter((customer) => customer.id !== action.payload)}
        default:
        return state
    }
}
 