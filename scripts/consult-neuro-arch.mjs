import { askJevDecision } from './jev-consult.mjs';

async function runConsult() {
  console.log('Consulting JEV System One for Neuropathology & Organ Pathology Architecture...');

  const decisions = await askJevDecision(
    'ออกแบบสถาปัตยกรรมและ 3D Simulation สำหรับบทเรียน Neuropathology, Musculoskeletal, และ Hepatobiliary/Pancreas ตามสไลด์การสอนของอาจารย์และ Qwen interactive module',
    {
      sim_model_choice: {
        type: 'choice',
        instructions: 'Which 3D procedural simulation model provides the highest educational yield for Neuropathology aligned with the lecture?',
        criteria: {
          realistic_neuro_brain_sim: 'High-fidelity procedural 3D Brain & Cranium model with hemispheres, gyri/sulci bump mapping, brainstem, cerebellum, ventricular system, and toggleable lesions (Epidural/Subdural hematoma, MCA Ischemic Infarction, Uncal Herniation, Meningitis) with cutaway and ICP telemetry HUD',
          split_dual_sim: 'Split dual simulation with low-poly brain and separate small liver organ model',
          static_diagram_only: 'Use only 2D SVG diagrams without 3D WebGL',
        },
      },
      chapter_structure: {
        type: 'choice',
        instructions: 'How should the new chapters be structured in the pathology subject?',
        criteria: {
          four_focused_chapters: '4 dedicated chapters: Neuropathology, Musculoskeletal, Hepatobiliary & Pancreas, and Multi-System Interactive Lab & Quiz Bank',
          single_giant_chapter: 'Merge everything into one single giant chapter',
        },
      },
      qwen_reader_integration: {
        type: 'choice',
        instructions: 'How should the single-file Qwen interactive module (ไตประสาท.txt) be mounted?',
        criteria: {
          public_qwen_module_with_iframe: 'Mount at public/qwen-modules/pathology/neuro-msk-hbp/index.html and integrate via full-screen responsive iframe reader in pathology chapters',
          inline_react_reimplementation: 'Re-implement all 180,000 characters of HTML/JS as raw inline React components',
        },
      },
      threejs_procedural_fidelity: {
        type: 'choice',
        instructions: 'What shader and geometry techniques should be used for the procedural brain according to img2threejs?',
        criteria: {
          organic_pbr_procedural: 'Organic compound geometries (dual cerebral hemispheres with gyri displacement, cerebellum folia ridges, brainstem, ventricular CSF cavity, interactive lesion meshes, glow pulses for stroke/ischemia, clipping planes for coronal cutaway)',
          basic_primitive_spheres: 'Basic plain spheres without displacement or anatomical topology',
        },
      },
    }
  );

  console.log('JEV System One Decisions:');
  console.log(JSON.stringify(decisions, null, 2));
}

runConsult();

