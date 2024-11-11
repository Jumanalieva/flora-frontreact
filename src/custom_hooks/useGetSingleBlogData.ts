import { useEffect, useState } from 'react';

interface BlogData {
    id: number;
    title: string;
    short_description: string;
    questions: string[];
    answers: string[];
}

export const useGetSingleBlogData = (id: number) => {
    const [blogData, setBlogData] = useState<BlogData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController(); // To handle cleanup
        const signal = controller.signal;

        const fetchData = async () => {
            try {
                setLoading(true); // Set loading to true on every fetch attempt
                setError(null);   // Reset error on every fetch attempt

                const response: Response = await fetch(`http://127.0.0.1:5000/api/blogs/${id}`, { signal });
                
                if (!response.ok) {
                    throw new Error(`Error fetching blog data: ${response.statusText}`);
                }

                const data: BlogData = await response.json();
                setBlogData(data);
            } catch (error) {
                if (error instanceof Error) {  // Type assertion for error
                    if (error.name === 'AbortError') {
                        console.log('Fetch aborted');
                    } else {
                        console.error('Error fetching blog data:', error.message);
                        setError('Failed to fetch blog data.');
                    }
                } else {
                    console.error('Unexpected error', error);
                    setError('An unexpected error occurred.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function to abort fetch if component unmounts
        return () => {
            controller.abort();
        };
    }, [id]);

    return { blogData, loading, error };
};
