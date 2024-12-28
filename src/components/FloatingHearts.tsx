import { Heart } from 'lucide-react';

export function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <Heart
          key={i}
          className={`absolute text-pink-200 animate-float-${i % 5}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3,
            transform: `scale(${0.5 + Math.random()})`,
            animation: `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
}