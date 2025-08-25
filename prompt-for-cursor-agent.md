Hello. This project uses a static site generation (SSG) architecture to create unique, SEO-optimized landing pages for local moving services. All pages in the `/app/l/` directory are built from a single template and individual JSON data files.

Here is how the system is structured:

**1. The Data Structure (`/lib/types.ts`):**
This file contains the TypeScript interface `LocalPageData`. It acts as a strict "contract" or blueprint for the content of every local movers page. Every JSON data file **must** conform to this structure. If you need to add a new piece of content that will appear on all local pages, you must add it to this interface first.

**2. The Content Hub (`/data/local/`):**
This directory holds all the content for the local pages. Each city has its own JSON file (e.g., `jacksonville.json`, `st-augustine.json`).
* **To create a new city page:** Simply add a new JSON file to this directory, ensuring it perfectly matches the `LocalPageData` interface from `/lib/types.ts`.
* **To edit content on a page:** Modify the corresponding JSON file. For example, to change the testimonials or enable/disable the pricing section for the St. Augustine page, you would edit `/data/local/st-augustine.json`.

**3. The Master Template (`/components/templates/LocalMoversPageTemplate.tsx`):**
This is the single React component that renders the entire layout and structure for every local movers page.
* It accepts one prop: `data`, which is an object conforming to the `LocalPageData` interface.
* All content is dynamically pulled from this `data` prop. Do not hardcode city-specific text in this file.
* It uses conditional rendering for sections like pricing (`{data.pricing.isEnabled && ...}`).
* It is marked with `"use client"` because it contains interactive elements (buttons that open the quote form). This does **not** mean the content is loaded dynamically on the client-side. All HTML is generated at build time; this directive only ensures the necessary JavaScript for interactivity is included in the static output.

**4. The Page Routes (`/app/l/[slug]/page.tsx`):**
The actual page files are very simple. Their only job is to:
* Import the `LocalMoversPageTemplate` component.
* Import the specific JSON data file for that city from the `/data/local/` directory.
* Pass the data into the template component.
* Dynamically generate the page's metadata (title and description) from the imported JSON data for optimal SEO.

**Your Task (if asked to create a new page):**
1.  Create a new file in `/data/local/`, named after the city (e.g., `ponte-vedra.json`).
2.  Fill it with content, using `jacksonville.json` as a reference for structure.
3.  Create a new route folder and file, e.g., `/app/l/ponte-vedra-movers/page.tsx`.
4.  In this new `page.tsx`, import the template and your new JSON file and pass the data as a prop.
