import { useState } from "react";

// Define the type for the API response from OpenAI
type ChatGPTResponse = {
    choices: { message: { content: string } }[];
};

// Define the return type for the useChatGPT hook
interface UseChatGPTReturn {
    response: string | null;
    loading: boolean;
    error: string | null;
    getAnswer: (query: string) => Promise<void>;
}

export function useChatGPT(): UseChatGPTReturn {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<string | null>(null);

    async function getAnswer(query: string) {
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const res = await fetch("http://localhost:5000/api/get_answer", {  // Adjust to match your Flask server URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            });

            if (!res.ok) {
                throw new Error(`API error: ${res.status}`);
            }

            const result: ChatGPTResponse = await res.json();
            setResponse(result.choices[0].message.content);
        } catch (err) {
            setError("Error fetching data from ChatGPT.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return { response, loading, error, getAnswer };
}
