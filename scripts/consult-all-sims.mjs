import { askJevDecision } from './jev-consult.mjs';

async function main() {
  console.log('Querying TypeSafe JEV System One for Pulmonary & Pathology 3D depth parameters...');
  
  const lungsDecision = await askJevDecision(
    'การยกระดับมิติความลึก (Depth Perception) ของ RealisticLungs3DSim ให้ดูสมจริง ไม่แบนหรือตื้น',
    {
      lungs_depth_strategy: {
        type: 'choice',
        instructions: 'Which lighting and grounding strategy provides the deepest volumetric depth for thoracic lung parenchyma?',
        criteria: {
          studio_lighting_with_contact_shadow_and_perspective_grid:
            'Use 3-point studio lighting with high-contrast dual cyan/violet rim lights, dark spatial floor grid, and procedural contact shadow plane',
          flat_ambient_only: 'Use high ambient light without directional depth or ground shadow',
        },
      },
      particle_airflow_visibility: {
        type: 'choice',
        instructions: 'How should inhalation/exhalation bronchial airflow particles be illuminated against dark space?',
        criteria: {
          additive_blending_cyan_glow: 'Additive blending with cyan-to-white emissive particles for maximum volumetric flow depth',
          opaque_solid_particles: 'Solid opaque particles without glow',
        },
      },
    }
  );

  console.log('JEV Lungs Decision:', JSON.stringify(lungsDecision, null, 2));

  const pathologyDecision = await askJevDecision(
    'การตั้งค่าแสงและเงาสำหรับ RealisticPathology3DSim (Female Reproductive & Uterine Pathology)',
    {
      pathology_lighting_mode: {
        type: 'choice',
        instructions: 'Which studio lighting preset should be default for gynecologic surgical pathology inspection?',
        criteria: {
          cinematic_depth: 'Cinematic depth mode with 0.35 ambient, strong key, and dual electric rim backlights to sculpt tumor margins',
          clinical_bright: 'Clinical bright mode with 0.85 ambient and soft fill',
        },
      },
      workstation_presets: {
        type: 'choice',
        instructions: 'Should anatomical view dials (Anterior, Posterior, Lateral, Superior, Isometric) be exposed directly on the viewer topbar?',
        criteria: {
          direct_topbar_dials: 'Direct topbar dials with smooth camera easeOutCubic transitions',
          hidden_dropdown: 'Hidden inside a nested dropdown menu',
        },
      },
    }
  );

  console.log('JEV Pathology Decision:', JSON.stringify(pathologyDecision, null, 2));
}

main().catch(console.error);
