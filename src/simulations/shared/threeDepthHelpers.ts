import * as THREE from 'three';
import type { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export interface StudioLightingRig {
  ambientLight: THREE.AmbientLight;
  keyLight: THREE.DirectionalLight;
  fillLight: THREE.DirectionalLight;
  rimLightCyan: THREE.DirectionalLight;
  rimLightViolet: THREE.DirectionalLight;
}

export type LightingMode = 'clinical' | 'cinematic' | 'radiology';

/**
 * Creates a procedural soft radial contact shadow disc.
 * Grounding the organ on a contact shadow eliminates visual floating and gives physical 3D weight.
 */
export function createContactShadowPlane(
  radius: number = 4.5,
  yPos: number = -2.2,
  opacity: number = 0.75
): THREE.Mesh {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
    gradient.addColorStop(0.3, 'rgba(0, 0, 0, 0.75)');
    gradient.addColorStop(0.65, 'rgba(0, 0, 0, 0.35)');
    gradient.addColorStop(0.9, 'rgba(0, 0, 0, 0.08)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;

  const geo = new THREE.PlaneGeometry(radius * 2, radius * 2);
  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity,
    depthWrite: false,
  });

  const plane = new THREE.Mesh(geo, mat);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = yPos;
  plane.renderOrder = -1;
  return plane;
}

/**
 * Creates a high-tech spatial coordinate floor grid for linear perspective cues.
 */
export function createPerspectiveGrid(
  size: number = 10,
  divisions: number = 24,
  yPos: number = -2.21,
  primaryColor: number = 0x38bdf8,
  secondaryColor: number = 0x1e293b
): THREE.GridHelper {
  const grid = new THREE.GridHelper(size, divisions, primaryColor, secondaryColor);
  grid.position.y = yPos;
  (grid.material as THREE.Material).transparent = true;
  (grid.material as THREE.Material).opacity = 0.45;
  return grid;
}

/**
 * Creates a 3-point cinematic depth lighting rig with dual high-contrast rim lights.
 */
export function setupStudioLighting(scene: THREE.Scene): StudioLightingRig {
  // 1. Subtle ambient for deep shadows
  const ambientLight = new THREE.AmbientLight(0x0f172a, 0.35);
  scene.add(ambientLight);

  // 2. Warm Key Light (top-front-right)
  const keyLight = new THREE.DirectionalLight(0xfff6ea, 2.2);
  keyLight.position.set(5, 7, 5);
  scene.add(keyLight);

  // 3. Cool Fill Light (front-left-bottom)
  const fillLight = new THREE.DirectionalLight(0x0ea5e9, 0.8);
  fillLight.position.set(-5, -2, 4);
  scene.add(fillLight);

  // 4. Electric Cyan Rim Light (back-right, silhouette carving)
  const rimLightCyan = new THREE.DirectionalLight(0x38bdf8, 2.6);
  rimLightCyan.position.set(4, 5, -6);
  scene.add(rimLightCyan);

  // 5. Electric Violet Rim Light (back-left, complementary rim)
  const rimLightViolet = new THREE.DirectionalLight(0xa855f7, 2.2);
  rimLightViolet.position.set(-4, 3, -6);
  scene.add(rimLightViolet);

  return {
    ambientLight,
    keyLight,
    fillLight,
    rimLightCyan,
    rimLightViolet,
  };
}

/**
 * Adjusts lighting parameters to match selected clinical/cinematic preset.
 */
export function setStudioLightingMode(rig: StudioLightingRig, mode: LightingMode): void {
  switch (mode) {
    case 'clinical':
      rig.ambientLight.intensity = 0.85;
      rig.ambientLight.color.setHex(0x1e293b);
      rig.keyLight.intensity = 2.4;
      rig.fillLight.intensity = 1.2;
      rig.rimLightCyan.intensity = 1.0;
      rig.rimLightViolet.intensity = 0.8;
      break;
    case 'cinematic':
      rig.ambientLight.intensity = 0.3;
      rig.ambientLight.color.setHex(0x0a0f1d);
      rig.keyLight.intensity = 2.6;
      rig.fillLight.intensity = 0.7;
      rig.rimLightCyan.intensity = 3.2;
      rig.rimLightViolet.intensity = 2.8;
      break;
    case 'radiology':
      rig.ambientLight.intensity = 0.15;
      rig.ambientLight.color.setHex(0x020617);
      rig.keyLight.intensity = 1.8;
      rig.fillLight.intensity = 0.4;
      rig.rimLightCyan.intensity = 3.8;
      rig.rimLightViolet.intensity = 3.5;
      break;
  }
}

/**
 * Recursively toggles wireframe mode on all mesh materials inside an Object3D.
 */
export function toggleSceneWireframe(root: THREE.Object3D, wireframe: boolean): void {
  root.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (Array.isArray(child.material)) {
        child.material.forEach((m) => {
          if ('wireframe' in m) m.wireframe = wireframe;
        });
      } else if (child.material && 'wireframe' in child.material) {
        child.material.wireframe = wireframe;
      }
    }
  });
}

export type AnatomicalView = 'anterior' | 'posterior' | 'left' | 'right' | 'superior' | 'isometric';

/**
 * Calculates camera target coordinates for standard anatomical projections.
 */
export function getAnatomicalCoordinates(
  view: AnatomicalView,
  distance: number = 6.2,
  yOffset: number = 0.2
): THREE.Vector3 {
  switch (view) {
    case 'anterior':
      return new THREE.Vector3(0, yOffset, distance);
    case 'posterior':
      return new THREE.Vector3(0, yOffset, -distance);
    case 'left':
      return new THREE.Vector3(-distance, yOffset, 0);
    case 'right':
      return new THREE.Vector3(distance, yOffset, 0);
    case 'superior':
      return new THREE.Vector3(0, distance, 0.05);
    case 'isometric':
    default:
      return new THREE.Vector3(distance * 0.7, distance * 0.5, distance * 0.7);
  }
}

/**
 * Smoothly interpolates camera position to a target position using easeOutCubic.
 */
export function smoothTransitionCamera(
  camera: THREE.PerspectiveCamera,
  controls: OrbitControls,
  targetPos: THREE.Vector3,
  targetLookAt: THREE.Vector3 = new THREE.Vector3(0, 0, 0),
  durationMs: number = 600,
  onComplete?: () => void
): () => void {
  const startPos = camera.position.clone();
  const startTarget = controls.target.clone();
  const startTime = performance.now();
  let animId: number;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const animate = () => {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(1, elapsed / durationMs);
    const eased = easeOutCubic(progress);

    camera.position.lerpVectors(startPos, targetPos, eased);
    controls.target.lerpVectors(startTarget, targetLookAt, eased);
    controls.update();

    if (progress < 1) {
      animId = requestAnimationFrame(animate);
    } else {
      if (onComplete) onComplete();
    }
  };

  animId = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(animId);
}

