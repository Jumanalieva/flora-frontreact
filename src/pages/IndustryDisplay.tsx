import React from 'react';
import CultureDisplay from '../components/CultureDisplay';
import VideoFrame from '../components/VideoFrame2';
import { useCultureData } from '../custom_hooks/useCultureData';
import { Container, Typography, Box } from '@mui/material';
import Footer from '../components/Footer'; // Import Footer component

const IndustryDisplay: React.FC = () => {
    const { cultureData, loading } = useCultureData(1); // Fetching data from RDS for a specific culture entry
    const localVideoUrl = '/src/assets/media/gray_bottle2.mp4'; // Update the path to match your project structure

    if (loading) {
        return <Typography variant="h6" align="center">Loading...</Typography>;
    }

    if (!cultureData) {
        return <Typography variant="h6" align="center">No data found for this culture post.</Typography>;
    }

    return (
        <div className="pt-20 flex flex-col min-h-screen"> {/* Offset for fixed navbar */}
            {/* Video Frame Section */}
            <div className="w-full h-[40vh] mb-20">
                <VideoFrame videoUrl={localVideoUrl} /> {/* Pass local video URL */}
            </div>

            {/* Culture Content Section */}
            <Container maxWidth="md" className="flex-grow">
                <Box mt={4}>
                    <CultureDisplay cultureData={cultureData} /> {/* Pass cultureData as a prop */}
                </Box>
            </Container>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default IndustryDisplay;
