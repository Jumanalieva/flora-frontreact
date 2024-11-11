import React from 'react';
import BlogDisplay from '../components/BlogDisplay';
import VideoFrame from '../components/VideoFrame';
import { useGetSingleBlogData } from '../custom_hooks/useGetSingleBlogData';
import { Container, Typography, Box } from '@mui/material';
import Layout from '../components/Layout'; // Import Layout component

const PlantMemoir: React.FC = () => {
    const { blogData, loading } = useGetSingleBlogData(1); // Fetching data from RDS
    const localVideoUrl = '/src/assets/media/fall_leaves.mp4'; // Ensure the path matches your project structure

    if (loading) {
        return (
            <Layout>
                <Typography variant="h6" align="center">Loading...</Typography>
            </Layout>
        );
    }

    if (!blogData) {
        return (
            <Layout>
                <Typography variant="h6" align="center">No data found for this blog post.</Typography>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="pt-20"> {/* Offset for fixed navbar */}
                {/* Video Frame Section */}
                <div className="w-full h-[40vh] mb-20">
                    <VideoFrame videoUrl={localVideoUrl} /> {/* Pass local video URL */}
                </div>

                {/* Blog Content Section */}
                <Container maxWidth="md">
                    <Box mt={4}>
                        <BlogDisplay blogData={blogData} /> {/* Pass blogData as a prop */}
                    </Box>
                </Container>
            </div>
        </Layout>
    );
};

export default PlantMemoir;
