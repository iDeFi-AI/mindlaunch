'use client';

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import mindlaunch from 'public/mindlaunch.png'; // Main button image
import agent from 'public/agent.png'; // Agent image within the interface

export default function AIAgentInterface({ narrativeStyle }: { narrativeStyle: string }) {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  // isOpen controls whether the interface is visible,
  // isClosing is used to trigger the fade-out before unmounting.
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Use constants for model and temperature behind the scenes.
  const model = 'gpt-4o-mini';
  const temperature = 0.7;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput) return;

    setLoading(true);
    setAiResponse('');

    try {
      const prompt = `${narrativeStyle}: ${userInput}`;
      const response = await axios.post('/api/openai', { prompt, model, temperature });
      setAiResponse(response.data.response);
    } catch (error) {
      setAiResponse('Error communicating with the AI. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    // Start fade-out transition
    setIsClosing(true);
    // After transition duration (500ms), unmount the interface.
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Toggle Button for Collapsible UI */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white hover:bg-black rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-500 w-16 h-16 overflow-hidden"
          title="Open AI-Agent Interface"
          aria-label="Open AI-Agent Interface"
        >
          <Image
            src={mindlaunch}
            alt="MindLaunch"
            fill
            className="object-cover"
          />
        </button>
      )}

      {/* Expanded AI-Agent Interface */}
      {(isOpen || isClosing) && (
        <div
          className={`relative w-full max-w-md p-6 bg-white text-black rounded-lg shadow-lg transition-all duration-500 ${
            isClosing ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 bg-black text-white hover:bg-gray-800 rounded-full cursor-pointer transition-all duration-300"
            aria-label="Close AI-Agent Interface"
            title="Close AI-Agent Interface"
          >
            <span className="text-xl font-bold">&times;</span>
          </button>

          {/* Header with Agent Icon */}
          <div className="flex flex-col items-center justify-center space-y-3 mb-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300">
              <Image
                src={agent}
                alt="Agent"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold">MindLaunch Advisor</h1>
          </div>
          <p className="text-center text-sm mb-4 text-gray-600">
            Ask me questions or get more info about MindLaunch.AI
          </p>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="w-full p-4 rounded border bg-gray-100 text-black resize-none"
              rows={5}
              placeholder="Ask me something..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              aria-label="User Input"
              title="Enter your question or request for the AI Advisor"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded cursor-pointer"
              disabled={loading}
              aria-label="Send Input to AI Advisor"
              title="Send Input to AI Advisor"
            >
              {loading ? 'Processing...' : 'Send'}
            </button>
          </form>

          {/* AI Response */}
          <div className="mt-6 bg-gray-100 p-4 rounded max-h-72 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-2">Response:</h3>
            <div className="text-black whitespace-pre-line">
              {aiResponse || 'Awaiting response...'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
