import React from 'react';
import { Link } from 'react-router-dom';
import VideoFrame from '../components/VideoFrame2';
import FloraInsight from '../components/FloraInsight';
import Card from '../components/Card';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer'; // Import Footer component

const LandingPage: React.FC = () => {
  const localVideoUrl = '/src/assets/media/f_field.mp4';

  return (
    <div className="pt-20 flex flex-col min-h-screen">
      {/* Video Section */}
      <div className="mb-8">
        <VideoFrame videoUrl={localVideoUrl} />
      </div>

      {/* FloraInsight Text Section */}
      <div className="mb-8">
        <FloraInsight text="Glimpse into the soul of flora, blossoming into cultural treasures around us. Not through a textbook, but a gentle dose of beauty and a quiet whisper of wisdom." />
      </div>

      {/* Featured Section */}
      <div className="container mx-auto mt-0 font-playfair p-10 font-regular flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <LargeCard
            imageUrl="/src/assets/media/cinn_horizontal.jpeg"
            title="Cinnamon: A Cultural Icon and Industry Powerhouse"
            link="/plant"
          />
          <Card
            imageUrl="/src/assets/media/G_flora.jpeg"
            title="The Art of Crafting Spicy Scents"
            link="/industry"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <Card
            imageUrl="/src/assets/media/latte2.jpg"
            title="Story of the day"
            link="/plant"
          />
          <Card
            imageUrl="/src/assets/media/pastry.jpeg"
            title="Fall essence in your kitchen"
            link="/culinary"
          />
          <Card
            imageUrl="/src/assets/media/white_lib.jpeg"
            title="Discover More Resources"
            link="/botanistAI"
          />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;
