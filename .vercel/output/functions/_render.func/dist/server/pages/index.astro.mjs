import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, d as addAttribute, b as renderTemplate, e as renderTransition } from '../chunks/astro/server_CIvxdYyK.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_C-xt0hSZ.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BxSGDylI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B9BCNabl.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$WorkItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkItem;
  const { slug, img, title, outbound, tags } = Astro2.props;
  const colors = [
    "bg-blue-100 text-blue-700",
    "bg-purple-100 text-purple-700",
    "bg-red-100 text-red-700",
    "bg-green-100 text-green-700",
    "bg-orange-100 text-orange-700"
  ];
  return renderTemplate`${maybeRenderHead()}<article class="relative"> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3"> <div class="flex gap-6 items-center"> <h2 class="font-semibold">${title}</h2> ${outbound && renderTemplate`<a${addAttribute(outbound, "href")} target="_blank" rel="noopener noreferrer" class="flex gap-2 items-center bg-gray-200 hover:bg-gray-300 transition px-3 h-8 rounded-lg">
Open
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path> </svg> </a>`} </div> ${tags && renderTemplate`<ul class="flex flex-wrap gap-3 text-sm"> ${tags.map((tag, index) => renderTemplate`<li${addAttribute(`px-3 h-8 rounded-lg flex items-center ${colors[index % colors.length]}`, "class")}> ${tag} </li>`)} </ul>`} </div> ${renderComponent($$result, "Image", $$Image, { "src": `/${img}`, "alt": `Cover of ${title}`, "class": "w-full object-cover rounded-2xl bg-[#f2f2f2]", "width": "1280", "height": "960", "decoding": "async", "loading": "lazy", "data-astro-transition-scope": renderTransition($$result, "vxhws6gt", "", `img-${slug}`) })} </article>`;
}, "/media/leanug/Kingston 120/Astro/v3/src/components/WorkItem.astro", "self");

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const work = await getCollection("work");
  const title = "Leandro Ubilla - Web developer";
  const description = "Thoughtful Web development that helps businesses and creators craft meaningful user journeys with a focus on design, functionality, and performance.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section aria-label="Work Collection" class="mb-32 px-5"> <div class="space-y-8"> ${work.map(({ data }) => renderTemplate`${renderComponent($$result2, "WorkItem", $$WorkItem, { "transition": data.slug, "img": data.img, "title": data.title, "tags": data?.tags, "outbound": data?.outbound })}`)} </div> </section> <section class="mb-28 mt-20 px-5"> <div class="max-w-3xl"> <span class="font-medium uppercase text-sm">Hello, my name is Leandro 👋</span> <h1 class="heading-hero mt-2">
Webflow and React.js Developer
</h1> <p class="text-balance mb-2">
I'm a developer and designer focused on building clean, 
        high-performing websites with a strong emphasis on usability and design precision. 
        I care about crafting interfaces that are both functional and beautiful, 
        the kind users don't have to think twice about.
</p> <p>
I work with both code and no-code tools, depending on the 
        project's needs. I'm comfortable in Figma and at home in the 
        frontend, where I pay attention to the details that shape the
        user experience. Whether it's a marketing site, product UI, or 
        landing page, I aim for a balance of speed, clarity, and aesthetics.
</p> <div class="flex gap-3 mt-8"> <a href="mailto:leandroubilla@protonmail.com" class="all-btn">
Work with me
</a> <a href="https://www.fiverr.com/leanug" class="py-2 hover:bg-gray-200 transition ease-in font-semibold px-3 rounded-lg text-sm md:flex items-center gap-2 hidden border border-gray-300"> <img aria-hidden="true" class="w-4 h-4" src="/fiverr-icon.svg" alt="Fiverr Logo">
Fiverr Reviews
</a> </div> </div> </section> ` })}`;
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
