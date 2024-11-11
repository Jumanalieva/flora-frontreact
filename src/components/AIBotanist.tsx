import React from 'react';
import SearchBar from '../components/SearchBar';
import { useChatGPT } from '../custom_hooks/useChatGPT';

const AI_Botanist: React.FC = () => {
  const { response, loading, error, getAnswer } = useChatGPT();

  const handleSearch = (query: string) => {
    getAnswer(query);
  };

  return (
    <div className="pt-10 max-w-3xl mx-auto"> {/* Added top padding to prevent overlap */}
      {/* Page Title and Introduction */}
      <h1 className="text-center text-4xl font-bold mb-10 text-green-600">BotaniQ AI</h1>
      <p className="text-center text-green-500 mb-5">
        Feeling curious? Dive into rich resources, explore relevant events, and gain insights!
      </p>
      
      {/* SearchBar Component */}
      <div className="mb-6">
        <SearchBar 
          placeholder="Enter your question..." 
          onSearch={handleSearch} 
        />
      </div>
      
      {/* Display Response, Loading, and Error Messages */}
      <div className="mt-4" aria-live="polite">
        {loading && <p className="text-center text-red-500">Gathering information for your request...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {response && (
          <div className="bg-gray-100 p-8 rounded-md shadow-md mt-4 text-gray-700 max-h-96 overflow-y-auto">
            <p className="whitespace-pre-line">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AI_Botanist;
