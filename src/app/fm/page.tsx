"use client";
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import UnderDev from "@/components/common/Under_Dev";

export default function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const streamUrl =
    "https://beds-moments-rhythm-our.trycloudflare.com/test1/index.m3u8";

  useEffect(() => {
    if (streamUrl && audioRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(audioRef.current);
      } else if (
        audioRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        audioRef.current.src = streamUrl;
      }
    }
  }, [streamUrl]);

  if (!streamUrl) return <p>🚫 No live stream is active right now.</p>;

  return (
    <main>
      <UnderDev />
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl mb-6 font-bold">🔊 FM Mahanama - Live</h1>
        <audio ref={audioRef} controls autoPlay className="w-full max-w-md" />
        <p className="text-sm mt-2 opacity-70">
          Streaming securely from a verified source.
        </p>
      </div>
    </main>
  );
}
