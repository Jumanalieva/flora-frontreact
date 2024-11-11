import React, { useRef, useState, useEffect } from 'react';

interface VideoFrameProps {
    videoUrl: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({ videoUrl }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true); // Start with the video playing
    const [isMuted, setIsMuted] = useState(true);

    // Toggle play/pause functionality
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Toggle mute/unmute functionality
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Ensure the video auto-plays on load
    useEffect(() => {
        if (videoRef.current && isPlaying) {
            videoRef.current.play();
        }
    }, [isPlaying]);

    return (
        <div className="relative w-full h-[35vh] px-20 flex items-center justify-center">
            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                autoPlay
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Custom Controls */}
            <div className="absolute bottom-3 right-24 flex space-x-4">
                {/* Play/Pause Button */}
                <button onClick={togglePlayPause} className="text-l text-white">
                    {isPlaying ? 'Pause' : '▶️'}
                </button>

                {/* Mute/Unmute Button */}
            </div>
        </div>
    );
};

export default VideoFrame;