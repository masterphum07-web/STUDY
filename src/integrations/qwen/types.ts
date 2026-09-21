/**
 * Qwen Module Integration Contract
 */

export interface QwenReactModuleProps {
  subjectId: string;
  chapterId: string;
  theme?: 'light' | 'dark';
  onProgress?: (percent: number) => void;
  onComplete?: () => void;
  initialParams?: Record<string, unknown>;
}

export interface QwenPostMessagePayload {
  type: 'QWEN_MODULE_RESIZE' | 'QWEN_MODULE_PROGRESS' | 'QWEN_MODULE_READY';
  height?: number;
  percent?: number;
  moduleId?: string;
}

