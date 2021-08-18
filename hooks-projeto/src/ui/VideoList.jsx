import React from 'react';
import Video from './Video';

const _list = [
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


export default function VideoList(props) {

    function onClick(video) {
        console.log(video)
    }

    return (
        <ul className='list'>
            {_list.map(item => (
                <Video key={item.id} video={item} onClick={onClick} />
            ))}
        </ul>
    );
}