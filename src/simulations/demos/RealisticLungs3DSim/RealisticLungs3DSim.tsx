import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {
  Play,
  Pause,
  RotateCcw,
  Eye,
  Maximize2,
  Minimize2,
  Info,
  X,
  Activity,
  Layers,
} from 'lucide-react';
import styles from './RealisticLungs3DSim.module.css';

interface LandmarkPin {
  id: string;
  label: string;
  nameTh: string;
  nameEn: string;
  position: THREE.Vector3;
  description: string;
  clinicalNote: string;
}

const LANDMARKS: LandmarkPin[] = [
  {
    id: 'trachea',
    label: '1',
    nameTh: 'หลอดลมคอ (Trachea)',
    nameEn: 'Trachea with Cartilaginous Rings',
    position: new THREE.Vector3(0, 2.7, 0.4),
    description:
      'ท่อทางเดินหายใจยาวประมาณ 10-12 ซม. ประกอบด้วยกระดูกอ่อนรูปตัว C (C-shaped cartilage rings) 16-20 วง ป้องกันไม่ให้ท่อลมตีบตันยุบตัวขณะหายใจเข้า',
    clinicalNote:
      'ด้านหลังของท่อลมเป็นกล้ามเนื้อเรียบ Trachealis ติดกับหลอดอาหาร ช่วยให้หลอดอาหารขยายตัวได้เมื่อกลืนก้อนอาหาร',
  },
  {
    id: 'carina',
    label: '2',
    nameTh: 'สันแยกหลอดลม (Carina)',
    nameEn: 'Tracheal Carina Bifurcation',
    position: new THREE.Vector3(0, 1.7, 0.4),
    description:
      'สันกระดูกอ่อนรูปตัว V ที่จุดแยกตัวระหว่างหลอดลมหลักขวาและซ้าย (ระดับ T4-T5 หรือ Sternal Angle) เป็นจุดที่มีปลายประสาทรับความรู้สึกไวที่สุดในทางเดินหายใจ',
    clinicalNote:
      'เป็นบริเวณกระตุ้น Cough Reflex (อาการไอ) ที่รุนแรงที่สุด หากมีสิ่งแปลกปลอมหรือเสมหะตกถึง Carina จะไอทันที',
  },
  {
    id: 'right-bronchus',
    label: '3',
    nameTh: 'หลอดลมหลักขวา (Right Main Bronchus)',
    nameEn: 'Right Primary Bronchus',
    position: new THREE.Vector3(0.9, 1.25, 0.35),
    description:
      'หลอดลมขวามีลักษณะ: สั้นกว่า (~2.5 ซม.), กว้างกว่า, และทำมุมชันในแนวดิ่งมากกว่า (~25° จากแนวดิ่ง) เทียบกับหลอดลมซ้าย',
    clinicalNote:
      'สิ่งแปลกปลอมที่สำลัก (Foreign Body Aspiration) จึงมักตกลงสู่หลอดลมข้างขวามากกว่าข้างซ้ายอย่างมีนัยสำคัญ',
  },
  {
    id: 'right-lung',
    label: '4',
    nameTh: 'ปอดขวา 3 กลีบ (Right Lung: 3 Lobes)',
    nameEn: 'Right Lung (Superior, Middle, Inferior)',
    position: new THREE.Vector3(2.1, 0.4, 0.65),
    description:
      'ปอดขวามี 3 กลีบ (Superior, Middle, Inferior) คั่นด้วย 2 ร่อง (Horizontal fissure และ Oblique fissure) มีขนาดใหญ่และสั้นกว่าปอดซ้ายเล็กน้อยเนื่องจากตับดันขึ้นมาจากด้านล่าง',
    clinicalNote:
      'ปริมาตรปอดขวาคิดเป็นประมาณ 55% ของการแลกเปลี่ยนก๊าซทั้งหมดในร่างกาย',
  },
  {
    id: 'left-lung',
    label: '5',
    nameTh: 'ปอดซ้ายและรอยเว้าหัวใจ (Left Lung & Cardiac Notch)',
    nameEn: 'Left Lung with Cardiac Notch (2 Lobes)',
    position: new THREE.Vector3(-2.1, 0.3, 0.65),
    description:
      'ปอดซ้ายมีเพียง 2 กลีบ (Superior และ Inferior) คั่นด้วย Oblique fissure โดยขอบด้านหน้าของกลีบบนมีรอยเว้าหัวใจ (Cardiac Notch) และติ่งลิ้นก้นหอย (Lingula)',
    clinicalNote:
      'รอยเว้าหัวใจรองรับยอดหัวใจ (Apex of Heart) ที่ชี้เอียงมาทางซ้าย',
  },
  {
    id: 'diaphragm',
    label: '6',
    nameTh: 'กะบังลม (Diaphragm)',
    nameEn: 'Muscular Diaphragm Dome',
    position: new THREE.Vector3(0, -2.15, 0.7),
    description:
      'กล้ามเนื้อรูปโดมคั่นระหว่างช่องอกและช่องท้อง เป็นกล้ามเนื้อหลักที่รับผิดชอบการหายใจเข้าถึง 75% ควบคุมโดย Phrenic Nerve (C3-C5)',
    clinicalNote:
      'ขณะหายใจเข้า กะบังลมหดตัวแบนราบลง 1.5 - 7 ซม. ทำให้ปริมาตรช่องอกเพิ่มขึ้นและความดันในถุงลม Palv ลดลงเป็นลบ อากาศจึงไหลเข้าสู่ปอด',
  },
];

export const RealisticLungs3DSim: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animIdRef = useRef<number | null>(null);

  // 3D dynamic components references
  const rightLungGroupRef = useRef<THREE.Group | null>(null);
  const leftLungGroupRef = useRef<THREE.Group | null>(null);
  const diaphragmMeshRef = useRef<THREE.Mesh | null>(null);
  const bronchialTreeGroupRef = useRef<THREE.Group | null>(null);
  const lungMaterialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);

  // Interactive UI states
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [bpm, setBpm] = useState<number>(14);
  const [tissueOpacity, setTissueOpacity] = useState<number>(0.65);
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkPin | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Projected 2D pin screen coordinates
  const [screenPins, setScreenPins] = useState<{ id: string; x: number; y: number; label: string }[]>([]);

  // Real-time physiological telemetry state
  const [telemetry, setTelemetry] = useState({
    phase: 'Inspiration (หายใจเข้า)',
    phasePercent: 0,
    volumeMl: 2500,
    tidalVolumeMl: 0,
    alveolarPressure: 0,
    intrapleuralPressure: -4.0,
    transpulmonaryPressure: 4.0,
  });

  // Cycle animation reference time
  const cycleTimeRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Setup Three.js Scene
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    lastTimeRef.current = performance.now();

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 11);
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    // OrbitControls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 4.5;
    controls.maxDistance = 20;
    controls.target.set(0, 0.2, 0);
    controls.maxPolarAngle = Math.PI * 0.85; // don't go completely under
    controlsRef.current = controls;

    // Lighting setup (Medical studio 3-point lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(5, 8, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x7dd3fc, 0.8);
    fillLight.position.set(-6, 4, 6);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
    rimLight.position.set(0, 6, -8);
    scene.add(rimLight);

    const bottomBounce = new THREE.DirectionalLight(0xf472b6, 0.35);
    bottomBounce.position.set(0, -6, 4);
    scene.add(bottomBounce);

    // ==========================================
    // PROCEDURAL ANATOMICAL MODELING
    // ==========================================
    lungMaterialsRef.current = [];

    // Materials
    const cartilageMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.3,
      metalness: 0.1,
    });

    const tracheaTubeMat = new THREE.MeshStandardMaterial({
      color: 0xe07a6a,
      roughness: 0.5,
      metalness: 0.05,
    });

    const bronchusMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.35,
      metalness: 0.1,
    });

    const lungTissueMat = new THREE.MeshPhysicalMaterial({
      color: 0xf43f5e,
      roughness: 0.45,
      metalness: 0.05,
      transmission: 0.45,
      transparent: true,
      opacity: 0.65,
      clearcoat: 0.25,
      clearcoatRoughness: 0.3,
      ior: 1.35,
    });
    lungMaterialsRef.current.push(lungTissueMat);

    // 1. TRACHEA & CARTILAGE RINGS
    const tracheaGroup = new THREE.Group();
    const tracheaHeight = 1.8;
    const tracheaRadius = 0.35;
    const tracheaCenterY = 2.65;

    // Central inner mucosa cylinder
    const tracheaGeom = new THREE.CylinderGeometry(
      tracheaRadius * 0.95,
      tracheaRadius * 0.95,
      tracheaHeight,
      32
    );
    const tracheaMesh = new THREE.Mesh(tracheaGeom, tracheaTubeMat);
    tracheaMesh.position.set(0, tracheaCenterY, 0);
    tracheaGroup.add(tracheaMesh);

    // 10 Anatomical C-shaped Cartilaginous Rings
    const ringCount = 10;
    for (let i = 0; i < ringCount; i++) {
      const ringY = tracheaCenterY - tracheaHeight / 2 + 0.1 + (i * (tracheaHeight - 0.2)) / (ringCount - 1);
      const ringGeom = new THREE.TorusGeometry(tracheaRadius, 0.065, 12, 32, Math.PI * 1.6);
      const ringMesh = new THREE.Mesh(ringGeom, cartilageMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.rotation.z = Math.PI * 0.2; // open posterior side
      ringMesh.position.set(0, ringY, 0);
      tracheaGroup.add(ringMesh);
    }
    scene.add(tracheaGroup);

    // 2. CARINA & BRONCHIAL TREE
    const bronchialGroup = new THREE.Group();
    bronchialTreeGroupRef.current = bronchialGroup;

    // Carina junction
    const carinaGeom = new THREE.SphereGeometry(0.38, 24, 24);
    const carinaMesh = new THREE.Mesh(carinaGeom, cartilageMat);
    carinaMesh.position.set(0, 1.75, 0);
    carinaMesh.scale.set(1, 0.8, 1);
    bronchialGroup.add(carinaMesh);

    // Right Main Bronchus (Shorter, wider, more vertical ~25°)
    const rightBronchusGeom = new THREE.CylinderGeometry(0.26, 0.24, 1.3, 20);
    const rightBronchusMesh = new THREE.Mesh(rightBronchusGeom, bronchusMat);
    rightBronchusMesh.position.set(0.48, 1.3, 0);
    rightBronchusMesh.rotation.z = -0.42; // ~24 degrees
    bronchialGroup.add(rightBronchusMesh);

    // Right Lobar Bronchi (3 branches: Superior, Middle, Inferior)
    const rLobarSup = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.14, 0.9, 16), bronchusMat);
    rLobarSup.position.set(0.95, 1.3, 0.1);
    rLobarSup.rotation.z = -0.9;
    bronchialGroup.add(rLobarSup);

    const rLobarMid = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.85, 16), bronchusMat);
    rLobarMid.position.set(1.0, 0.8, 0.2);
    rLobarMid.rotation.z = -0.35;
    bronchialGroup.add(rLobarMid);

    const rLobarInf = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.13, 1.1, 16), bronchusMat);
    rLobarInf.position.set(0.9, 0.4, -0.1);
    rLobarInf.rotation.z = -0.15;
    bronchialGroup.add(rLobarInf);

    // Left Main Bronchus (Longer, narrower, more horizontal ~45°)
    const leftBronchusGeom = new THREE.CylinderGeometry(0.22, 0.2, 1.9, 20);
    const leftBronchusMesh = new THREE.Mesh(leftBronchusGeom, bronchusMat);
    leftBronchusMesh.position.set(-0.75, 1.25, 0);
    leftBronchusMesh.rotation.z = 0.78; // ~45 degrees
    bronchialGroup.add(leftBronchusMesh);

    // Left Lobar Bronchi (2 branches: Superior, Inferior)
    const lLobarSup = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, 1.0, 16), bronchusMat);
    lLobarSup.position.set(-1.45, 1.3, 0.1);
    lLobarSup.rotation.z = 0.85;
    bronchialGroup.add(lLobarSup);

    const lLobarInf = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, 1.1, 16), bronchusMat);
    lLobarInf.position.set(-1.3, 0.45, -0.1);
    lLobarInf.rotation.z = 0.25;
    bronchialGroup.add(lLobarInf);

    scene.add(bronchialGroup);

    // 3. RIGHT LUNG (3 distinct anatomical lobes: Superior, Middle, Inferior)
    const rightLungGroup = new THREE.Group();
    rightLungGroupRef.current = rightLungGroup;
    rightLungGroup.position.set(0.6, 0.3, 0); // Hilum anchor

    // Superior Lobe (Upper)
    const rSupGeom = new THREE.SphereGeometry(1.0, 32, 28);
    rSupGeom.scale(1.1, 1.25, 1.0);
    const rSupMesh = new THREE.Mesh(rSupGeom, lungTissueMat);
    rSupMesh.position.set(1.0, 1.0, 0);
    rSupMesh.rotation.z = -0.1;
    rightLungGroup.add(rSupMesh);

    // Middle Lobe
    const rMidGeom = new THREE.SphereGeometry(0.9, 32, 28);
    rMidGeom.scale(1.05, 0.85, 0.95);
    const rMidMesh = new THREE.Mesh(rMidGeom, lungTissueMat);
    rMidMesh.position.set(1.15, 0.15, 0.25);
    rightLungGroup.add(rMidMesh);

    // Inferior Lobe (Base)
    const rInfGeom = new THREE.SphereGeometry(1.2, 32, 28);
    rInfGeom.scale(1.2, 1.1, 1.1);
    const rInfMesh = new THREE.Mesh(rInfGeom, lungTissueMat);
    rInfMesh.position.set(1.05, -0.9, -0.1);
    rightLungGroup.add(rInfMesh);

    scene.add(rightLungGroup);

    // 4. LEFT LUNG (2 lobes + Cardiac Notch + Lingula)
    const leftLungGroup = new THREE.Group();
    leftLungGroupRef.current = leftLungGroup;
    leftLungGroup.position.set(-0.6, 0.3, 0); // Hilum anchor

    // Left Superior Lobe with Cardiac Notch
    const lSupGeom = new THREE.SphereGeometry(1.05, 32, 28);
    // Vertex deformation to carve out anatomical Cardiac Notch (เว้าหัวใจ)
    const posAttr = lSupGeom.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vy = posAttr.getY(i);
      const vz = posAttr.getZ(i);

      // Medial anterior region indentation
      if (vx > -0.1 && vy < 0.2 && vz > -0.1) {
        posAttr.setX(i, vx * 0.55);
        posAttr.setZ(i, vz * 0.7);
      }
    }
    lSupGeom.computeVertexNormals();
    lSupGeom.scale(1.05, 1.35, 0.95);

    const lSupMesh = new THREE.Mesh(lSupGeom, lungTissueMat);
    lSupMesh.position.set(-1.0, 0.95, 0);
    lSupMesh.rotation.z = 0.1;
    leftLungGroup.add(lSupMesh);

    // Left Inferior Lobe
    const lInfGeom = new THREE.SphereGeometry(1.15, 32, 28);
    lInfGeom.scale(1.15, 1.2, 1.05);
    const lInfMesh = new THREE.Mesh(lInfGeom, lungTissueMat);
    lInfMesh.position.set(-1.0, -0.85, -0.1);
    leftLungGroup.add(lInfMesh);

    scene.add(leftLungGroup);

    // Subtle Cardiac silhouette (Heart nestled in Cardiac Notch)
    const heartGeom = new THREE.SphereGeometry(0.7, 24, 24);
    heartGeom.scale(0.9, 1.15, 0.85);
    const heartMat = new THREE.MeshStandardMaterial({
      color: 0x991b1b,
      roughness: 0.5,
      metalness: 0.1,
      transparent: true,
      opacity: 0.5,
    });
    const heartMesh = new THREE.Mesh(heartGeom, heartMat);
    heartMesh.position.set(-0.25, -0.1, 0.3);
    heartMesh.rotation.z = 0.25;
    scene.add(heartMesh);

    // 5. DIAPHRAGM DOME (กะบังลม)
    const diaphragmRadius = 3.6;
    const diaphragmGeom = new THREE.SphereGeometry(
      diaphragmRadius,
      36,
      20,
      0,
      Math.PI * 2,
      0,
      Math.PI * 0.36
    );
    // Flatten and curve
    diaphragmGeom.scale(1.0, 0.45, 0.85);
    const diaphragmMat = new THREE.MeshStandardMaterial({
      color: 0x881337,
      roughness: 0.6,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });
    const diaphragmMesh = new THREE.Mesh(diaphragmGeom, diaphragmMat);
    diaphragmMesh.position.set(0, -2.1, 0);
    diaphragmMesh.rotation.x = Math.PI; // dome curves upwards toward lungs
    diaphragmMeshRef.current = diaphragmMesh;
    scene.add(diaphragmMesh);

    // Central tendon patch of diaphragm
    const tendonGeom = new THREE.CircleGeometry(1.4, 24);
    const tendonMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75,
    });
    const tendonMesh = new THREE.Mesh(tendonGeom, tendonMat);
    tendonMesh.rotation.x = Math.PI / 2;
    tendonMesh.position.set(0, -2.08, 0);
    tendonMesh.scale.set(1.2, 0.8, 1);
    scene.add(tendonMesh);

    // ==========================================
    // RENDER & ANIMATION LOOP
    // ==========================================
    const render = () => {
      animIdRef.current = requestAnimationFrame(render);

      const now = performance.now();
      const deltaSec = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      // Update cycle only when playing
      if (isPlaying) {
        // Cycle duration: 60s / bpm
        const cycleDuration = 60 / bpm;
        cycleTimeRef.current = (cycleTimeRef.current + deltaSec) % cycleDuration;

        const cycleProgress = cycleTimeRef.current / cycleDuration; // 0.0 -> 1.0

        // Inhalation is ~40% of cycle, Exhalation is ~60% of cycle
        let breathFactor = 0; // 0.0 (minimum volume) -> 1.0 (peak volume)
        let isInsp = true;
        let palv = 0;
        let pip = -4.0;

        if (cycleProgress <= 0.4) {
          // Inspiration phase
          isInsp = true;
          const phaseT = cycleProgress / 0.4; // 0 -> 1
          breathFactor = Math.sin((phaseT * Math.PI) / 2); // Smooth ease in
          // Palv drops to -1 mmHg at midpoint of inspiration, then returns to 0
          palv = -1.0 * Math.sin(phaseT * Math.PI);
          // Pip drops from -4 mmHg down to -7 mmHg
          pip = -4.0 - 3.0 * breathFactor;
        } else {
          // Expiration phase
          isInsp = false;
          const phaseT = (cycleProgress - 0.4) / 0.6; // 0 -> 1
          breathFactor = Math.cos((phaseT * Math.PI) / 2); // Smooth recoil
          // Palv rises to +1 mmHg at midpoint of expiration, then returns to 0
          palv = 1.0 * Math.sin(phaseT * Math.PI);
          // Pip returns from -7 mmHg back to -4 mmHg
          pip = -7.0 + 3.0 * (1 - breathFactor);
        }

        // Apply 3D biological expansion to lungs
        // Lateral (X) and Anteroposterior (Z) increase ~14%, vertical (Y) ~8%
        const scaleX = 1.0 + breathFactor * 0.14;
        const scaleY = 1.0 + breathFactor * 0.08;
        const scaleZ = 1.0 + breathFactor * 0.12;

        if (rightLungGroupRef.current) {
          rightLungGroupRef.current.scale.set(scaleX, scaleY, scaleZ);
        }
        if (leftLungGroupRef.current) {
          leftLungGroupRef.current.scale.set(scaleX, scaleY, scaleZ);
        }

        // Diaphragm descends during inspiration (~0.38 units)
        if (diaphragmMeshRef.current) {
          diaphragmMeshRef.current.position.y = -2.1 - breathFactor * 0.38;
        }

        // Update telemetry data
        setTelemetry({
          phase: isInsp ? 'Inspiration (หายใจเข้า)' : 'Expiration (หายใจออก)',
          phasePercent: Math.round(cycleProgress * 100),
          volumeMl: Math.round(2500 + breathFactor * 500),
          tidalVolumeMl: Math.round(breathFactor * 500),
          alveolarPressure: parseFloat(palv.toFixed(1)),
          intrapleuralPressure: parseFloat(pip.toFixed(1)),
          transpulmonaryPressure: parseFloat((palv - pip).toFixed(1)),
        });
      }

      controls.update();
      renderer.render(scene, camera);

      // Project 3D landmark pins to 2D viewport coordinates
      if (camera && canvas) {
        const rect = canvas.getBoundingClientRect();
        const pins = LANDMARKS.map((landmark) => {
          const v = landmark.position.clone();
          v.project(camera);
          // Check if behind camera
          if (v.z > 1) {
            return { id: landmark.id, x: -9999, y: -9999, label: landmark.label };
          }
          const screenX = ((v.x + 1) * rect.width) / 2;
          const screenY = ((-v.y + 1) * rect.height) / 2;
          return {
            id: landmark.id,
            x: screenX,
            y: screenY,
            label: landmark.label,
          };
        });
        setScreenPins(pins);
      }
    };

    render();

    // Handle container resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
    };
  }, [bpm, isPlaying]);

  // Update tissue opacity
  useEffect(() => {
    lungMaterialsRef.current.forEach((mat) => {
      mat.opacity = tissueOpacity;
      mat.transmission = tissueOpacity < 0.4 ? 0.8 : 0.45;
      mat.needsUpdate = true;
    });
  }, [tissueOpacity]);

  // Reset Camera View
  const handleResetCamera = useCallback(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.position.set(0, 0.4, 11);
    controlsRef.current.target.set(0, 0.2, 0);
    controlsRef.current.update();
  }, []);

  // Toggle full width/fullscreen for the simulation viewport
  const handleToggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className={styles.simWrapper}>
      {/* Simulation Header */}
      <div className={styles.simHeader}>
        <div className={styles.headerTitleGroup}>
          <span className={styles.badge3D}>3D Three.js</span>
          <h3 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            แบบจำลอง 3D สรีรวิทยาปอดและระบบหายใจมนุษย์ (Realistic Human Lungs & Respiratory Mechanics)
          </h3>
        </div>

        <div className={styles.headerActions}>
          <button
            type="button"
            className={`${styles.actionBtn} ${isPlaying ? styles.actionBtnActive : ''}`}
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'หยุดการเคลื่อนไหวชั่วคราว' : 'เริ่มเคลื่อนไหว'}
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            <span>{isPlaying ? 'หยุดชั่วคราว' : 'เล่นต่อ'}</span>
          </button>

          <button
            type="button"
            className={styles.actionBtn}
            onClick={handleResetCamera}
            title="รีเซ็ตมุมมองกล้อง"
          >
            <RotateCcw size={15} />
            <span>รีเซ็ตมุมมอง</span>
          </button>

          <button
            type="button"
            className={styles.actionBtn}
            onClick={handleToggleFullscreen}
            title="ขยายแบบจำลอง 3D เต็มจอ"
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            <span>{isFullscreen ? 'ออกเต็มจอ' : 'เต็มจอ 3D'}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className={styles.viewportContainer}
        style={{ height: isFullscreen ? '100vh' : '540px' }}
      >
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* 3D Landmark Hotspot Pins */}
        {screenPins.map((pin) => {
          if (pin.x < 0 || pin.y < 0) return null;
          const isSelected = selectedLandmark?.id === pin.id;
          const landmarkData = LANDMARKS.find((l) => l.id === pin.id);
          return (
            <div
              key={pin.id}
              className={styles.hotspotPin}
              style={{ left: `${pin.x}px`, top: `${pin.y}px` }}
              onClick={() => setSelectedLandmark(landmarkData || null)}
              title={landmarkData?.nameTh}
            >
              <div className={`${styles.pinDot} ${isSelected ? styles.pinDotActive : ''}`}>
                {pin.label}
              </div>
            </div>
          );
        })}

        {/* Real-time Physiological Telemetry HUD */}
        <div className={styles.telemetryOverlay}>
          <div className={styles.telemetryTitle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Activity size={14} />
              <span>Telemetry สด</span>
            </div>
            <span
              className={`${styles.phaseBadge} ${
                telemetry.phase.startsWith('Insp')
                  ? styles.phaseInspiration
                  : styles.phaseExpiration
              }`}
            >
              {telemetry.phase.startsWith('Insp') ? 'Inspiration' : 'Expiration'}
            </span>
          </div>

          <div className={styles.telemetryGrid}>
            <span className={styles.telemetryLabel}>ความดันถุงลม (Palv):</span>
            <span
              className={styles.telemetryValue}
              style={{
                color:
                  telemetry.alveolarPressure < 0
                    ? '#38bdf8'
                    : telemetry.alveolarPressure > 0
                    ? '#f43f5e'
                    : '#34d399',
              }}
            >
              {telemetry.alveolarPressure > 0 ? `+${telemetry.alveolarPressure}` : telemetry.alveolarPressure} mmHg
            </span>

            <span className={styles.telemetryLabel}>เยื่อหุ้มปอด (Pip):</span>
            <span className={styles.telemetryValue} style={{ color: '#a78bfa' }}>
              {telemetry.intrapleuralPressure} mmHg
            </span>

            <span className={styles.telemetryLabel}>Transpulmonary (Ptp):</span>
            <span className={styles.telemetryValue} style={{ color: '#f59e0b' }}>
              +{telemetry.transpulmonaryPressure} mmHg
            </span>

            <span className={styles.telemetryLabel}>ปริมาตรหายใจ (VT):</span>
            <span className={styles.telemetryValue}>
              {telemetry.tidalVolumeMl} mL
            </span>

            <span className={styles.telemetryLabel}>ปริมาตรรวมในปอด:</span>
            <span className={styles.telemetryValue} style={{ color: '#93c5fd' }}>
              {telemetry.volumeMl} mL
            </span>
          </div>
        </div>

        {/* Hotspot Selected Detail Card */}
        {selectedLandmark && (
          <div className={styles.hotspotCard}>
            <div className={styles.hotspotCardHeader}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>
                  {selectedLandmark.nameEn}
                </span>
                <h4 className={styles.hotspotCardTitle}>{selectedLandmark.nameTh}</h4>
              </div>
              <button
                type="button"
                className={styles.closeCardBtn}
                onClick={() => setSelectedLandmark(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className={styles.hotspotCardBody}>
              <p style={{ margin: '0 0 8px' }}>{selectedLandmark.description}</p>
              <div className={styles.hotspotCardClinical}>
                <strong>💡 ความสำคัญทางคลินิก/สรีรวิทยา:</strong>
                <p style={{ margin: '4px 0 0' }}>{selectedLandmark.clinicalNote}</p>
              </div>
            </div>
          </div>
        )}

        {/* Touch & Interaction Hint */}
        <div className={styles.touchHint}>
          <Info size={14} />
          <span>
            หมุน 360° (คลิก/สัมผัสลาก) • ซูมเข้า-ออก (ล้อเมาส์ / กางสองนิ้ว) • คลิกจุดตัวเลข 1-6 เพื่อดูจุดกายวิภาค
          </span>
        </div>
      </div>

      {/* Control Toolbar below Canvas */}
      <div className={styles.controlToolbar}>
        {/* Breathing Rate Selector */}
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>อัตราการหายใจ (Respiratory Rate):</span>
          <div className={styles.rateButtons}>
            <button
              type="button"
              className={`${styles.rateBtn} ${bpm === 6 ? styles.rateBtnActive : ''}`}
              onClick={() => setBpm(6)}
            >
              Bradypnea (6 bpm)
            </button>
            <button
              type="button"
              className={`${styles.rateBtn} ${bpm === 14 ? styles.rateBtnActive : ''}`}
              onClick={() => setBpm(14)}
            >
              ปกติ (14 bpm)
            </button>
            <button
              type="button"
              className={`${styles.rateBtn} ${bpm === 24 ? styles.rateBtnActive : ''}`}
              onClick={() => setBpm(24)}
            >
              Tachypnea (24 bpm)
            </button>
            <button
              type="button"
              className={`${styles.rateBtn} ${bpm === 36 ? styles.rateBtnActive : ''}`}
              onClick={() => setBpm(36)}
            >
              ออกกำลัง (36 bpm)
            </button>
          </div>
        </div>

        {/* X-Ray / Tissue Opacity Slider */}
        <div className={styles.controlGroup}>
          <div className={styles.sliderGroup}>
            <Layers size={16} color="var(--primary)" />
            <span className={styles.controlLabel}>โหมด X-Ray / ความโปร่งแสงเนื้อปอด:</span>
            <input
              type="range"
              min="0.15"
              max="0.95"
              step="0.05"
              value={tissueOpacity}
              onChange={(e) => setTissueOpacity(parseFloat(e.target.value))}
              className={styles.rangeInput}
              aria-label="ความโปร่งแสงเนื้อปอด"
            />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', minWidth: '36px' }}>
              {Math.round(tissueOpacity * 100)}%
            </span>
          </div>

          <button
            type="button"
            className={`${styles.actionBtn} ${tissueOpacity <= 0.25 ? styles.actionBtnActive : ''}`}
            onClick={() => setTissueOpacity(tissueOpacity <= 0.25 ? 0.7 : 0.2)}
            title="สลับโหมดโปร่งแสงเพื่อดูหลอดลมภายใน"
          >
            <Eye size={14} />
            <span>{tissueOpacity <= 0.25 ? 'ดูเนื้อปอดทึบ' : 'X-Ray ดูหลอดลม'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealisticLungs3DSim;
