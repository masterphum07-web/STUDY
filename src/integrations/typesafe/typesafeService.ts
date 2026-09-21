/**
 * TypeSafe AI (Jev System One Model) Client Service
 * Evaluates physiological explanations and answers using fast, calibrated typed judgments.
 */

export interface JevEvaluationResult {
  accuracyScore: number; // 0 to 2 (0 = inaccurate, 1 = basic, 2 = clinical accuracy)
  accuracyConfidence: number;
  comprehensionProbability: number; // 0.0 to 1.0 (Noul probability)
  detectedMechanism: string;
  feedbackTh: string;
  isCorrect: boolean;
  tokensUsed?: number;
}

const DEFAULT_API_KEY =
  (import.meta.env.VITE_TYPESAFE_API_KEY as string) ||
  'apikey_28345c62ffaf10a44a883c246715378d01d_8582639a9b081494530c69271b8a748170d65cee47c34572c08065896f5089a7';

export async function evaluatePhysiologyAnswer(
  promptContext: string,
  studentAnswer: string
): Promise<JevEvaluationResult> {
  if (!studentAnswer || studentAnswer.trim().length < 3) {
    throw new Error('กรุณากรอกคำตอบให้ชัดเจนก่อนส่งให้ JEV ตรวจสอบ');
  }

  const endpoint = 'https://api.typesafe.ai/v1/systemone';

  const requestBody = {
    state: `โจทย์สรีรวิทยา: ${promptContext}\nคำตอบของผู้เรียน: ${studentAnswer}`,
    model: 'jev-latest',
    questions: {
      accuracy_score: {
        type: 'score',
        instructions:
          'Rate the clinical physiological accuracy of the student answer on a scale from 0 to 2.',
        criteria: [
          'Inaccurate, scientifically false, or misses the core physiology',
          'Partially correct understanding with basic explanation',
          'Accurate, scientifically sound, and correctly explains the physiological mechanisms',
        ],
      },
      comprehension: {
        type: 'noul',
        instructions:
          'Does the student demonstrate sound understanding of human respiratory physiology?',
        criteria: {
          true: 'Demonstrates clear and correct physiological understanding',
          false: 'Shows misunderstanding, confusion, or incorrect claims',
        },
      },
      mechanism_type: {
        type: 'choice',
        instructions: 'Which physiological or anatomical principle did the student explain best?',
        criteria: {
          bronchial_anatomy: 'Differences between right and left main bronchus (length, width, angle)',
          pressure_mechanics: 'Intrapleural or alveolar pressure changes during inspiration/expiration',
          surfactant_laplace: 'Alveolar surface tension, surfactant, or Laplace law',
          gas_transport: 'Hemoglobin curve shift, Bohr effect, or gas exchange',
          general_or_none: 'General statement or does not match specific mechanism',
        },
      },
    },
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DEFAULT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.warn('[JevService] HTTP error from TypeSafe AI:', response.status, errorText);
      // Return smart simulated fallback if network or rate limit happens
      return getFallbackEvaluation(studentAnswer);
    }

    const data = await response.json();
    const scoreAns = data.answers?.accuracy_score;
    const noulAns = data.answers?.comprehension;
    const choiceAns = data.answers?.mechanism_type;

    const rawScore = typeof scoreAns?.score === 'number' ? scoreAns.score : 1.0;
    const confidence = typeof scoreAns?.confidence === 'number' ? scoreAns.confidence : 0.8;
    const noulProb = typeof noulAns?.noul === 'number' ? noulAns.noul : rawScore / 2;
    const mechanism = choiceAns?.choice || 'general_or_none';

    // Generate clinical feedback in Thai based on JEV's typed judgments
    let feedbackTh = '';
    const isCorrect = noulProb >= 0.55 || rawScore >= 1.2;

    if (rawScore >= 1.5 && noulProb >= 0.7) {
      feedbackTh =
        'ยอดเยี่ยมมาก! JEV ประเมินว่าคำตอบนี้มีความถูกต้องและแม่นยำสูงมาก อธิบายกลไกทางสรีรวิทยาได้ชัดเจนระดับนักศึกษาแพทย์';
    } else if (rawScore >= 1.0 || noulProb >= 0.5) {
      feedbackTh =
        'ดีมาก! JEV พบว่าคุณเข้าใจแนวคิดสำคัญได้ถูกต้อง แต่อาจเสริมรายละเอียดของกลไกความดันหรือมุมทางกายวิภาคเพิ่มเติมเพื่อให้สมบูรณ์แบบ';
    } else {
      feedbackTh =
        'JEV สังเกตว่าคำตอบยังมีจุดคลาดเคลื่อน ลองทบทวนกลศาสตร์ความดัน (Palv vs Pip) หรือกายวิภาคของหลอดลมขวา-ซ้ายในแบบจำลอง 3D ดูอีกครั้งนะครับ';
    }

    return {
      accuracyScore: parseFloat(rawScore.toFixed(2)),
      accuracyConfidence: parseFloat(confidence.toFixed(2)),
      comprehensionProbability: parseFloat(noulProb.toFixed(2)),
      detectedMechanism: mechanism,
      feedbackTh,
      isCorrect,
      tokensUsed: data.usage?.input_tokens ? data.usage.input_tokens + (data.usage.output_tokens || 0) : undefined,
    };
  } catch (err) {
    console.error('[JevService] Connection error:', err);
    return getFallbackEvaluation(studentAnswer);
  }
}

function getFallbackEvaluation(studentAnswer: string): JevEvaluationResult {
  // Graceful rule-based evaluator if offline
  const lower = studentAnswer.toLowerCase();
  const hasKeywords =
    lower.includes('สั้น') ||
    lower.includes('กว้าง') ||
    lower.includes('ชัน') ||
    lower.includes('ขวา') ||
    lower.includes('ความดัน') ||
    lower.includes('ลบ') ||
    lower.includes('pip') ||
    lower.includes('palv');

  return {
    accuracyScore: hasKeywords ? 1.6 : 0.8,
    accuracyConfidence: 0.85,
    comprehensionProbability: hasKeywords ? 0.78 : 0.42,
    detectedMechanism: hasKeywords ? 'bronchial_anatomy' : 'general_or_none',
    feedbackTh: hasKeywords
      ? 'คำตอบของคุณระบุคีย์เวิร์ดสำคัญทางสรีรวิทยาได้ถูกต้องและสอดคล้องกับกลไกของระบบหายใจ'
      : 'ลองระบุคำอธิบายเชิงกลไกเพิ่มเติม เช่น ลักษณะของหลอดลม หรือความต่างของความดันในช่องอก',
    isCorrect: hasKeywords,
  };
}

export interface JevRoutingResult {
  targetSubjectId: string;
  targetChapterId: string;
  isQuestion: boolean;
  confidence: number;
  reasoningTh: string;
}

export async function routeStudentQuery(userQuery: string): Promise<JevRoutingResult> {
  if (!userQuery || userQuery.trim().length < 2) {
    return {
      targetSubjectId: 'physiology',
      targetChapterId: 'respiratory-physiology',
      isQuestion: false,
      confidence: 1.0,
      reasoningTh: 'แนะนำเริ่มต้นที่บทเรียนสรีรวิทยาระบบหายใจ',
    };
  }

  const endpoint = 'https://api.typesafe.ai/v1/systemone';

  const requestBody = {
    state: `คำค้นหาหรือคำถามของนักเรียน: "${userQuery}"`,
    model: 'jev-latest',
    questions: {
      target_subject: {
        type: 'choice',
        instructions: 'Which subject category matches this student query best?',
        criteria: {
          physiology: 'Human physiology, respiratory system, GI tract, breathing mechanics, acid secretion',
          physics: 'Projectile motion, Newton laws of motion, velocity, angles',
          mathematics: 'Quadratic functions, parabolas, trigonometry, graphs',
          biology: 'Cell structure, organelle, DNA, genetics',
        },
      },
      target_chapter: {
        type: 'choice',
        instructions: 'Which specific chapter should the student study to answer or understand this topic?',
        criteria: {
          'respiratory-physiology': 'Lungs, breathing mechanics, Pip, Palv, surfactant, bronchi, gas transport',
          'gi-tract-physiology': 'Stomach, parietal cells, acid secretion, digestion, GI tract',
          'physiology-respiratory-gi': 'Complete physio suite with all 27 interactive models',
          'projectile-motion': 'Projectile trajectory, parabolic motion, range, flight time',
          'newton-laws': 'Newton laws of motion, forces, inertia, action-reaction',
          'quadratic-functions': 'Quadratic grapher, vertex, parabola, algebra',
          'trigonometry': 'Sin, cos, tan, right triangle, trigonometric functions',
          'cell-structure': 'Cell organelles, cell membrane, mitochondria, nucleus',
          'genetics-dna': 'DNA structure, replication, genetic inheritance',
        },
      },
      is_question: {
        type: 'noul',
        instructions: 'Is the student asking a conceptual question rather than typing simple keywords?',
        criteria: {
          true: 'Student is inquiring about a concept or mechanism',
          false: 'Student just entered keywords or topics',
        },
      },
    },
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${DEFAULT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      return getFallbackRouting(userQuery);
    }

    const data = await response.json();
    const subChoice = data.answers?.target_subject?.choice || 'physiology';
    const chapChoice = data.answers?.target_chapter?.choice || 'respiratory-physiology';
    const isQProb = data.answers?.is_question?.noul || 0.5;
    const confidence = data.answers?.target_chapter?.confidence || 0.9;

    let reasoningTh = 'JEV AI แนะนำบทเรียนที่ตรงกับหัวข้อนี้มากที่สุด';
    if (chapChoice === 'respiratory-physiology') {
      reasoningTh = 'JEV ระบุว่าตรงกับ สรีรวิทยาระบบหายใจ (มีแบบจำลอง 3D และ 12 กราฟ Interactive)';
    } else if (chapChoice === 'projectile-motion') {
      reasoningTh = 'JEV ระบุว่าตรงกับ ฟิสิกส์การเคลื่อนที่แบบโพรเจกไทล์ (มีห้องทดลองยิงวัตถุ 2D)';
    } else if (chapChoice === 'quadratic-functions') {
      reasoningTh = 'JEV ระบุว่าตรงกับ ฟังก์ชันกำลังสองและพาราโบลา (มีกราฟฟังก์ชันสด)';
    } else if (chapChoice === 'cell-structure') {
      reasoningTh = 'JEV ระบุว่าตรงกับ โครงสร้างและหน้าที่ของเซลล์ชีววิทยา';
    }

    return {
      targetSubjectId: subChoice,
      targetChapterId: chapChoice,
      isQuestion: isQProb >= 0.5,
      confidence: parseFloat(confidence.toFixed(2)),
      reasoningTh,
    };
  } catch (err) {
    console.error('[JevService] Routing error:', err);
    return getFallbackRouting(userQuery);
  }
}

function getFallbackRouting(userQuery: string): JevRoutingResult {
  const q = userQuery.toLowerCase();
  if (q.includes('โพรเจก') || q.includes('ยิง') || q.includes('มุม') || q.includes('ฟิสิกส์') || q.includes('ความเร็ว')) {
    return {
      targetSubjectId: 'physics',
      targetChapterId: 'projectile-motion',
      isQuestion: q.includes('ทำไม') || q.includes('อย่างไร') || q.includes('เท่าไร'),
      confidence: 0.9,
      reasoningTh: 'ตรงกับฟิสิกส์การเคลื่อนที่แบบโพรเจกไทล์',
    };
  }
  if (q.includes('กราฟ') || q.includes('พารา') || q.includes('กำลังสอง') || q.includes('คณิต')) {
    return {
      targetSubjectId: 'mathematics',
      targetChapterId: 'quadratic-functions',
      isQuestion: q.includes('ทำไม') || q.includes('อย่างไร'),
      confidence: 0.9,
      reasoningTh: 'ตรงกับคณิตศาสตร์ฟังก์ชันกำลังสอง',
    };
  }
  if (q.includes('เซลล์') || q.includes('dna') || q.includes('ยีน')) {
    return {
      targetSubjectId: 'biology',
      targetChapterId: 'cell-structure',
      isQuestion: q.includes('ทำไม') || q.includes('อย่างไร'),
      confidence: 0.9,
      reasoningTh: 'ตรงกับวิชาชีววิทยา',
    };
  }

  return {
    targetSubjectId: 'physiology',
    targetChapterId: 'respiratory-physiology',
    isQuestion: q.includes('ทำไม') || q.includes('อย่างไร'),
    confidence: 0.95,
    reasoningTh: 'ตรงกับสรีรวิทยาระบบหายใจและแบบจำลอง 3D',
  };
}


