import { c as createComponent, m as maybeRenderHead, b as renderTemplate, a as createAstro, r as renderComponent } from '../chunks/astro/server_CIvxdYyK.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_B9BCNabl.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_COI78a3S.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section aria-label="Call to action" class="mb-28 px-2.5 md:px-0"> <div class="w-full text-center"> <p class="cta-big">
Have an <span class="text-[#C5C5C5]">idea</span> in mind?
</p> <p class="text-balance mb-11 text-2xl">
If you need a web developer for your project, get in touch.
</p> <button class="btn-primary mx-auto cursor-pointer">
Work with me
</button> </div> </section>`;
}, "/media/leanug/Kingston 120/Astro/v3/src/components/Cta.astro", void 0);

const $$Astro = createAstro();
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-24 mb-28"> <div> <div class="max-w-7xl mx-auto mb-14"> <span class="text-2xl font-medium">A few thngs about me</span> <h1 class="text-8xl font-bold mt-3 mb-6 text-balance">
My <span class="text-[#c5c5c5]">Path</span> in Web Development
</h1> </div> <div class="max-w-7xl mx-auto mb-14"> ${renderComponent($$result2, "Image", $$Image, { "src": "/road-dawn.jpg", "alt": "About me main image", "class": "w-full max-w-7xl h-auto mx-auto mb-24 object-cover rounded-2xl bg-[#f2f2f2] ", "width": "1280", "height": "960", "decoding": "async", "loading": "lazy" })} </div> <div class="flex justify-between max-w-7xl mx-auto mb-14 gap-8"> <h2 class="font-semibold text-3xl w-full">
Years of Pixels & Code
</h2> <div class="max-w-3xl text-lg space-y-4 mx-auto"> <p>I'm from Montevideo, Uruguay</p> <p>
I started my journey in web development back in 2008 with MySpace, creating layouts and building my own website. At the time, I had zero visitors because I had no marketing skills and was still learning the ropes of design.
</p> <p>
In 2010, I created a network of Flash game websites that received millions of visits, using PHP, MySQL and HTML5. However, everything changed in 2012 when Google altered its algorithms, leading me to transition to WordPress for theme development and freelance web design.
</p> <p>
As I continued to grow, I learned React and Webflow and began working freelance, while also dabbling in a bit of UI design.
</p> </div> </div> <div class="flex justify-between max-w-7xl mx-auto mb-14 gap-8"> <h2 class="font-semibold text-3xl w-full">
What I'm Building Now
</h2> <div class="max-w-3xl text-lg space-y-4 mx-auto"> <p>
Right now, I'm working as a freelance Webflow developer, 
            helping clients bring clean, modern designs to life on the web.
</p> <p>
At the same time, I'm diving into Framer and Astro.js
</p> <p>
The goal? Launch a couple of premium template stores where I can 
            combine good UI, smooth interactions, and fast performance.
</p> </div> </div> </div> </section> <section class="mb-28 w-full overflow-hidden"> <div class="flex justify-center gap-10 -mx-44"> <img src="https://placehold.co/600x600" alt="Image 1" class="h-96 w-auto rotate-2 rounded-3xl"> <img src="https://placehold.co/600x600" alt="Image 2" class="h-96 w-auto -rotate-2 rounded-3xl"> <img src="https://placehold.co/600x600" alt="Image 3" class="h-96 w-auto rotate-2 rounded-3xl"> <img src="https://placehold.co/600x600" alt="Image 4" class="h-96 w-auto -rotate-2 rounded-3xl"> <img src="https://placehold.co/600x600" alt="Image 5" class="h-96 w-auto rotate-2 rounded-3xl"> </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/media/leanug/Kingston 120/Astro/v3/src/pages/faq.astro", void 0);

const $$file = "/media/leanug/Kingston 120/Astro/v3/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
