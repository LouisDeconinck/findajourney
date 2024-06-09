# Find A Journey Astro Travel Blog

#### Video Demo: https://www.youtube.com/watch?v=Dz02CE3JCrY
#### Description:
Welcome to the Find A Journey Astro Travel Blog. This project is a travel blog built using Astro, a modern front-end framework for building fast, optimized websites. Astro is a static site generator, which means all blog posts are written in markdown and converted into static HTML at build time. This approach has several advantages, including fast load times and low hosting costs, which can even be free in some cases.

## Why Astro?

Astro allows you to write modern JavaScript, but sends zero JavaScript by default. This results in faster load times, lower resource usage, and a better user experience overall. Astro is also SEO-friendly, as the static HTML pages it generates can be easily crawled and indexed by search engines.

## Styling

For styling the blog, we used Tailwind CSS, a utility-first CSS framework that allows for highly customizable designs without bloating the codebase. Tailwind's integration with Astro makes it easy to create beautiful, responsive designs with minimal effort.

## Code Structure

The codebase is structured as follows:

- `public`: This directory contains static assets such as images used in blog posts.
- `src`: This directory contains the source code that needs to be built. It includes several subdirectories:
    - `components`: This directory contains reusable Astro components used across the site. These include:
        - `Header.astro`: This component represents the header of the site.
        - `JourneyCard.astro`: This component represents a card with a category (journey) preview. It is populated with data by passing in some properties.
        - `PostCard.astro`: This component is similar to JourneyCard, but for individual posts.
    - `content`: This directory contains all markdown files, which are converted into blog posts at build time. It includes:
        - `blog`: This directory contains all markdown blog posts. Metadata is added in the frontmatter of each file.
        - `journeys`: This directory is similar to `blog`, but for categories (journeys).
        - `config.ts`: This file defines what metadata blogs and journeys must supply.
    - `layouts`: This directory contains page layout components that use the header and can be used to slot in content.
    - `pages`: This directory contains individual pages. Some pages load blog post data in their frontmatter. For example, `[...slug].astro` is the layout for individual blog posts. Frontmatter loads related posts and content.

## Commands

The following commands are useful for development and deployment:

- `astro dev`: This command runs the site in developer mode, allowing for live reloading and debugging.
- `astro build`: This command builds the site for production, generating static HTML for each page.

## Conclusion

The Find A Journey Astro Travel Blog is a demonstration of what can be achieved with Astro and Tailwind CSS. It showcases the power of static site generation for creating fast, SEO-friendly websites that are cheap to host. We hope this project can serve as a useful reference for your own Astro projects.