import React from 'react';
import CulinaryDisplay from '../components/CulinaryDisplay';
import { CulinaryData } from '../custom_hooks/CulinaryData';
import { Container, Typography, Box } from '@mui/material';
import Layout from '../components/Layout';

const CulinaryDisplayPage: React.FC = () => {
    const { culinaryData, loading } = CulinaryData(1); // Fetching data from RDS for a specific culinary entry
    const videoUrl = '/src/assets/media/herbs.mp4'; // Update to match your video path

    if (loading) {
        return (
            <Layout>
                <Typography variant="h6" align="center">Loading...</Typography>
            </Layout>
        );
    }

    if (!culinaryData) {
        return (
            <Layout>
                <Typography variant="h6" align="center">No data found for this culinary post.</Typography>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Culinary Content Section with Overlay */}
                <div className="relative z-10 w-full h-full bg-black bg-opacity-50 overflow-y-auto">
                    <Container maxWidth="md" className="py-8">
                        <Box mt={4}>
                            <CulinaryDisplay culinaryData={culinaryData} /> {/* Pass culinaryData as a prop */}
                        </Box>
                    </Container>
                </div>
            </div>
        </Layout>
    );
};

export default CulinaryDisplayPage;

