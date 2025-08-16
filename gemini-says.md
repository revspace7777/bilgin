Of course, I can help you with that.

The build is failing because your `/thank-you` page is set up for **dynamic rendering**, but your Next.js project is configured for a **static export** (`output: "export"`). A static export generates pure HTML/CSS/JS files at build time and can't run a server to handle dynamic requests, which is what reading URL parameters during rendering requires.

The error message `Page with 'dynamic = "force-dynamic"' couldn't be exported` points directly to this conflict.

-----

## How to Fix It

You need to make the `/thank-you` page static and read the URL parameters on the **client-side** (in the user's browser) after the page loads, instead of during the build process. This approach satisfies both of your goals.

Here’s how to modify your `thank-you` page file, likely located at `/app/thank-you/page.tsx` or `/app/thank-you/page.js`.

### 1\. Make it a Client Component

Add the `'use client'` directive to the very top of the file. This tells Next.js to render this page in the browser.

### 2\. Remove Server-Side Logic

Ensure your page component does **not** try to access `searchParams` as a prop. Also, remove the `export const dynamic = 'force-dynamic';` line if it exists.

**Incorrect (Server-Side, causes the error):**

```javascript
// This will fail in a static export
export const dynamic = 'force-dynamic';

export default function ThankYouPage({ searchParams }) {
  // ...
}
```

### 3\. Use the `useSearchParams` Hook

Use the `useSearchParams` hook from `next/navigation` to access the URL query parameters. This hook only runs on the client-side, which is perfectly compatible with a static export.

-----

## Example Code

Here is the complete code for your `/app/thank-you/page.tsx` file. This will fix the build error and allow you to access the URL parameters if you need them.

```typescript
// /app/thank-you/page.tsx

'use client'; // <-- Step 1: Add this directive

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ThankYouPage() {
  const searchParams = useSearchParams();

  // You can now access any parameter like this:
  const utmSource = searchParams.get('utm_source');
  const leadId = searchParams.get('lead_id');

  // Example: Log parameters to the console for debugging
  useEffect(() => {
    if (utmSource) {
      console.log('UTM Source:', utmSource);
    }
    // You could also send this data to an analytics service here.
  }, [searchParams]);

  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your quote request has been received and will be sent to your email shortly.</p>
      {/* You can display additional links or information here */}
    </div>
  );
}
```

By making this change, the `/thank-you` page will be generated as a static HTML file during the build, and the JavaScript code will handle reading the URL parameters in the user's browser after the page loads. This resolves the conflict and your build should now succeed.