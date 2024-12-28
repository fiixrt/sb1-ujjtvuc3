import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { reasons, poem, messages, finalThoughts } from './data/content';
import { ReasonCard } from './components/ReasonCard';
import { PoemDisplay } from './components/PoemDisplay';
import { FinalQuestion } from './components/FinalQuestion';
import { InteractiveHeart } from './components/InteractiveHeart';

type Stage = 'welcome' | 'reasons' | 'poem' | 'messages' | 'question' | 'end';

export default function App() {
  const [stage, setStage] = useState<Stage>('welcome');
  const [messageIndex, setMessageIndex] = useState(0);

  const nextStage = () => {
    setStage((prev) => {
      switch (prev) {
        case 'welcome':
          return 'reasons';
        case 'reasons':
          return 'poem';
        case 'poem':
          return 'messages';
        case 'messages':
          return 'question';
        default:
          return prev;
      }
    });
  };

  const handleAnswer = (answer: boolean) => {
    if (answer) setStage('end');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-100">
      <div className="max-w-md mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {stage === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-pink-600 mb-8">Laura</h1>
              <p className="text-xl text-gray-700 mb-8 font-serif italic">
                Hay algo que necesito decirte...
              </p>
              <button
                onClick={nextStage}
                className="px-8 py-3 bg-pink-500 text-white rounded-full text-lg hover:bg-pink-600 transition-colors"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {stage === 'reasons' && (
            <motion.div
              key="reasons"
              className="space-y-6"
              exit={{ opacity: 0 }}
            >
              <h2 className="text-2xl font-bold text-center text-pink-600 mb-8">
                Las Razones de Mi Corazón
              </h2>
              {reasons.map((reason, index) => (
                <ReasonCard
                  key={reason.id}
                  title={reason.title}
                  description={reason.description}
                  Icon={reason.icon}
                  delay={index * 0.3}
                />
              ))}
              <div className="text-center mt-8">
                <button
                  onClick={nextStage}
                  className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}

          {stage === 'poem' && (
            <motion.div
              key="poem"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-pink-600 mb-8">
                {poem.title}
              </h2>
              <PoemDisplay verses={poem.verses} />
              <button
                onClick={nextStage}
                className="mt-8 px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {stage === 'messages' && (
            <motion.div
              key="messages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <p className="text-xl text-gray-700 font-serif italic">
                  {messages[messageIndex].content}
                </p>
              </motion.div>
              {messageIndex < messages.length - 1 ? (
                <button
                  onClick={() => setMessageIndex((prev) => prev + 1)}
                  className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  onClick={nextStage}
                  className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                >
                  Continuar
                </button>
              )}
            </motion.div>
          )}

          {stage === 'question' && <FinalQuestion onAnswer={handleAnswer} />}

          {stage === 'end' && (
            <motion.div
              key="end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <InteractiveHeart />
              <h2 className="text-3xl font-bold text-pink-600 mt-8 mb-6">
                ¡Me haces muy feliz! Oscar y Laura ❤️
              </h2>
              <p className="text-xl text-gray-700 italic font-serif">
                Este es el comienzo de algo hermoso...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
