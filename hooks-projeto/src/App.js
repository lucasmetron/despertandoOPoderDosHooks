import React from 'react'
import './App.css';
import VideoList from './ui/VideoList';
import NewVideoForm from './ui/NewVideoForm';
import VideoPlayer from './ui/VideoPlayer'
import { VideoContext } from './data/video/VideoContext';


function App() {
  return (
    <VideoContext>
      <div className="App">
        <NewVideoForm />
        <VideoPlayer />
        <VideoList />
      </div>
    </VideoContext>

  );
}

export default App;
