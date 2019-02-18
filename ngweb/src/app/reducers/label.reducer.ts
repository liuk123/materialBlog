import * as actions from '../actions/label.action';

export interface State {};
export const initialState: State = [];

export function reducer(state = initialState, action: actions.Actions ): State {
    switch (action.type) {
        case actions.ActionTypes.LABEL_SCCESS:{
            return action.payload;
        }
        case actions.ActionTypes.LABEL_FAIL:{
            return initialState
        }
        default: {
            return state;
        }
    }
}