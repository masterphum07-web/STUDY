/**
 * JEV Developer Decision Assistant (TypeSafe AI System One)
 * Used by Antigravity during coding & modeling to make 80% of technical & architectural decisions.
 */

const API_KEY =
  process.env.TYPESAFE_API_KEY ||
  'apikey_28345c62ffaf10a44a883c246715378d01d_8582639a9b081494530c69271b8a748170d65cee47c34572c08065896f5089a7';

export async function askJevDecision(taskContext, questions) {
  const endpoint = 'https://api.typesafe.ai/v1/systemone';

  const body = {
    state: `โจทย์การตัดสินใจทางเทคนิคและการเขียนโค้ดของ Developer:\n${taskContext}`,
    model: 'jev-latest',
    questions,
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`JEV Error ${res.status}: ${txt}`);
  }

  const data = await res.json();
  return data.answers;
}

// Example CLI usage
if (process.argv[2] === 'test') {
  console.log('Testing JEV System One decision...');
  askJevDecision('ปรับแต่ง 3D RealisticPathology3DSim เพื่อความเสถียรบนมือถือและ GitHub Pages', {
    cache_invalidation_strategy: {
      type: 'choice',
      instructions: 'Which cache and preload error handling strategy is most robust for Vite SPA on GitHub Pages?',
      criteria: {
        auto_reload_on_preload_error: 'Add window vite:preloadError event listener to auto-reload once on stale chunk hash',
        disable_code_splitting: 'Bundle everything into single chunk to avoid chunk loading errors completely',
        show_manual_refresh_modal: 'Prompt user with modal to manually refresh browser',
      },
    },
    is_safe: {
      type: 'noul',
      instructions: 'Is automatic reload with session guard safe and effective against stale cache?',
      criteria: {
        true: 'Safe and standard solution for modern SPAs',
        false: 'Unsafe or prone to reload loops',
      },
    },
  }).then((ans) => {
    console.log('JEV Decision Result:', JSON.stringify(ans, null, 2));
  });
}
