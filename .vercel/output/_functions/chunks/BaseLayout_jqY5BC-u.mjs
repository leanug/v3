import { c as createComponent, a as createAstro, d as addAttribute, l as renderScript, b as renderTemplate, m as maybeRenderHead, r as renderComponent, n as renderHead, o as renderSlot } from './astro/server_CIvxdYyK.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/media/leanug/Kingston 120/Astro/v3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/media/leanug/Kingston 120/Astro/v3/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Overlay = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="overlay" class="fixed inset-0 bg-black/90 backdrop-blur-md hidden flex-col items-center justify-center text-white z-40 overflow-hidden"> <!-- Close Button --> <button class="absolute z-10 top-5 right-5 text-3xl cursor-pointer" id="close-overlay" aria-label="Close menu"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg> </button> <!-- Animated container --> <div class="flex flex-col mx-12 justify-center w-full h-full animate-growDown"> <!-- Navigation Links with fade-in animation --> <nav class="flex flex-col gap-y-8 text-6xl font-semibold"> <a href="/" class="fade-in delay-100"> <div class="relative inline-block"> <span class="absolute -top-4 -left-6 text-sm text-zinc-500 font-semibold">01</span> <h2 class="text-6xl font-semibold text-white hover:text-neutral-300 transition-colors duration-200">Home</h2> </div> </a> <a href="/about" class="fade-in delay-200 block"> <div class="relative inline-block"> <span class="absolute -top-4 -left-6 text-sm text-zinc-500 font-semibold">02</span> <h2 class="text-6xl font-semibold text-white hover:text-neutral-300 transition-colors duration-200">About me</h2> </div> </a> <a href="/process" class="fade-in delay-300 block"> <div class="relative inline-block"> <span class="absolute -top-4 -left-6 text-sm text-zinc-500 font-semibold">03</span> <h2 class="text-6xl font-semibold text-white hover:text-neutral-300 transition-colors duration-200">Process</h2> </div> </a> <a href="/services" class="fade-in delay-400 block"> <div class="relative inline-block"> <span class="absolute -top-4 -left-6 text-sm text-zinc-500 font-semibold">04</span> <h2 class="text-6xl font-semibold text-white hover:text-neutral-300 transition-colors duration-200">Services</h2> </div> </a> </nav> <!-- Social Links --> <div class="flex flex-col space-y-2 mt-12 fade-in delay-500"> <p class="text-lg">Follow me</p> <div class="flex items-center space-x-5 text-3xl mt-2"> <a href="https://twitter.com/leandroubilla_" aria-label="Twitter" class="hover:text-gray-300"> <img aria-hidden="true" class="w-6 h-6" src="/x-social-media-white-icon.png" alt="Fiverr Logo"> </a> <a href="https://youtube.com/scriptingpixels" aria-label="YouTube"> <img aria-hidden="true" class="w-8 h-8" src="/youtube-app-white-icon.png" alt="Fiverr Logo"> </a> </div> <a href="mailto:leandroubilla@protonmail.com" class="px-4 fade-in delay-600 text-lg py-2 w-40 mt-10 text-center text-[#212121] hover:cursor-pointer bg-white rounded-lg font-semibold">
Work with me
</a> </div> </div> </div>`;
}, "/media/leanug/Kingston 120/Astro/v3/src/components/Overlay.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img src="/leandro-transparent.png" alt="Leandro Ubilla's logo" class="w-12 h-12 rounded-full bg-gray-200" role="img" aria-label="Leandro Ubilla's logo"> <div class="text-sm flex flex-col"> <span class="font-semibold h-4">Leandro Ubilla</span> <span class="h-4">Web Developer</span> </div>`;
}, "/media/leanug/Kingston 120/Astro/v3/src/components/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="mt-6 max-w-screen-2xl w-full mx-auto px-5 mb-12"> <nav class="flex items-center justify-between"> <a href="/" class="flex items-center gap-2.5"> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex gap-4 items-center"> <a href="https://www.fiverr.com/leanug" class="py-2 hover:bg-gray-200 transition ease-in font-semibold px-3 rounded-lg text-sm md:flex items-center gap-2 hidden border border-gray-300"> <img aria-hidden="true" class="w-4 h-4" src="/fiverr-icon.svg" alt="Fiverr Logo">
Fiverr Reviews
</a> <a href="mailto:leandroubilla@protonmail.com" class="all-btn">
Work with me
</a> <button class="hover:cursor-pointer hamburger -mx-[3px]" aria-label="Open menu"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path> </svg> </button> </div> </nav> </header>`;
}, "/media/leanug/Kingston 120/Astro/v3/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full max-w-screen-2xl px-5 mx-auto pb-4"> <div class="flex lg:flex-row flex-col md:justify-between"> <p class="font-semibold">
Leandro Ubilla.
</p> <div class="flex space-x-6 font-semibold"> <a href="https://fiverr.com/leanug" title="Fiverr" target="_blank" rel="noopener noreferrer" class="button flex items-center space-x-2 py-1">
Fiverr
</a> <a href="https://x.com/leandroubilla_" title="Twitter" target="_blank" rel="noopener noreferrer" class="button flex items-center space-x-2 py-1">
X / Twitter
</a> <a href="https://youtube.com/scriptingpixels" title="YouTube" target="_blank" rel="noopener noreferrer" class="button flex items-center space-x-2 py-1">
Youtube
</a> <a href="https://github.com/leanug" title="GitHub" target="_blank" rel="noopener noreferrer" class="button flex items-center space-x-2 py-1">
Github
</a> </div> </div> </footer>`;
}, "/media/leanug/Kingston 120/Astro/v3/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Tags --><title>${Astro2.props.title ?? "Astro Basics"}</title><meta name="description"${addAttribute(Astro2.props.description ?? "Modern UI and web development", "content")}><meta property="og:title"${addAttribute(Astro2.props.title ?? "Astro Basics", "content")}><meta property="og:description"${addAttribute(Astro2.props.description ?? "Modern UI and web development", "content")}><meta property="og:image" content="/og-image.jpg"><meta property="og:type" content="website"><meta property="og:url" content="https://www.leandroubilla.com">${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-37fxchfa": true })}${renderHead()}</head> <body data-astro-cid-37fxchfa> <div class="relative leading-tightest" data-astro-cid-37fxchfa> <div class="bg-[#FAFAFA] flex justify-center text-[#1D1D1D]" data-astro-cid-37fxchfa> <div class="flex flex-col w-full min-h-screen max-w-6xl mx-auto" data-astro-cid-37fxchfa> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true })} <main class="flex-grow" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </div> </div> ${renderComponent($$result, "Overlay", $$Overlay, { "data-astro-cid-37fxchfa": true })} </div> ${renderScript($$result, "/media/leanug/Kingston 120/Astro/v3/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "/media/leanug/Kingston 120/Astro/v3/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
