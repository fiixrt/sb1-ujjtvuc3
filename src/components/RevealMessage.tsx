import { useState, useEffect } from 'react';
import { Message } from '../types';
import { Sparkles } from 'lucide-react';

interface RevealMessageProps {
  messages: Message[];
  onComplete: () => void;
}

export function RevealMessage({ messages, onComplete }: RevealMessageProps) {
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);

  useEffect(() => {
    messages.forEach((message, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, message.text]);
        if (index === messages.length - 1) {
          setTimeout(onComplete, 1000);
        }
      }, message.delay);
    });
  }, [messages, onComplete]);

  return (
    <div className="space-y-4 text-center">
      {visibleMessages.map((message, index) => (
        <p
          key={index}
          className="text-xl font-serif text-gray-800 animate-fade-in flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
          {message}
        </p>
      ))}
    </div>
  );
}