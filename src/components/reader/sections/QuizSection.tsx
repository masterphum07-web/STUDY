import React, { useState } from 'react';
import { HelpCircle, Check, X, RotateCcw, Award } from 'lucide-react';
import type { QuizContent } from '../../../types/content';

interface QuizSectionProps {
  content: QuizContent;
  chapterId?: string;
  subjectId?: string;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ content }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const calculateScore = () => {
    let score = 0;
    content.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const allAnswered = content.questions.every((q) => selectedAnswers[q.id] !== undefined);
  const score = calculateScore();
  const total = content.questions.length;

  return (
    <div
      style={{
        margin: '32px 0',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-surface)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <HelpCircle size={22} color="var(--primary)" />
        <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
          {content.title || 'แบบทดสอบวัดความเข้าใจ (Quiz)'}
        </h4>
      </div>

      {content.description && (
        <p style={{ margin: '0 0 20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {content.description}
        </p>
      )}

      {/* Questions list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {content.questions.map((q, qIndex) => {
          const selectedOption = selectedAnswers[q.id];
          const isCorrect = selectedOption === q.correctAnswerIndex;

          return (
            <div
              key={q.id}
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-color)',
              }}
            >
              {/* Question title */}
              <div style={{ fontWeight: 600, fontSize: '0.975rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                ข้อที่ {qIndex + 1}: {q.question}
              </div>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {q.options.map((opt, oIndex) => {
                  const isThisSelected = selectedOption === oIndex;
                  const isThisCorrectAnswer = q.correctAnswerIndex === oIndex;

                  let optionBg = 'var(--bg-surface)';
                  let optionBorder = 'var(--border-color)';
                  let optionColor = 'var(--text-primary)';

                  if (isSubmitted) {
                    if (isThisCorrectAnswer) {
                      optionBg = 'var(--success-bg)';
                      optionBorder = 'var(--success-border)';
                      optionColor = 'var(--success)';
                    } else if (isThisSelected && !isCorrect) {
                      optionBg = 'var(--danger-bg)';
                      optionBorder = 'var(--danger-border)';
                      optionColor = 'var(--danger)';
                    }
                  } else if (isThisSelected) {
                    optionBg = 'var(--primary-light)';
                    optionBorder = 'var(--primary-border)';
                    optionColor = 'var(--primary)';
                  }

                  return (
                    <button
                      key={oIndex}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(q.id, oIndex)}
                      style={{
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: optionBg,
                        border: `1px solid ${optionBorder}`,
                        color: optionColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        fontSize: '0.9rem',
                        cursor: isSubmitted ? 'default' : 'pointer',
                        transition: 'all var(--transition-fast)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: `1.5px solid ${isThisSelected ? 'var(--primary)' : 'var(--border-color-strong)'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            backgroundColor: isThisSelected ? 'var(--primary)' : 'transparent',
                            color: isThisSelected ? '#ffffff' : 'var(--text-muted)',
                            flexShrink: 0,
                          }}
                        >
                          {String.fromCharCode(65 + oIndex)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isSubmitted && isThisCorrectAnswer && (
                        <Check size={16} color="var(--success)" />
                      )}
                      {isSubmitted && isThisSelected && !isCorrect && (
                        <X size={16} color="var(--danger)" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submit */}
              {isSubmitted && (
                <div
                  style={{
                    marginTop: '12px',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isCorrect ? 'var(--success-bg)' : 'var(--warning-bg)',
                    border: `1px solid ${isCorrect ? 'var(--success-border)' : 'var(--warning-border)'}`,
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  <strong style={{ color: isCorrect ? 'var(--success)' : 'var(--warning)' }}>
                    {isCorrect ? 'ถูกต้อง!' : 'ยังไม่ถูกต้อง:'}
                  </strong>{' '}
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div
        style={{
          marginTop: '24px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        {!isSubmitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setIsSubmitted(true)}
            style={{
              padding: '10px 24px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: allAnswered ? 'var(--primary)' : 'var(--border-color-strong)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.925rem',
              cursor: allAnswered ? 'pointer' : 'not-allowed',
              transition: 'all var(--transition-fast)',
            }}
          >
            {allAnswered ? 'ตรวจคำตอบ' : `กรุณาตอบให้ครบทุกข้อ (${Object.keys(selectedAnswers).length}/${total})`}
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={24} color={score === total ? 'var(--success)' : 'var(--primary)'} />
              <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                คะแนนของคุณ: {score} / {total} คะแนน ({Math.round((score / total) * 100)}%)
              </span>
            </div>

            <button
              type="button"
              onClick={handleReset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-surface)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
            >
              <RotateCcw size={16} />
              ทำใหม่อีกครั้ง
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

