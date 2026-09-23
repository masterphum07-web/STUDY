import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, Send, Loader2, Award, Zap } from 'lucide-react';
import { evaluatePhysiologyAnswer } from '../../integrations/typesafe/typesafeService';
import type { JevEvaluationResult } from '../../integrations/typesafe/typesafeService';
import styles from './JevPhysioExaminer.module.css';

interface PresetQuestion {
  id: string;
  tabTitle: string;
  question: string;
  hint: string;
  sampleCorrect: string;
}

const PRESET_QUESTIONS: PresetQuestion[] = [
  {
    id: 'bronchus-aspiration',
    tabTitle: '1. การสำลักลงปอดขวา',
    question: 'ทำไมเมื่อเกิดการสำลักสิ่งแปลกปลอม (Foreign Body Aspiration) จึงมักตกลงสู่หลอดลมข้างขวามากกว่าข้างซ้าย?',
    hint: 'คำใบ้: อธิบายเปรียบเทียบ ความยาว ความกว้าง และมุมการแยกตัวของหลอดลมหลักขวาและซ้าย',
    sampleCorrect:
      'หลอดลมหลักข้างขวามีขนาดสั้นกว่า กว้างกว่า และทำมุมชันตามแนวดิ่งมากกว่าหลอดลมซ้าย (ประมาณ 25° เทียบกับ 45°) สิ่งแปลกปลอมจึงตกลงสู่ปอดขวาได้ง่ายกว่า',
  },
  {
    id: 'intrapleural-pressure',
    tabTitle: '2. ความดันเยื่อหุ้มปอด',
    question: 'เหตุใดความดันในช่องเยื่อหุ้มปอด (Intrapleural Pressure: Pip) จึงต้องมีค่าเป็นลบเสมอ (-4 ถึง -7 mmHg)?',
    hint: 'คำใบ้: พูดถึงแรง Elastic recoil ของปอดที่ดึงเข้าหาตัว กับแรงดึงผนังทรวงอกที่ต้องการขยายออก',
    sampleCorrect:
      'Pip ต้องเป็นลบเพื่อสร้างแรงดูดยึดเหนี่ยวให้ปอดขยายตัวตามผนังทรวงอก โดยเกิดจากแรงดึงกลับของเนื้อปอด (Elastic recoil) สวนทางกับแรงขยายตัวของผนังทรวงอก',
  },
  {
    id: 'surfactant-laplace',
    tabTitle: '3. สาร Surfactant & ถุงลม',
    question: 'สารลดแรงตึงผิว (Pulmonary Surfactant) มีบทบาทอย่างไรในการป้องกันภาวะถุงลมแฟบตามกฎของลาปลาซ (P = 2T/r)?',
    hint: 'คำใบ้: อธิบายความสัมพันธ์ระหว่างรัศมีถุงลม r กับแรงตึงผิว T และการทำงานของ DPPC',
    sampleCorrect:
      'ถุงลมขนาดเล็กมีรัศมี r น้อยกว่า ตามกฎลาปลาซจะมีแรงดันยุบตัวสูงกว่า แต่ Surfactant ช่วยลดแรงตึงผิว T ในถุงลมขนาดเล็กได้มากกว่า จึงทำให้ความดันสมดุลและไม่แฟบเข้าหาถุงลมใหญ่',
  },
];

export const JevPhysioExaminer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<JevEvaluationResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const currentPreset = PRESET_QUESTIONS[activeTab];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setUserAnswer('');
    setResult(null);
    setErrorMsg(null);
  };

  const handleFillSample = () => {
    setUserAnswer(currentPreset.sampleCorrect);
    setResult(null);
    setErrorMsg(null);
  };

  const handleEvaluate = async () => {
    if (!userAnswer.trim()) {
      setErrorMsg('กรุณาพิมพ์คำตอบของคุณก่อนส่งให้ JEV ประเมินผล');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const evaluation = await evaluatePhysiologyAnswer(currentPreset.question, userAnswer);
      setResult(evaluation);
    } catch (err) {
      console.error(err);
      setErrorMsg('เกิดข้อผิดพลาดในการเชื่อมต่อกับ TypeSafe AI JEV');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.brandGroup}>
          <div className={styles.jevBadge}>
            <Sparkles size={14} />
            <span>TypeSafe AI Jev 1.13</span>
          </div>
          <div>
            <h3 className={styles.title}>JEV Medical Examiner: ถาม-ตอบวิเคราะห์ความเข้าใจสด</h3>
            <div className={styles.subtitle}>
              พิมพ์คำตอบอิสระของคุณ แล้วให้โมเดล System One (Jev) ประเมินความแม่นยำทางสรีรวิทยาและให้คะแนนทันที
            </div>
          </div>
        </div>
      </div>

      {/* Preset Question Tabs */}
      <div className={styles.presetTabs}>
        {PRESET_QUESTIONS.map((q, idx) => (
          <button
            key={q.id}
            type="button"
            className={`${styles.presetTab} ${activeTab === idx ? styles.presetTabActive : ''}`}
            onClick={() => handleTabChange(idx)}
          >
            {q.tabTitle}
          </button>
        ))}
      </div>

      {/* Question Card */}
      <div className={styles.questionCard}>
        <div className={styles.questionText}>❓ คำถาม: {currentPreset.question}</div>
        <div className={styles.questionHint}>💡 {currentPreset.hint}</div>
      </div>

      {/* User Input Textarea */}
      <textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="พิมพ์คำอธิบายของคุณที่นี่ (ภาษาไทยหรืออังกฤษ)..."
        className={styles.textarea}
        rows={3}
      />

      {/* Actions */}
      <div className={styles.actions}>
        <button type="button" onClick={handleFillSample} className={styles.sampleAnswerBtn}>
          ✨ ใส่ตัวอย่างคำตอบที่ถูกต้องเพื่อทดสอบ JEV
        </button>

        <button
          type="button"
          onClick={handleEvaluate}
          disabled={isLoading || !userAnswer.trim()}
          className={styles.evalButton}
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="spin-icon" />
              <span>JEV กำลังประเมินผล...</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>ส่งให้ JEV ตรวจคำตอบ</span>
            </>
          )}
        </button>
      </div>

      {errorMsg && (
        <div style={{ marginTop: '12px', color: 'var(--danger)', fontSize: '0.85rem' }}>
          ⚠️ {errorMsg}
        </div>
      )}

      {/* JEV Evaluation Result Card */}
      {result && (
        <div className={styles.resultCard}>
          <div className={styles.resultHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={20} color="#7c3aed" />
              <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                ผลการประเมินจาก JEV (System One Decision)
              </h4>
            </div>

            <div className={styles.scorePills}>
              <span className={`${styles.pill} ${result.isCorrect ? styles.pillSuccess : styles.pillWarning}`}>
                {result.isCorrect ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
                <span>{result.isCorrect ? 'ผ่านเกณฑ์สรีรวิทยา' : 'ต้องทบทวนเพิ่มเติม'}</span>
              </span>

              <span className={styles.pill} style={{ background: '#f5f3ff', color: '#7c3aed', border: '1px solid #ddd6fe' }}>
                <Zap size={14} />
                <span>คะแนน: {result.accuracyScore} / 2.00</span>
              </span>
            </div>
          </div>

          <p className={styles.feedbackText}>💬 {result.feedbackTh}</p>

          {/* Metrics Grid */}
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <span className={styles.metricLabel}>ความน่าจะเป็นในการเข้าใจ (Noul):</span>
              <span className={styles.metricValue} style={{ color: result.comprehensionProbability >= 0.7 ? '#16a34a' : '#d97706' }}>
                {Math.round(result.comprehensionProbability * 100)}%
              </span>
            </div>

            <div className={styles.metricItem}>
              <span className={styles.metricLabel}>ความมั่นใจของแบบจำลอง (Confidence):</span>
              <span className={styles.metricValue} style={{ color: '#2563eb' }}>
                {Math.round(result.accuracyConfidence * 100)}%
              </span>
            </div>

            <div className={styles.metricItem}>
              <span className={styles.metricLabel}>กลไกหลักที่ตรวจพบ (Mechanism):</span>
              <span className={styles.metricValue} style={{ color: '#7c3aed', fontSize: '0.85rem' }}>
                {result.detectedMechanism}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JevPhysioExaminer;

