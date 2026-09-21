import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Calculator, Dna, BookOpen, CheckCircle2, ChevronRight, Sparkles, Clock, Activity, HeartPulse, Stethoscope } from 'lucide-react';
import { getAllSubjects, getChapterById } from '../../content/registry';
import { useProgress } from '../../hooks/useProgress';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const subjects = getAllSubjects();
  const { getSubjectProgress, getTotalCompletedChapters, getRecentChapterIds } = useProgress();

  const totalChapters = subjects.reduce((sum, s) => sum + s.chapterIds.length, 0);
  const completedTotal = getTotalCompletedChapters();
  const recentIds = getRecentChapterIds();

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity size={24} />;
      case 'HeartPulse':
        return <HeartPulse size={24} />;
      case 'Stethoscope':
        return <Stethoscope size={24} />;
      case 'Atom':
        return <Atom size={24} />;
      case 'Calculator':
        return <Calculator size={24} />;
      case 'Dna':
        return <Dna size={24} />;
      default:
        return <BookOpen size={24} />;
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badgeHero}>
            <Sparkles size={16} />
            <span>Interactive Learning &amp; Summary Hub</span>
          </div>
          <h1 className={styles.heroTitle}>ศูนย์รวมสรุปบทเรียนและแบบจำลอง</h1>
          <p className={styles.heroSubtitle}>
            อ่านสรุปเนื้อหาเข้มข้น ทำความเข้าใจด้วยแบบจำลอง Interactive เสริมความมั่นใจด้วยแบบทดสอบ
            และระบบแยกโมดูลรองรับทั้ง React และ Qwen
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <BookOpen size={18} color="var(--primary)" />
              <span>{subjects.length} หมวดวิชา</span>
            </div>
            <div className={styles.statItem}>
              <Clock size={18} color="var(--info)" />
              <span>{totalChapters} บทเรียนคุณภาพ</span>
            </div>
            <div className={styles.statItem}>
              <CheckCircle2 size={18} color="var(--success)" />
              <span>
                อ่านจบแล้ว <span className={styles.statNumber}>{completedTotal}</span>/{totalChapters} บท
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Chapters if any */}
      {recentIds.length > 0 && (
        <section className={styles.section} style={{ marginBottom: '20px' }}>
          <div className={styles.sectionHeader}>
            <div>
              <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem' }}>
                บทเรียนที่เปิดอ่านล่าสุด
              </h3>
              <p className={styles.sectionDesc}>เรียนต่อจากจุดที่คุณอ่านค้างไว้</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {recentIds.map((cId) => {
              const chap = getChapterById(cId);
              if (!chap) return null;
              return (
                <Link
                  key={cId}
                  to={`/chapter/${chap.subjectId}/${chap.id}`}
                  style={{
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>อ่านค้างไว้</div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                      {chap.title}
                    </div>
                  </div>
                  <ChevronRight size={18} color="var(--primary)" />
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* All Subjects Grid */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>เลือกวิชาที่ต้องการเรียนรู้</h2>
            <p className={styles.sectionDesc}>คลิกที่วิชาเพื่อดูสารบัญบทเรียนและแบบจำลองทั้งหมด</p>
          </div>
        </div>

        <div className={styles.subjectsGrid}>
          {subjects.map((subject) => {
            const { completed, total, percent } = getSubjectProgress(subject.id, subject.chapterIds);

            return (
              <Link
                key={subject.id}
                to={`/subject/${subject.id}`}
                className={styles.subjectCard}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper} style={{ background: subject.bgGradient }}>
                    {getSubjectIcon(subject.icon)}
                  </div>
                  <h3 className={styles.cardTitle}>{subject.title}</h3>
                  <p className={styles.cardDesc}>{subject.description}</p>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <span>ความคืบหน้า</span>
                      <span>{completed}/{total} บท ({percent}%)</span>
                    </div>
                    <div className={styles.progressBarContainer}>
                      <div
                        className={styles.progressBarFill}
                        style={{
                          width: `${percent}%`,
                          backgroundColor: subject.color,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span>{subject.chapterIds.length} บทเรียน</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontWeight: 600 }}>
                    <span>เข้าสู่วิชา</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
