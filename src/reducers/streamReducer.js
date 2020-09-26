import _ from "lodash";
import * as type from "../actions/type";

export default (state= {}, action) => {
    switch(action.type)
    {
        case type.CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case type.FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, "id")};
        case type.FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case type.EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case type.DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}