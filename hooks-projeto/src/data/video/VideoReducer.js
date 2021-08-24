import { StorageService } from "../services/StorageService";


export const videoInitialState = {
    selectedVideo: {},

    videos: StorageService.get('videoList', [])

}

export function videoReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const newList = [...state.videos, action.payload]
            StorageService.set('videoList', newList)
            return { ...state, videos: newList };

        case 'SELECT':
            return { ...state, selectedVideo: action.payload }

        default:
            return state;
    }
}