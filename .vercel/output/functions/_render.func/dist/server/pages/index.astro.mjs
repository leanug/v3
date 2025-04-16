import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, e as renderTransition, b as renderTemplate } from '../chunks/astro/server_CIvxdYyK.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_CUJgJ-z2.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_P8xnDRHY.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B9BCNabl.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$WorkItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkItem;
  const { slug, img, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="relative rounded-2xl overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": `/${img}`, "alt": `Cover of ${title}`, "class": "w-full object-cover rounded-2xl bg-[#f2f2f2] ", "width": "1280", "height": "960", "decoding": "async", "loading": "lazy", "data-astro-transition-scope": renderTransition($$result, "enkv3nb3", "", `img-${slug}`) })} </article>`;
}, "/media/leanug/Kingston 120/Astro/v3/src/components/WorkItem.astro", "self");

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const work = await getCollection("work");
  const title = "Leandro Ubilla - Web developer";
  const description = "Thoughtful Web development that helps businesses and creators craft meaningful user journeys with a focus on design, functionality, and performance.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section aria-label="Work Collection" class="mb-32 max-w-screen-2xl mx-auto px-5"> <div class="space-y-6"> ${work.map(({ data }) => renderTemplate`<article class="relative rounded-2xl overflow-hidden"> ${renderComponent($$result2, "WorkItem", $$WorkItem, { "transition": data.slug, "img": data.img, "title": data.title })} </article>`)} </div> </section> <section class="mb-28 mt-20 max-w-screen-2xl mx-auto px-5"> <div class="max-w-3xl"> <span class="font-medium uppercase text-sm">Hello, my name is Leandro 👋</span> <h1 class="heading-hero mt-2">
Webflow and React.js Developer
</h1> <p class="text-balance mb-2">
I help businesses and creators craft meaningful user journeys, 
        with thoughtful web development focused on design, functionality, 
        and performance.
</p> <p>
I build sites using both code and no-code tools, depending on what fits best. 
        I'm comfortable with Figma and focus on creating clean, 
        user-focused interfaces that actually work.
</p> </div> </section> ` })}`;
}, "/media/leanug/Kingston 120/Astro/v3/src/pages/index.astro", void 0);

const $$file = "/media/leanug/Kingston 120/Astro/v3/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
