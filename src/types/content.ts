/**
 * Type definitions for Content Schema (Subjects, Chapters, Sections, Quizzes)
 */

export type SectionType =
  | 'paragraph'
  | 'heading'
  | 'bullet-list'
  | 'numbered-list'
  | 'callout'
  | 'key-points'
  | 'formula'
  | 'example'
  | 'table'
  | 'image'
  | 'quote'
  | 'simulation'
  | 'legacy-html'
  | 'quiz';

export type CalloutVariant = 'info' | 'tip' | 'warning' | 'note' | 'danger';

export interface CalloutContent {
  title?: string;
  variant: CalloutVariant;
  text: string;
}

export interface FormulaContent {
  latex: string;
  explanation?: string;
  variables?: { symbol: string; meaning: string; unit?: string }[];
  displayMode?: boolean; // default true for block formulas
}

export interface ExampleContent {
  problem: string;
  given?: string[];
  steps: { stepNumber: number; title: string; explanation: string; math?: string }[];
  answer: string;
}

export interface TableContent {
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface ImageContent {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
}

export interface QuoteContent {
  quote: string;
  author?: string;
  source?: string;
}

export interface KeyPointsContent {
  title?: string;
  points: string[];
}

export interface SimulationContent {
  simulationId: string;
  title?: string;
  description?: string;
  initialParams?: Record<string, unknown>;
}

export interface LegacyHtmlContent {
  modulePath: string; // relative to /qwen-modules/{subjectId}/{chapterId}/index.html or direct path
  title: string;
  description?: string;
  initialHeight?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuizContent {
  title?: string;
  description?: string;
  questions: QuizQuestion[];
}

export interface ChapterSection {
  id: string; // Stable ID e.g. "sec-intro", "sec-formula-projectile"
  heading?: string;
  type: SectionType;
  // Strongly typed content union or unknown validated at runtime
  content:
    | string
    | string[]
    | CalloutContent
    | FormulaContent
    | ExampleContent
    | TableContent
    | ImageContent
    | QuoteContent
    | KeyPointsContent
    | SimulationContent
    | LegacyHtmlContent
    | QuizContent
    | unknown;
}

export interface Chapter {
  id: string; // Stable ID e.g. "projectile-motion"
  subjectId: string; // e.g. "physics"
  title: string;
  description: string;
  order: number;
  estimatedReadingMinutes: number;
  tags: string[];
  objectives: string[];
  sections: ChapterSection[];
  simulationIds?: string[];
  quiz?: QuizQuestion[];
  updatedAt?: string;
}

export interface Subject {
  id: string; // Stable ID e.g. "physics"
  title: string;
  shortTitle: string;
  description: string;
  icon: string; // Lucide icon name e.g. "Atom", "Calculator", "Dna"
  color: string; // CSS color string e.g. "#0284c7", "#10b981"
  bgGradient: string; // CSS gradient string for hero card
  order: number;
  chapterIds: string[];
}

export type ReadStatus = 'not-started' | 'in-progress' | 'completed';

