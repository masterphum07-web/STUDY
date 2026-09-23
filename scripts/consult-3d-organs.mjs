import { askJevDecision } from './jev-consult.mjs';

async function consult3DModels() {
  console.log('Consulting JEV System One for Musculoskeletal and Hepatobiliary 3D simulations...');

  const decisions = await askJevDecision(
    'สร้างแบบจำลอง 3 มิติ Procedural Three.js สำหรับบทเรียน Musculoskeletal (กระดูกและข้อ) และ Hepatobiliary (ตับและถุงน้ำดี) ตามมาตรฐาน RealisticLungs และ RealisticPathology',
    {
      hepatobiliary_model_design: {
        type: 'choice',
        instructions: 'What procedural geometry and interactive features should RealisticHepatobiliary3DSim include?',
        criteria: {
          liver_gallbladder_pancreas_suite: 'Procedural dual-lobed liver (falciform ligament), pear-shaped gallbladder with cystic duct, pancreatic head/body, portal triad, toggleable pathologies: Cirrhosis micronodular scarring, Gallstones (Cholelithiasis), Hepatocellular Carcinoma (HCC), and Acute Pancreatitis fat necrosis, with coronal cutaway and live Bilirubin/Jaundice telemetry HUD',
          liver_only_simple_mesh: 'Only simple single lobe liver without biliary tree or pancreas',
        },
      },
      musculoskeletal_model_design: {
        type: 'choice',
        instructions: 'What procedural geometry and interactive features should RealisticBoneJoint3DSim include?',
        criteria: {
          femur_knee_joint_suite: 'Procedural cortical bone & trabecular spongiosa cross-section, articulating knee joint (femur condyles, tibia plateau, meniscus, cartilage), toggleable pathologies: Osteoporosis trabecular thinning, Transverse/Oblique fracture with callus, Osteoarthritis osteophytes/eburnation vs Rheumatoid synovial pannus, Gout tophus, with live T-score DXA HUD',
          wireframe_skeleton: 'Basic wireframe stick-figure skeleton without cellular/trabecular detail',
        },
      },
      simulation_registration: {
        type: 'choice',
        instructions: 'How should these simulations be linked in the pathology chapters and simulation registry?',
        criteria: {
          register_and_tag_chapters: 'Register realistic-neuropathology-3d, realistic-hepatobiliary-3d, and realistic-bone-joint-3d in simulation registry, and add simulationIds in chapter roots (neuropathology, musculoskeletal, hepatobiliary-pancreas) so SubjectPage badges and 3D embeds render cleanly',
          embed_in_single_chapter: 'Embed all three in one chapter only',
        },
      },
    }
  );

  console.log('JEV System One Decisions:');
  console.log(JSON.stringify(decisions, null, 2));
}

consult3DModels();

