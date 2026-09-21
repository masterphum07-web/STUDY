import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Loader2, Compass } from 'lucide-react';
import { routeStudentQuery, type JevRoutingResult } from '../../../integrations/typesafe/typesafeService';
import { getChapterById } from '../../../content/registry';
import styles from './JevAssistantHero.module.css';

const QUICK_CHIPS = [
  'ปอดข้างไหนมี 3 กลีบ?',
  'ทำไมสำลักลงปอดขวาบ่อยกว่า?',
  'การเคลื่อนที่แบบโพรเจกไทล์',
  'สูตรกราฟพาราโบลา',
  'โครงสร้างเซลล์สัตว์',
];

export const JevAssistantHero: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<JevRoutingResult | null>(null);

  const handleSearch = async (targetText?: string) => {
    const searchText = targetText ?? query;
    if (!searchText.trim()) return;

    if (targetText) {
      setQuery(targetText);
    }

    setIsLoading(true);
    setResult(null);

    try {
      const res = await routeStudentQuery(searchText);
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const matchedChapter = result ? getChapterById(result.targetChapterId) : null;

  return (
    <div className={styles.container}>
      {/* Search & Prompt Box */}
      <div className={styles.searchBox}>
        <Sparkles size={20} className={styles.sparkleIcon} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ถามข้อสงสัย หรือพิมพ์หัวข้อที่อยากเรียน เช่น 'ทำไมสำลักลงปอดขวา'..."
          className={styles.input}
          aria-label="ค้นหาและถามข้อสงสัยกับ JEV AI"
        />
        <button
          type="button"
          onClick={() => handleSearch()}
          disabled={isLoading || !query.trim()}
          className={styles.askBtn}
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="spin-icon" />
              <span>JEV กำลังคิด...</span>
            </>
          ) : (
            <>
              <Compass size={16} />
              <span>ให้ JEV แนะนำ</span>
            </>
          )}
        </button>
      </div>

      {/* Quick Prompt Chips */}
      <div className={styles.chipsRow}>
        <span className={styles.chipLabel}>ลองถาม:</span>
        {QUICK_CHIPS.map((chip, idx) => (
          <button
            key={idx}
            type="button"
            className={styles.chipBtn}
            onClick={() => handleSearch(chip)}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* JEV Recommendation Result Card */}
      {result && matchedChapter && (
        <div className={styles.resultCard}>
          <div className={styles.resultInfo}>
            <div className={styles.resultBadge}>
              <Sparkles size={12} />
              <span>JEV System One Recommendation • ความแม่นยำ {Math.round(result.confidence * 100)}%</span>
            </div>
            <h4 className={styles.resultTitle}>
              {matchedChapter.title}
            </h4>
            <p className={styles.resultDesc}>
              {result.reasoningTh} — สามารถเข้าไปอ่านสรุปเนื้อหาและทดลองแบบจำลอง Interactive ได้ทันที
            </p>
          </div>

          <Link
            to={`/chapter/${result.targetSubjectId}/${result.targetChapterId}`}
            className={styles.navigateBtn}
          >
            <span>เปิดบทเรียนนี้</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default JevAssistantHero;

