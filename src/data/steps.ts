import { Step, Message } from '../types';

export const steps: Step[] = [
  {
    id: 1,
    question: "¿Qué día nos conocimos?",
    options: ["Un lunes soleado", "Un miércoles lluvioso", "Un viernes especial"],
    correctAnswer: 2,
    hint: "Fue al final de la semana..."
  },
  {
    id: 2,
    question: "¿Cuál es mi café favorito que siempre pido cuando estamos juntos?",
    options: ["Cappuccino", "Americano", "Latte"],
    correctAnswer: 0,
    hint: "Tiene mucha espuma..."
  },
  {
    id: 3,
    question: "¿Qué canción siempre tarareo cuando estoy feliz?",
    options: ["Perfect", "Photograph", "Thinking Out Loud"],
    correctAnswer: 1,
    hint: "Ed Sheeran..."
  }
];

export const revealMessages: Message[] = [
  { text: "Cada vez que te veo...", delay: 1000 },
  { text: "Mi corazón late más fuerte...", delay: 2000 },
  { text: "Y mi mundo se ilumina...", delay: 3000 },
  { text: "Porque tú, Laura...", delay: 4000 },
  { text: "Me has enamorado completamente ❤️", delay: 5000 }
];