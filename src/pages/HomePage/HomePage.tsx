import React from 'react';
import { Link } from 'react-router-dom';
import {
  Atom,
  Calculator,
  Dna,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Clock,
  Activity,
  HeartPulse,
  Stethoscope,
  Box,
  Layers,
} from 'lucide-react';
import { getAllSubjects, getChapterById } from '../../content/registry';
import { useProgress } from '../../hooks/useProgress';
import { JevAssistantHero } from '../../components/home/JevAssistantHero/JevAssistantHero';
import styles from './HomePage.module.css';

const FEATURED_SIMULATIONS = [
  {
    id: 'sim-3d-lungs',
    title: 'แบบจำลอง 3D สรีรวิทยาปอดและระบบหายใจ',
    subtitle: 'Three.js 3D Procedural Studio',
    desc: 'หมุนสำรวจ 360° ละอองอากาศหายใจเข้า-ออก, แขนงหลอดเลือดแดง/ดำ, กะบังลม, และระบบตรวจคำตอบ JEV AI',
    path: '/chapter/physiology/respiratory-physiology',
    tag: '3D WebGL',
    tagColor: '#0284c7',
    icon: '🫁',
  },
  {
    id: 'sim-physio-rs',
    title: 'Physio-RS คลังแบบจำลองทางเดินหายใจ 12 โมเดล',
    subtitle: 'Qwen Interactive Suite',
    desc: 'กลศาสตร์ลูกสูบปอดตามกฎบอยล์, การทำงานของ Surfactant, กราฟ Spirometry สด และกราฟ Oxyhemoglobin',
    path: '/chapter/physiology/respiratory-physiology',
    tag: 'Qwen Suite',
    tagColor: '#7c3aed',
    icon: '🔬',
  },
  {
    id: 'sim-projectile',
    title: 'ห้องทดลองฟิสิกส์: การเคลื่อนที่แบบโพรเจกไทล์',
    subtitle: 'Canvas Interactive Simulator',
    desc: 'ปรับมุมยิง ความเร็วต้น และแรงโน้มถ่วง พร้อมวิเคราะห์ระยะตกไกลสุดและจุดสูงสุดแบบเรียลไทม์',
    path: '/chapter/physics/projectile-motion',
    tag: 'Physics Lab',
    tagColor: '#059669',
    icon: '🎯',
  },
  {
    id: 'sim-quadratic',
    title: 'เครื่องมือพลอตกราฟฟังก์ชันกำลังสองและพาราโบลา',
    subtitle: 'Math Function Studio',
    desc: 'ปรับสัมประสิทธิ์ a, b, c แบบเรียลไทม์ ค้นหาจุดยอด จุดตัดแกน X และแกนสมมาตรทันที',
    path: '/chapter/mathematics/quadratic-functions',
    tag: 'Math Studio',
    tagColor: '#d97706',
    icon: '📈',
  },
];

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
      {/* Hero Banner with JEV AI Assistant */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badgeHero}>
            <Sparkles size={16} />
            <span>AI-Driven Interactive Learning Hub • TypeSafe JEV Powered</span>
          </div>

          <h1 className={styles.heroTitle}>ศูนย์รวมสรุปบทเรียนและแบบจำลอง</h1>

          <p className={styles.heroSubtitle}>
            สรุปเนื้อหาเชิงลึก พร้อมแบบจำลอง 3D สมจริง และผู้ช่วยอัจฉริยะ <strong>TypeSafe JEV AI</strong> ช่วยตรวจความเข้าใจและแนะนำบทเรียน
          </p>

          {/* JEV AI Smart Search & Inquiry Box */}
          <JevAssistantHero />

          {/* Learning Stats */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <BookOpen size={18} color="var(--primary)" />
              <span>{subjects.length} หมวดวิชาหลัก</span>
            </div>
            <div className={styles.statItem}>
              <Clock size={18} color="var(--info)" />
              <span>{totalChapters} บทเรียนคุณภาพ</span>
            </div>
            <div className={styles.statItem}>
              <Box size={18} color="#7c3aed" />
              <span>4+ แบบจำลอง 3D &amp; Interactive</span>
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

      {/* Featured 3D & Interactive Labs Section */}
      <section className={styles.section} style={{ paddingBottom: '12px' }}>
        <div className={styles.sectionHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={22} color="var(--primary)" />
            <div>
              <h2 className={styles.sectionTitle}>ห้องทดลองจำลองและโมเดล 3D (Interactive Labs)</h2>
              <p className={styles.sectionDesc}>
                ทดลองปรับเปลี่ยนพารามิเตอร์ สังเกตผลลัพธ์แบบเรียลไทม์ และหมุนดูมิติกายวิภาคแบบ 360°
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {FEATURED_SIMULATIONS.map((sim) => (
            <Link
              key={sim.id}
              to={sim.path}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--transition-fast)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.8rem' }}>{sim.icon}</span>
                  <span
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: sim.tagColor,
                      border: `1px solid ${sim.tagColor}40`,
                    }}
                  >
                    {sim.tag}
                  </span>
                </div>
                <h4 style={{ margin: '0 0 6px', fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 700, lineHeight: 1.35 }}>
                  {sim.title}
                </h4>
                <p style={{ margin: '0 0 16px', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {sim.desc}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color-subtle)', paddingTop: '12px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{sim.subtitle}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>
                  <span>เปิดทดลอง</span>
                  <ChevronRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Chapters if any */}
      {recentIds.length > 0 && (
        <section className={styles.section} style={{ marginBottom: '12px' }}>
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
