export interface QuizQuestion {
    id: number;
    text: string;
    type: 'yes-no' | 'email' | 'name';
  }
  
  export interface QuizState {
    currentQuestion: number;
    answers: Record<number, boolean>;
    name: string;
    email: string;
    completed: boolean;
  }
  
  export type SalesPageType = 'acute' | 'chronic';