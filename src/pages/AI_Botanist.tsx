// src/pages/AI_Botanist.tsx
import React from 'react';
import AIBotanist from '../components/AIBotanist'; // Ensure this path is correct

const AI_Botanist: React.FC = () => {
  const videoUrl = '/src/assets/media/reading.mp4'; // Update this path to your actual video file

  return (
    <div className="relative w-full h-screen overflow-y: auto">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoUrl}
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        

        {/* AIBotanist Component */}
        <AIBotanist />
      </div>
    </div>
  );
};

export default AI_Botanist;

