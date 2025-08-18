### **2\. Prompt for Background Agents (Generating New Pages)**

This is a reusable prompt for your background agents to generate the rest of the pages from your CSV file. You can insert the list of new pages in the marked section.

**CRITICAL INSTRUCTION: Your only task is to create new page files based on the provided template and perform specific text replacements. DO NOT change any CSS, styling, page structure, fonts, or colors in any way. The design must remain perfectly consistent with the template.**

Objective:  
Your task is to create a batch of five new, unique city-to-city landing pages in a Next.js project. You will use the attached st-petersburg-page.tsx file as the master template for all new pages.  
**Project Context:**

* **Master Template File:** st-petersburg-page.tsx (attached for context). This is the only layout you should use.  
* **Testimonial Framework:** testimonials\_city2city.md (attached for context). Use this to understand the structure and tone of the testimonials.  
* **Process:** For each of the five city pairs listed below, you will create a new page file and perform specific, route-based text replacements.

**Step-by-Step Instructions for Each City Pair:**

1. **Create a new file** at the specified File Path.  
2. **Copy the entire, exact content** from the st-petersburg-page.tsx template into the new file.  
3. **Perform Text Replacements:**  
   * Find every instance of "St. Petersburg" and replace it with the new city's name (e.g., "Miami").  
   * Update the Header Slogan, Hero Badge, Hero Headline, and other text fields as specified for that city.  
   * Find the approximate driving distance in miles from Jacksonville, FL to the new city and insert it into the Hero Subheadline where it says "\[X-hour drive/XXX-mile journey\]".  
4. **Generate Three Unique Testimonials:** Following the attached testimonial framework, write three new, unique testimonials for the Jacksonville to \[City\] route. Ensure they match the persona archetypes (e.g., Family, Young Professional, Retiree).  
5. **Final Check:** Ensure the new page is structurally identical to the template, with only the text content being different.

**List of Pages to Create:**

* **\[COPY-PASTE YOUR LIST OF 5 URLS HERE. For example:\]**  
  * /app/jacksonville-to-miami-movers/page.tsx  
  * /app/jacksonville-to-tampa-movers/page.tsx  
  * /app/jacksonville-to-hialeah-movers/page.tsx  
  * /app/jacksonville-to-tallahassee-movers/page.tsx  
  * /app/jacksonville-to-fort-lauderdale-movers/page.tsx

**CRITICAL REMINDER: Do not deviate from the template's design. Your role is to generate content variations, not to redesign the page. Any changes to CSS, styling, layout, or components are strictly forbidden.**