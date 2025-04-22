import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D6Fcxf7c.mjs';
import { manifest } from './manifest_C-zgbo5_.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/faq.astro.mjs');
const _page3 = () => import('./pages/process.astro.mjs');
const _page4 = () => import('./pages/services.astro.mjs');
const _page5 = () => import('./pages/work/_id_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/faq.astro", _page2],
    ["src/pages/process.astro", _page3],
    ["src/pages/services.astro", _page4],
    ["src/pages/work/[id].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b620a27e-1bf9-4a86-b905-1001579e6a0a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
