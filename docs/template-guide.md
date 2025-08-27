# Local Movers Page Generation System: A Guide for AI Agents

This document outlines the architecture for generating and managing local moving service pages for our Next.js project. The system is designed to be highly scalable and maintainable by separating page structure from page content.

## Core Components

The system consists of three main parts:

1.  **`/lib/types.ts`**: The Master Type Definition
2.  **`/data/local/[city-name].json`**: The Content Files
3.  **`/components/templates/LocalMoversPageTemplate.tsx`**: The Master Template Component

---

### 1. The Master Type Definition (`/lib/types.ts`)

This is the most critical file. It contains a TypeScript interface named `LocalPageData` which acts as a strict "contract" or schema for the content of any local movers page.

-   **Purpose**: To ensure every city's data file has the exact same structure, preventing errors and making it clear what content is required to build a new page.
-   **How it Works**: The `LocalPageData` interface defines every single piece of dynamic content on the page, from the hero section headline to the items in the FAQ accordion and the text in the footer.
-   **When to Modify**: Only modify this file if you need to add, remove, or change a section that will apply to *all* local moving pages. For example, if we decide to add a new "Meet the Team" section, you would first add a `meetTheTeam` property to the `LocalPageData` interface here.

---

### 2. The Content Files (`/data/local/[city-name].json`)

This directory holds the unique content for each city-specific landing page.

-   **Purpose**: To store all the text, numbers, and image paths for a single city page. This is the "database" for our pages.
-   **How it Works**: Each file (e.g., `jacksonville.json`, `st-augustine.json`) is a single JSON object that strictly adheres to the `LocalPageData` interface from `types.ts`. To create a new page for a new city, you simply duplicate an existing file, rename it, and replace its content with the new city's specific information.
-   **Key Rule**: Do NOT add new properties to a JSON file that are not defined in `/lib/types.ts`. The system will throw a TypeScript error.

---

### 3. The Master Template Component (`/components/templates/LocalMoversPageTemplate.tsx`)

This is the React component that renders the actual HTML for the page.

-   **Purpose**: To provide the complete, unchanging JSX structure for all local movers pages. It's the "view" layer of our system.
-   **How it Works**:
    -   It is a Client Component (`"use client"`) because it includes interactive elements.
    -   It accepts a single prop: `data`, which is of type `LocalPageData`.
    -   Inside the component, all previously hardcoded text is replaced with references to the `data` prop. For example, `<h1>Jacksonville Movers</h1>` becomes `<h1>{data.hero.headline}</h1>`.
    -   It uses logic like `.map()` to dynamically render lists (e.g., testimonials, service cards, FAQ items) and conditional rendering (`{data.pricing.isEnabled && ...}`) to show or hide entire sections based on the data file.
-   **When to Modify**: You should only modify this file if you need to change the fundamental HTML structure, styling, or layout of *all* local moving pages. Do not hardcode any city-specific text here.

---

### How to Create a New Local Movers Page (e.g., for "St. Augustine")

1.  **Create New Data File**: Go to `/data/local/`, duplicate `jacksonville.json`, and rename it to `st-augustine.json`.
2.  **Populate Data**: Open `st-augustine.json` and meticulously replace all Jacksonville-specific content with the new content for St. Augustine. This includes headlines, subheadlines, testimonials, neighborhood lists, etc., following the structure defined in `types.ts`.
3.  **Create the Page Route**: Create a new page file at `/app/l/st-augustine-movers/page.tsx`.
4.  **Implement the Page**: The content of this new file will be very simple, as its only job is to import the template and the data, and then pass the data to the template.

    ```typescript
    // /app/l/st-augustine-movers/page.tsx

    import LocalMoversPageTemplate from '@/components/templates/LocalMoversPageTemplate';
    import pageData from '@/data/local/st-augustine.json';
    import { Metadata } from 'next';
    import { LocalPageData } from '@/lib/types';

    // Type assertion to ensure data integrity
    const typedPageData: LocalPageData = pageData;

    // Metadata is generated dynamically from the JSON for perfect SEO
    export const metadata: Metadata = {
      title: typedPageData.meta.title,
      description: typedPageData.meta.description,
    };

    export default function StAugustineMoversPage() {
      // The page is just the template component with the data passed in
      return <LocalMoversPageTemplate data={typedPageData} />;
    }
    ```

By following this structure, we can add dozens of unique, SEO-optimized pages without ever touching the complex React code in the template, making the entire process fast, efficient, and error-free.