# Personal Portfolio

Personal portfolio for a web developer. Minimalist, fast, and built for showcasing work cleanly.

## Installation

This site is built with [Astro](https://astro.build/) and styled with [Tailwind CSS](https://tailwindcss.com/).

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

## Usage

This is a static Astro site. Projects are stored in the `src/content/work` folder as `.md` files, each with a config header.

To add a new project:

1. Create a new `.md` file inside `src/content/work`
2. Use the frontmatter format:

```yaml
---
title: "Project Title"
img: "project-image.png"
slug: "project-slug"
description: "Short description here"
---
```

3. Content written below the frontmatter appears on the project page.

## Contributing

Pull requests are welcome. For major changes, please open an issue first  
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

Super Free License™ – do what you want.
