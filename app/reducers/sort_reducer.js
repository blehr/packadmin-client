import { SORT_BY } from '../actions';

export default function(state = 'all', action) {
    switch(action.type) {
    case SORT_BY:
        return action.payload;
    default:
        return state;
    }
}