export const myState = [];

export function MyReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: Date.now() }];
        case 'REMOVE':
            return state.filter(item => item.id !== action.payload);
        case 'UPDATE':
            return state.map(item => (item.id !== action.payload.id ? item : action.payload));
        default:
            return state;
    }
}