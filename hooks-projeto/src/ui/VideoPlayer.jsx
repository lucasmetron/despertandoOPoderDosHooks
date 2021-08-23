import React, { useEffect, useRef, useState } from 'react';
import { TimeService } from '../data/services/TimeService'

const selectedVideo = {

    id: 213485,
    title: 'Céu',
    duration: 23,
    url: 'https://cdn.videvo.net/videvo_files/video/premium/getty_12/large_watermarked/istock-699878140_preview.mp4',
    cover: 'https://images.freeimages.com/images/large-previews/700/road-to-nowhere-1383109.jpg'

}

export default function VideoPlayer(props) {

    const video = selectedVideo;
    const videoRef = useRef();
    const progressTimer = useRef();
    const [isPlaying, setPlay] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.addEventListener('play', play);
        videoElement.addEventListener('pause', pause);
        videoElement.addEventListener('seeked', onProgress);
        setTime(0);
        pause();
        console.log(video.url && ('teste'))
        return () => {
            videoElement.removeEventListener('play', play);
            videoElement.removeEventListener('pause', pause);
            videoElement.removeEventListener('seeked', onProgress);
        }

    }, [video]);

    useEffect(() => {
        clearInterval(progressTimer.current)
        if (isPlaying) {
            progressTimer.current = setInterval(() => { onProgress() }, 1000)

        }

    }, [isPlaying])

    function play() {
        videoRef.current.play();
        setPlay(true)
    }

    function pause() {
        videoRef.current.pause();
        setPlay(false)
    }

    function onProgress() {
        setProgress(videoRef.current.currentTime);
    }

    function onChangeProgress(event) {
        setTime(event.target.value);
    }

    function setTime(time) {
        videoRef.current.currentTime = time;
        onProgress();
    }

    return (
        <div className='video-player'>
            <video src={video.url} ref={videoRef} />
            {video.url && (
                <>
                    <div className='controls'>
                        <button onClick={isPlaying ? pause : play}>{isPlaying ? '[]' : '|>'}</button>
                        <span>{TimeService.formatTime(Math.round(progress))} / {TimeService.formatTime(video.duration)}</span>
                        <input type="range" min={0} max={video.duration} step={.1} value={progress} onChange={onChangeProgress} />
                    </div>
                    <h2>{video.title}</h2>
                </>
            )}

        </div>
    );
}