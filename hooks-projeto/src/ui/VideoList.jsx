import React, { useContext } from 'react';
import Video from './Video';
import { videoStore } from '../data/video/VideoContext';

export default function VideoList(props) {

    const [videoState, videoDispatch] = useContext(videoStore);

    function onClick(video) {
        videoDispatch({
            type: 'SELECT',
            payload: video,
        })
    }

    return (
        <ul className='list'>
            {videoState.videos.map(item => (
                <Video key={item.url} video={item} onClick={onClick} />
            ))}
        </ul>
    );
}