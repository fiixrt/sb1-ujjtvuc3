import { Music } from 'lucide-react';

interface MessageProps {
  show: boolean;
}

export function Message({ show }: MessageProps) {
  return (
    <div className={`transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <p className="text-xl text-gray-700 leading-relaxed mb-6 font-serif italic">
        Cada día que pasa, mi corazón late más fuerte por ti. Tu sonrisa ilumina mi mundo y tu presencia hace que todo sea mejor. No puedo seguir guardando lo que siento...
      </p>

      <p className="text-2xl font-semibold text-pink-600 mb-8 font-serif">
        Me gustas mucho, Laura ❤️
      </p>

      <div className="mt-8 text-gray-600 border-t border-pink-200 pt-4">
        <Music className="inline-block w-5 h-5 mr-2" />
        <span className="italic font-serif">"Contigo todo es mejor..."</span>
      </div>
    </div>
  );
}