import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import chatResponses from '../utils/chatbotResponses';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm AuraBot. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (userMessage) => {
    if (!userMessage.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: userMessage,
        sender: 'user',
        timestamp: new Date()
      }
    ]);

    setInput('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let botResponse = null;

      // Find matching response
      for (const key in chatResponses) {
        if (lowerInput.includes(key.toLowerCase())) {
          botResponse = chatResponses[key];
          break;
        }
      }

      if (!botResponse) {
        botResponse = "I'm not sure about that. Try asking about a specific calculator or type 'help'!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center hover:from-blue-700 hover:to-indigo-700 z-50 group hover:shadow-xl hover:shadow-blue-500/50 transition-all border border-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <MessageCircle size={26} className="group-hover:animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100%-2rem)] sm:w-full max-w-sm ${isMinimized ? 'h-auto' : 'h-[500px] max-h-[80vh]'} bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-3xl`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="font-semibold text-md leading-tight">AuraBot Assistant</h3>
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 rounded-md transition-colors"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md transition-colors"
                >
                  <X size={16} />
                </motion.button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-900/50 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.05 }}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[15px] shadow-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-blue-600 text-white rounded-br-sm'
                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700 rounded-bl-sm'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1 px-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start">
                      <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center shadow-sm">
                        <motion.div className="w-1.5 h-1.5 bg-blue-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} />
                        <motion.div className="w-1.5 h-1.5 bg-blue-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} />
                        <motion.div className="w-1.5 h-1.5 bg-blue-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} />
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-100 dark:border-gray-800 p-3 bg-white dark:bg-gray-900">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
                      placeholder="Type your message..."
                      className="w-full pl-4 pr-12 py-3 border border-gray-200 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-inner"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSendMessage(input)}
                      disabled={!input.trim()}
                      className={`absolute right-1 p-2 rounded-full transition-colors ${input.trim() ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' : 'bg-gray-200 text-gray-400 dark:bg-gray-700'}`}
                    >
                      <Send size={16} className={`transform ${input.trim() ? '-translate-y-px translate-x-[0.5px]' : ''}`} />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
