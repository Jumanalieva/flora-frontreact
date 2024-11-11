import { useEffect, useState } from 'react';

interface BlogData {
    id: number;  // Changed from string to number
    title: string;
    introduction: string;
    sections: { heading: string; content: string }[];
}

export const useGetSingleBlogData = (id: number) => {  // Changed from string to number
    const [blogData, setBlogData] = useState<BlogData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/blogs/${id}`);
                
                if (!response.ok) {
                    throw new Error(`Error fetching blog data: ${response.statusText}`);
                }

                const data = await response.json();
                setBlogData(data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { blogData, loading };
};

