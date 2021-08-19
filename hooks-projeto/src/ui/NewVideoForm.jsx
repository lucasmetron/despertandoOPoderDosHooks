import React, { useState } from 'react';

export default function NewVideoForm(props) {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [url, setUrl] = useState('');
    const [cover, setCover] = useState('');

    function save() {
        const newVideo = {
            title: title,
            duration: duration,
            url: url,
            cover: cover
        }

        console.log(newVideo)
        reset()
    }

    function reset() {
        setTitle('');
        setDuration('');
        setCover('');
        setUrl('');
    }

    return (
        <div className='form'>
            <label> Título:</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />

            <label> Duração:</label>
            <input type="text" value={duration} onChange={(event) => setDuration(event.target.value)} />

            <label> Vídeo:</label>
            <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />

            <label> Capa:</label>
            <input type="text" value={cover} onChange={(event) => setCover(event.target.value)} />

            <button onClick={save}>Salvar</button>
        </div>
    );
}