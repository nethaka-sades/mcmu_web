'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import ytdl from 'ytdl-core';
import { Button } from '../ui/button';
import UnderDev from '../common/Under_Dev';



function App() {
  const [isLive, setIsLive] = useState(false);
  const [streamUrl, setStreamUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  // Fetch and subscribe to Supabase updates
  useEffect(() => {
    const fetchConfig = async () => {
      setStreamUrl("https://www.youtube.com/watch?v=QI2t35PLsCw");
      setIsLive(true);
    };
    fetchConfig();
  }, []);

  // Handle audio playback
  useEffect(() => {
    if (isLive && streamUrl) {
      ytdl(streamUrl, { filter: 'audioonly', quality: 'highestaudio' })
        .on('error', (err) => console.error('Error fetching stream:', err))
        .on('info', (info, format) => {
          setAudioUrl(format.url);
          if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play().catch(err => console.error('Playback error:', err));
          }
        });
    } else {
      setAudioUrl('');
    }
  }, [isLive, streamUrl]);

  return (
    <div className="App">
      <h1>My YouTube Radio</h1>
      {isLive && audioUrl ? (
        <div>
          <h2>Now Live!</h2>
          <audio ref={audioRef} controls autoPlay>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ) : (
        <h2>Radio is Offline</h2>
      )}
    </div>
  );
}

export default App;