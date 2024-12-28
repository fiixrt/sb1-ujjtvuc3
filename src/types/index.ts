export interface Reason {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Poem {
  id: number;
  verses: string[];
  delay: number;
}

export interface Message {
  id: number;
  content: string;
  type: 'thought' | 'feeling' | 'dream';
}

export interface MusicNote {
  id: number;
  note: string;
  duration: number;
}