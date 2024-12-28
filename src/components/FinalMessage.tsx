import { PulsingHeart } from './PulsingHeart';
import { Music } from 'lucide-react';

export function FinalMessage() {
  return (
    <div className="text-center space-y-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-pink-600">
        Laura, me gustas mucho
      </h2>
      
      <p className="text-xl text-gray-700 leading-relaxed font-serif italic">
        Cada momento contigo es especial. Tu sonrisa, tu forma de ser, todo en ti me hace feliz.
        No puedo imaginar un día sin verte, sin escuchar tu voz, sin compartir esos pequeños
        momentos que hacen mi vida mejor.
      </p>

      <PulsingHeart show={true} />

      <div className="pt-6 border-t border-pink-100">
        <p className="text-gray-600 flex items-center justify-center gap-2">
          <Music className="w-5 h-5" />
          <span className="italic font-serif">
            "Y si te pido que bailes conmigo, ¿aceptarías ser más que mi amiga?"
          </span>
        </p>
      </div>
    </div>
  );
}