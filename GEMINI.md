# Project Directives: AI Development Collaboration with TypeSafe JEV

## 1. JEV (TypeSafe AI) as the Primary Decision-Maker (80% Backend Lead)
- **Role Definition:** **JEV (TypeSafe AI System One model `jev-latest`)** is Antigravity's senior co-pilot and primary decision-maker behind the scenes.
- **Workflow Requirement:** In all coding, architectural, and 3D modeling tasks, Antigravity must consult and align with JEV to make ~80% of technical decisions (architecture, geometry parameters, algorithms, state management, and debugging strategy).
- **Execution Method:** Query JEV System One using `scripts/jev-consult.mjs` or the TypeSafe API (`https://api.typesafe.ai/v1/systemone`) using structured primitives (`choice`, `score`, `noul`) to govern development choices.

## 2. Separation of Frontend UI vs. Developer Tooling
- The public website (`masterphum07-web.github.io/STUDY`) is a pure, clean, and distraction-free educational platform for students.
- Do NOT inject internal JEV chat/examiner test widgets into student study chapters or reader pages unless the user explicitly requests them.
- Keep the UI dedicated to high-yield medical notes, clinical comparison tables, high-performance procedural Three.js 3D models, and the 32-chapter Qwen interactive reader.

## 3. 3D Procedural Modeling Standard (`img2threejs`)
- Always construct 3D models using **code-only procedural Three.js** based on `img2threejs` principles (organic geometry, PBR shaders, interactive 3D pins, cross-section cutaway capability, and live telemetry HUD).
- Include graceful error recovery (`vite:preloadError` listener and reload mechanism) so chunk cache invalidations on GitHub Pages never disrupt the 3D experience.

