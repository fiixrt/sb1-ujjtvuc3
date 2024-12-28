import { useState } from 'react';
import { Step } from '../types';
import { HelpCircle } from 'lucide-react';

interface QuestionProps {
  step: Step;
  onCorrectAnswer: () => void;
}

export function Question({ step, onCorrectAnswer }: QuestionProps) {
  const [showHint, setShowHint] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isWrong, setIsWrong] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (index === step.correctAnswer) {
      onCorrectAnswer();
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 1000);
    }
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <h3 className="text-xl font-medium text-gray-800">{step.question}</h3>
      
      <div className="space-y-3">
        {step.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              selectedAnswer === index
                ? isWrong
                  ? 'bg-red-100 border-red-300'
                  : 'bg-green-100 border-green-300'
                : 'bg-white hover:bg-pink-50'
            } border shadow-sm hover:shadow-md`}
          >
            {option}
          </button>
        ))}
      </div>

      {step.hint && (
        <div className="relative">
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-pink-600 flex items-center gap-2 text-sm hover:text-pink-700"
          >
            <HelpCircle className="w-4 h-4" />
            {showHint ? 'Ocultar pista' : 'Ver pista'}
          </button>
          {showHint && (
            <p className="mt-2 text-sm text-gray-600 italic">{step.hint}</p>
          )}
        </div>
      )}
    </div>
  );
}