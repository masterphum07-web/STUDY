import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  Clock,
} from 'lucide-react';
import {
  evaluatePathologyDiagnosis,
  type JevPathologyEvaluationResult,
} from '../../integrations/typesafe/typesafeService';
import styles from './JevPathologyExaminer.module.css';

interface ClinicalCase {
  id: string;
  title: string;
  category: string;
  patientVignette: string;
  grossClue: string;
  microClue: string;
  defaultAnswerHint: string;
  quickChips: string[];
}

const PRESET_CASES: ClinicalCase[] = [
  {
    id: 'case-endometriosis',
    title: 'เคสที่ 1: ปวดประจำเดือนรุนแรงและก้อนที่ปีกมดลูก',
    category: 'Gynecology / Ovary',
    patientVignette:
      'หญิงอายุ 32 ปี มีอาการปวดประจำเดือนรุนแรงขึ้นเรื่อยๆ ตลอด 2 ปี (Severe dysmenorrhea) ร่วมกับปวดลึกขณะมีเพศสัมพันธ์ (Dyspareunia) ตรวจภายในคลำพบก้อนที่ปีกมดลูกซ้ายกดเจ็บ อัลตราซาวด์พบ Unilocular cystic mass ขนาด 6 ซม. ภายในมีลักษณะ Ground-glass echogenicity สม่ำเสมอ',
    grossClue: 'ถุงน้ำผิวเรียบ ผนังหนา ภายในบรรจุของเหลวข้นสีน้ำตาลไหม้คล้ายช็อกโกแลตเหลว (Chocolate cyst)',
    microClue: 'ตรวจพบ Endometrial glands และ Endometrial stroma ร่วมกับ Hemosiderin-laden macrophages บนผนังถุงน้ำ',
    defaultAnswerHint:
      'วินิจฉัยเป็น Endometriosis (Endometrioma / Chocolate cyst of ovary) เกิดจากเยื่อบุโพรงมดลูกเจริญผิดที่นอกมดลูก ชิ้นเนื้อพบ endometrial gland + stroma และ hemosiderin macrophages',
    quickChips: ['Endometriosis', 'Chocolate cyst', 'Hemosiderin macrophages', 'Dysmenorrhea', 'Endometrial stroma'],
  },
  {
    id: 'case-leiomyoma',
    title: 'เคสที่ 2: เลือดออกผิดปกติและมดลูกโตคลำพบก้อน',
    category: 'Gynecology / Uterus',
    patientVignette:
      'หญิงอายุ 46 ปี มีประจำเดือนมามากและนานผิดปกติ (Menorrhagia) ร่วมกับปัสสาวะบ่อย ตรวจหน้าท้องคลำพบมดลูกโตผิดรูป ขนาดเทียบเท่าอายุครรภ์ 14 สัปดาห์ เนื้อแน่น ผิวเรียบ ไม่เจ็บ ตรวจเลือดพบภาวะโลหิตจางจากขาดธาตุเหล็ก (Hb 8.2 g/dL)',
    grossClue: 'ก้อนเนื้อกลมแน่น ขอบเขตชัดเจน หน้าตัดสีขาวอมชมพู แสดงลายเส้นใยกล้ามเนื้อวนคล้ายก้นหอย (Whorled appearance)',
    microClue: 'มัดของเซลล์กล้ามเนื้อเรียบรูปกระสวย (Spindle-shaped smooth muscle cells) เรียงขนานกันใน Fascicular pattern ไร้ cellular atypia',
    defaultAnswerHint:
      'วินิจฉัยเป็น Leiomyoma (Uterine fibroid) ของชั้น Myometrium เป็นเนื้องอกไม่ร้ายแรง หน้าตัดเป็น whorled appearance เซลล์รูปกระสวย spindle-shaped cells ใน fascicular pattern',
    quickChips: ['Leiomyoma', 'Uterine fibroid', 'Spindle-shaped cells', 'Fascicular pattern', 'Whorled appearance'],
  },
  {
    id: 'case-ectopic',
    title: 'เคสที่ 3: ปวดท้องน้อยเฉียบพลันและขาดประจำเดือน (ฉุกเฉิน)',
    category: 'Emergency / Fallopian Tube',
    patientVignette:
      'หญิงอายุ 27 ปี ปวดท้องน้อยด้านขวาเฉียบพลันรุนแรง หน้ามืด เป็นลม ขาดประจำเดือน 7 สัปดาห์ ความดันตก 85/50 mmHg ชีพจรเร็ว 118 ครั้ง/นาที ตรวจการตั้งครรภ์ Urine hCG ให้ผลบวก หน้าท้องมี Rebound tenderness และคลำได้ก้อนตึงกดเจ็บที่ปีกมดลูกขวา',
    grossClue: 'ท่อนำไข่บริเวณ Ampulla บวมโป่งตึง ผนังบาง มี Gestational sac, รอยฉีกขาด และเลือดคั่งในช่องท้อง (Hemoperitoneum)',
    microClue: 'พบ Chorionic villi และ Trophoblastic tissue ฝังตัวในชั้นผนังท่อนำไข่ ร่วมกับ Decidual reaction',
    defaultAnswerHint:
      'วินิจฉัยเป็น Ruptured Ectopic Pregnancy ที่ท่อนำไข่ (Ampulla) เป็นภาวะฉุกเฉินทางนรีเวช ตรวจพบ chorionic villi ในท่อนำไข่และเลือดออกในช่องท้อง ต้องผ่าตัดฉุกเฉินทันที',
    quickChips: ['Ruptured Ectopic Pregnancy', 'Chorionic villi', 'Ampulla', 'Surgical emergency', 'Hemoperitoneum'],
  },
  {
    id: 'case-bph',
    title: 'เคสที่ 4: ชายสูงอายุปัสสาวะขัดและต่อมลูกหมากโต',
    category: 'Urology / Prostate',
    patientVignette:
      'ชายอายุ 68 ปี ปัสสาวะลำบาก ลำปัสสาวะอ่อน รอนานกว่าจะไหล ปัสสาวะไม่สุด และตื่นปัสสาวะคืนละ 4 ครั้ง (Nocturia) ตรวจทวารหนัก (DRE) พบต่อมลูกหมากโตสม่ำเสมอ ผิวเรียบ นุ่มแน่น ไม่พบก้อนแข็ง ระดับ Serum PSA เท่ากับ 3.2 ng/mL (ปกติ)',
    grossClue: 'ต่อมลูกหมากโตแบบเป็นปุ่มปม (Nodular enlargement) บริเวณ Transitional / Periurethral zone กดเบียดท่อปัสสาวะ',
    microClue: 'Nodular hyperplasia ประกอบด้วยการเพิ่มจำนวนของต่อม (Glands) และ Stroma (กล้ามเนื้อเรียบและ fibrous tissue) สองชั้นเซลล์สมบูรณ์',
    defaultAnswerHint:
      'วินิจฉัยเป็น Benign Prostatic Hyperplasia (BPH) เกิดการเจริญเกินของต่อมและ stroma บริเวณ Transitional zone กดเบียด Prostatic urethra ไม่ใช่มะเร็ง',
    quickChips: ['BPH', 'Transitional zone', 'Periurethral', 'Nodular hyperplasia', 'PSA normal'],
  },
];

interface Props {
  initialParams?: {
    defaultCaseIndex?: number;
  };
}

export const JevPathologyExaminer: React.FC<Props> = ({ initialParams }) => {
  const initialIndex = initialParams?.defaultCaseIndex ?? 0;
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(initialIndex);
  const [studentDiagnosis, setStudentDiagnosis] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<JevPathologyEvaluationResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const activeCase = PRESET_CASES[selectedCaseIdx];

  const handleSelectCase = (idx: number) => {
    setSelectedCaseIdx(idx);
    setStudentDiagnosis('');
    setResult(null);
    setErrorMsg(null);
  };

  const handleApplyHint = () => {
    setStudentDiagnosis(activeCase.defaultAnswerHint);
  };

  const handleAddChip = (chip: string) => {
    setStudentDiagnosis((prev) => {
      const clean = prev.trim();
      return clean ? `${clean}, ${chip}` : chip;
    });
  };

  const handleEvaluate = async () => {
    if (!studentDiagnosis.trim() || studentDiagnosis.trim().length < 3) {
      setErrorMsg('กรุณาระบุข้อสันนิษฐานการวินิจฉัยและลักษณะพยาธิสภาพก่อนส่งตรวจ');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    const caseContext = `${activeCase.title}\nอาการ: ${activeCase.patientVignette}\nลักษณะมหภาค: ${activeCase.grossClue}\nลักษณะจุลทรรศน์: ${activeCase.microClue}`;

    try {
      const evalResult = await evaluatePathologyDiagnosis(caseContext, studentDiagnosis);
      setResult(evalResult);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการเชื่อมต่อ JEV AI';
      setErrorMsg(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreBadgeClass = (percent: number) => {
    if (percent >= 75) return styles.scoreHigh;
    if (percent >= 50) return styles.scoreMid;
    return styles.scoreLow;
  };

  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case 'immediate_emergency':
        return '🚨 ภาวะฉุกเฉินวิกฤต ต้องผ่าตัดเร่งด่วนทันที';
      case 'definitive_surgery_or_biopsy':
        return '🔬 ต้องตัดชิ้นเนื้อตรวจหรือผ่าตัดตามแผน';
      case 'pharmacotherapy':
        return '💊 การรักษาด้วยยาปฏิชีวนะหรือฮอร์โมน';
      default:
        return '📋 การติดตามอาการและเฝ้าระวังทางคลินิก';
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Header & JEV Status */}
      <div className={styles.header}>
        <div className={styles.brandGroup}>
          <div className={styles.engineBadge}>
            <Sparkles size={14} />
            <span>TypeSafe JEV 1.13 Engine</span>
          </div>
          <div className={styles.workloadBadge}>
            <Clock size={12} />
            <span>80% Clinical AI Pipeline</span>
          </div>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Model: <code>jev-latest</code> • Calibrated Judgments
        </div>
      </div>

      <div>
        <h3 className={styles.title}>ศูนย์วิเคราะห์เคสผู้ป่วยพยาธิวิทยาทางคลินิก (Clinical Vignette Reasoner)</h3>
        <p className={styles.subtitle}>
          ทดสอบทักษะการวินิจฉัยโรค เชื่อมโยงประวัติผู้ป่วย อาการ และผลชิ้นเนื้อ (Gross & Histopathology) โดยมี{' '}
          <strong>JEV System One</strong> เป็นผู้ตัดสิน ให้คะแนน และจำแนกความเร่งด่วนทางคลินิก
        </p>
      </div>

      {/* Case Tabs */}
      <div className={styles.caseTabs}>
        {PRESET_CASES.map((c, idx) => (
          <button
            key={c.id}
            type="button"
            className={`${styles.caseTab} ${idx === selectedCaseIdx ? styles.caseTabActive : ''}`}
            onClick={() => handleSelectCase(idx)}
          >
            {c.title.split(':')[0]} ({c.category.split('/')[1]?.trim() || c.category})
          </button>
        ))}
      </div>

      {/* Case Presentation Card */}
      <div className={styles.caseCard}>
        <div className={styles.caseCardHeader}>
          <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-primary)' }}>{activeCase.title}</h4>
          <span className={styles.caseCategoryTag}>{activeCase.category}</span>
        </div>

        <p className={styles.casePatientVignette}>{activeCase.patientVignette}</p>

        <div className={styles.cluesGrid}>
          <div className={styles.clueItem}>
            <strong>🔍 ลักษณะมหภาค (Gross Pathology):</strong>
            <span>{activeCase.grossClue}</span>
          </div>
          <div className={styles.clueItem}>
            <strong>🔬 กล้องจุลทรรศน์ (Histopathology):</strong>
            <span>{activeCase.microClue}</span>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className={styles.inputSection}>
        <div className={styles.inputLabel}>
          <span>ระบุการวินิจฉัย (Diagnosis) และพยาธิกำเนิดที่เกี่ยวข้อง:</span>
          <button
            type="button"
            onClick={handleApplyHint}
            style={{
              fontSize: '0.775rem',
              color: '#be123c',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontWeight: 600,
            }}
          >
            ตัวอย่างคำตอบเฉลย
          </button>
        </div>

        <textarea
          className={styles.textarea}
          rows={3}
          placeholder="พิมพ์การวินิจฉัยโรค เช่น Leiomyoma, Endometriosis หรือระบุลักษณะเซลล์..."
          value={studentDiagnosis}
          onChange={(e) => setStudentDiagnosis(e.target.value)}
        />

        {/* Quick Helper Chips */}
        <div className={styles.chipsContainer}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
            คีย์เวิร์ดแนะนำ:
          </span>
          {activeCase.quickChips.map((chip, i) => (
            <button key={i} type="button" className={styles.chip} onClick={() => handleAddChip(chip)}>
              + {chip}
            </button>
          ))}
        </div>
      </div>

      {errorMsg && (
        <div
          style={{
            marginTop: '14px',
            padding: '10px 14px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            color: '#dc2626',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <AlertTriangle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Actions Bar */}
      <div className={styles.actionsBar}>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          ระบบตัดสินด้วย JEV System One (Score + Noul + Choice Primitives)
        </div>

        <button
          type="button"
          className={styles.submitBtn}
          disabled={isLoading || !studentDiagnosis.trim()}
          onClick={handleEvaluate}
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="spin" />
              <span>JEV กำลังประเมินผล...</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>ส่งคำตอบให้ JEV วินิจฉัย</span>
            </>
          )}
        </button>
      </div>

      {/* Result Panel */}
      {result && (
        <div className={styles.resultPanel}>
          <div className={styles.resultHeader}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                ผลการวินิจฉัยโดย TypeSafe JEV 1.13
              </div>
              <h4 style={{ margin: '4px 0 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                คะแนนความแม่นยำทางพยาธิสภาพคลินิก
              </h4>
            </div>

            <div className={`${styles.scoreBadge} ${getScoreBadgeClass(result.accuracyPercent)}`}>
              <CheckCircle2 size={20} />
              <span>{result.accuracyPercent}%</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>({result.accuracyScore}/3.0)</span>
            </div>
          </div>

          {/* Judgment Matrix Cards */}
          <div className={styles.judgmentGrid}>
            <div className={styles.judgmentCard}>
              <div className={styles.judgmentCardLabel}>การตรวจยืนยันชิ้นเนื้อ (Noul)</div>
              <div className={styles.judgmentCardValue}>
                {result.histologyVerified ? (
                  <span style={{ color: '#059669' }}>✓ พบลักษณะชิ้นเนื้อตรง</span>
                ) : (
                  <span style={{ color: '#d97706' }}>⚠ ยังไม่พบลักษณะชิ้นเนื้อ</span>
                )}
              </div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                ความน่าจะเป็น: {(result.histologyProbability * 100).toFixed(0)}%
              </div>
            </div>

            <div className={styles.judgmentCard}>
              <div className={styles.judgmentCardLabel}>หมวดหมู่พยาธิสภาพ (Category)</div>
              <div className={styles.judgmentCardValue} style={{ fontSize: '0.875rem' }}>
                {result.pathologyCategory}
              </div>
            </div>

            <div className={styles.judgmentCard}>
              <div className={styles.judgmentCardLabel}>ระดับความเร่งด่วนในการรักษา</div>
              <div className={styles.judgmentCardValue} style={{ fontSize: '0.85rem' }}>
                {getUrgencyText(result.managementUrgency)}
              </div>
            </div>

            <div className={styles.judgmentCard}>
              <div className={styles.judgmentCardLabel}>ความมั่นใจของโมเดล (Confidence)</div>
              <div className={styles.judgmentCardValue}>
                {(result.accuracyConfidence * 100).toFixed(0)}%
              </div>
            </div>
          </div>

          {/* Clinical Feedback in Thai */}
          <div className={styles.feedbackBox}>
            <div style={{ fontWeight: 700, marginBottom: '6px', color: '#be123c', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Stethoscope size={16} />
              <span>ความเห็นทางพยาธิวิทยาคลินิกจาก JEV AI:</span>
            </div>
            <div>{result.feedbackTh}</div>
          </div>

          <div className={styles.metaRow}>
            <span>⚡ JEV System One Engine • Sub-second inference calibrated</span>
            {result.tokensUsed && <span>Tokens: {result.tokensUsed}</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default JevPathologyExaminer;
