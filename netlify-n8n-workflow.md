No, you cannot create custom HTML templates for Netlify's built-in email notifications. They send a standardized email containing all submitted form data.

However, your goal is perfectly achievable and is the recommended best practice. You just need to shift where the logic happens.

### The Correct Workflow

The simplest and most robust way to achieve this is to **disable Netlify's email notifications entirely** and handle everything within your n8n workflow.

Here’s how it works:

1.  **Netlify's Only Job:** Netlify's sole responsibility is to capture the form submission (with all the hidden tracking fields) and send the **one, full payload** to your n8n webhook. That's it.

2.  **n8n's Job (The Brains):** Your n8n workflow receives the complete data package. From there, you create two separate "branches" or paths for the data to follow:
    * **Path A (Admin Notification):** Create a step in n8n that formats a clean, sales-friendly email. You can select *only* the fields you want (Name, Phone, Email, Message, etc.) and ignore all the tracking parameters (`utm_source`, `gclid`, etc.). You can use HTML to make it look nice. Then, use an email node (like SMTP, SendGrid, or Gmail) to send this custom email to the admin.
    * **Path B (Data Logging):** Take the original, complete payload with all the messy tracking data and send it directly to your Google Sheet node.

This approach is better because:
* **It keeps all your logic in one place (n8n).**
* **You have full control over the email's content and design.**
* **It's a single, reliable data flow:** If the data hits n8n, you know everything else will work.

Netlify receives the form submission data as a **JSON payload**.

When your n8n webhook is triggered by a Netlify form submission, it will receive an HTTP POST request where the body of the request is a JSON object.

This object contains all the information about the submission, including all the form fields you defined (and the hidden tracking fields we added).

### Example Payload

The JSON that n8n receives will look something like this:

```json
{
  "payload": {
    "data": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "555-123-4567",
      "message": "Looking for a quote on a 3-bedroom move.",
      "utm_source": "google",
      "utm_medium": "cpc",
      "utm_campaign": "fall_sale",
      "gclid": "aBcDeFg12345",
      "ip": "123.45.67.89",
      "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
      "referrer": "https://www.google.com/"
    },
    "created_at": "2025-08-16T04:32:00.000Z",
    "form_name": "contact-form",
    "site_url": "https://temovingandstorage.com"
  }
}
```

In your n8n workflow, you will work with the `data` object inside the `payload` to access all the individual fields like `name`, `email`, and `utm_source`.

