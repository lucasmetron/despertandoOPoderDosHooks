import React, { createContext } from 'react';

const state = {
    selectedVideo: {

        id: 213485,
        title: 'Céu',
        duration: 23,
        url: 'https://cdn.videvo.net/videvo_files/video/premium/getty_12/large_watermarked/istock-699878140_preview.mp4',
        cover: 'https://images.freeimages.com/images/large-previews/700/road-to-nowhere-1383109.jpg'

    },

    videos: [
        {
            id: 213485,
            title: 'Céu',
            duration: 23,
            url: 'https://cdn.videvo.net/videvo_files/video/premium/getty_12/large_watermarked/istock-699878140_preview.mp4',
            cover: 'https://images.freeimages.com/images/large-previews/700/road-to-nowhere-1383109.jpg'
        },

        {
            id: 67956,
            title: 'Céu',
            duration: 23,
            url: 'https://cdn.videvo.net/videvo_files/video/premium/getty_12/large_watermarked/istock-699878140_preview.mp4',
            cover: 'https://images.freeimages.com/images/large-previews/700/road-to-nowhere-1383109.jpg'
        },

        {
            id: 64988,
            title: 'Céu',
            duration: 23,
            url: 'https://cdn.videvo.net/videvo_files/video/premium/getty_12/large_watermarked/istock-699878140_preview.mp4',
            cover: 'https://images.freeimages.com/images/large-previews/700/road-to-nowhere-1383109.jpg'
        },

        {
            id: 2154,
            title: 'Céu',
            duration: 23,
            url: 'https://cdn.videvo.net/videvo_files/video/premium/getty_12/large_watermarked/istock-699878140_preview.mp4',
            cover: 'https://images.freeimages.com/images/large-previews/700/road-to-nowhere-1383109.jpg'
        },
    ]
}

export const videoStore = createContext(state)

const { Provider } = videoStore;

export function VideoContext(props) {

    return (
        <Provider value={[state]} >
            {props.children}
        </Provider>
    );
}