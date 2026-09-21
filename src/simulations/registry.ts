import { lazy, type ComponentType } from 'react';

export interface SimulationMetadata {
  id: string;
  name: string;
  subjectId: string;
  description: string;
  component: ComponentType<any>;
}

// Registry map of simulation IDs to their lazy-loaded components
const registry: Record<string, ComponentType<any>> = {
  'projectile-motion': lazy(() => import('./demos/ProjectileMotionSim/ProjectileMotionSim')),
  'quadratic-grapher': lazy(() => import('./demos/QuadraticGrapherSim/QuadraticGrapherSim')),
};

/**
 * Get simulation component by its unique stable ID.
 * Returns null if the simulation is not registered.
 */
export function getSimulationComponent(id: string): ComponentType<any> | null {
  return registry[id] || null;
}

/**
 * Allows dynamic registration of React modules (e.g. from Qwen or user plugins)
 * without modifying the core App or router.
 */
export function registerSimulation(id: string, component: ComponentType<any>): void {
  if (registry[id]) {
    console.warn(`[SimulationRegistry] Overwriting existing simulation with id "${id}"`);
  }
  registry[id] = component;
}

/**
 * List all registered simulation IDs
 */
export function getRegisteredSimulationIds(): string[] {
  return Object.keys(registry);
}
