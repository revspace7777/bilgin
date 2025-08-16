# Form notification

Stay updated on the latest form submissions and trigger your own custom workflows with form notifications. Send form notifications to email, webhooks, or a Slack workspace.

Set up notifications for verified submissions to a specific form or for all verified submissions to any form on your site.

To send form notifications to email or webhooks:

-   Go to [**Project configuration Notifications Emails and webhooks Form submission notifications**](https://app.netlify.com/projects/tandemovers/configuration/notifications#form-submission-notifications).

To send form notifications to a Slack workspace:

-   Check out our docs on setting up the [Netlify App for Slack](https://docs.netlify.com/extend/install-and-use/setup-guides/netlify-app-for-slack).

## Slack notifications

[Section titled “Slack notifications”](#slack-notifications "Copy link to this heading")

Surface form submissions in Slack with just a few clicks. Learn more in the [Netlify App for Slack docs](https://docs.netlify.com/extend/install-and-use/setup-guides/netlify-app-for-slack).

## Email notifications

[Section titled “Email notifications”](#email-notifications "Copy link to this heading")

By default, form notification emails are sent from [formresponses@netlify.com](mailto:formresponses@netlify.com), and any replies to a notification go to that address. To respond to a form submitter, you need to enter their address manually.

We recommend that you add an 
```
<input>
```
 with 
```
name="email"
```
 to your form. This sets the 
```
Reply-to
```
 value on the form notification email, allowing you to reply directly to the form submitter without manually entering their email.

### Customize the email subject line

[Section titled “Customize the email subject line”](#customize-the-email-subject-line "Copy link to this heading")

You can completely customize the email subject line in the email notifications that Netlify sends when someone submits a form from your site.

If you don’t customize the email subject line in the Netlify UI or in your Netlify HTML form, then your form will automatically apply a default email subject line.

You can customize the email subject line from the Netlify UI or in the HTML markup for your form.

We recommend that you choose one way to customize your email subject line since whatever you set in the HTML form overrides the settings in the Netlify UI.

As an overview of these options, consider the following:

-   To reference anything programmatically in the email subject line and keep the subject line version controlled, set the email subject line in your HTML form. Check out [the example HTML forms](https://docs.netlify.com/manage/forms/notifications#example-html-forms).
-   To manage your form’s email subject line in the Netlify UI, set the email subject line at [**Project configuration Notifications Emails and webhooks Form submission notifications**](https://app.netlify.com/projects/tandemovers/configuration/notifications#form-submission-notifications). To change the email subject line, additionally select **Options > Edit notifications**. You many need to remove any email subject line specified in your forms’ HTML to keep the email subject line you specify in the Netlify UI.

You can also apply predefined variables to your email subject line, such as 
```
%{formName}
```
 , 
```
%{siteName}
```
, or 
```
%{submissionId}
```
.

For example, your email subject line can be 
```
New lead from %{formName} (%{submissionId})
```
. Use these variables in the HTML form or in the Netlify UI.

### Example HTML forms

[Section titled “Example HTML forms”](#example-html-forms "Copy link to this heading")

This example sets the email subject line for your form notification to 
```
Sales inquiry from mysitename.netlify.app
```
:

```


<formname="contact"method="POST"data-netlify="true">

<inputtype="hidden"name="subject"

value="Sales inquiry from mysitename.netlify.app" />

<p>

<label>Your Name: <inputtype="text"name="name" /></label>

</p>

<p>

<label>Your Email: <inputtype="email"name="email" /></label>

</p>

<p>

<label>Message: <textareaname="message"></textarea></label>

</p>

<p>

<buttontype="submit">Send</button>

</p>

</form>




```

The 
```
Reply-to
```
 email is whatever value the form submitter entered in the 
```
Your Email:
```
 field.

This example uses [predefined variables](https://docs.netlify.com/manage/forms/notifications#customize-the-email-subject-line) to dynamically set your email subject line to 
```
New lead from %{formName} (%{submissionId})
```
:

```


<formname="contact"method="POST"data-netlify="true">

<inputtype="hidden"name="subject"

value="New lead from %{formName} (%{submissionId})" />

<p>

<label>Your Name: <inputtype="text"name="name" /></label>

</p>

<p>

<label>Your Email: <inputtype="email"name="email" /></label>

</p>

<p>

<label>Message: <textareaname="message"></textarea></label>

</p>

<p>

<buttontype="submit">Send</button>

</p>

</form>




```

For greater control of form-triggered emails, or to connect other services, you can use the Netlify app on [Zapier](#zapier-integrations) or [n8n](#n8n-integrations).

### Remove 
```
[Netlify]
```
 prefix from your email subject line

[Section titled “Remove \[Netlify\] prefix from your email subject line”](#remove-netlify-prefix-from-your-email-subject-line "Copy link to this heading")

Forms created before May 5, 2023 included 
```
[Netlify]
```
 as a default and automated prefix in the email subject line.

Now you can remove the 
```
[Netlify]
```
 prefix from your email subject line and completely customize your email subject line.

To remove 
```
[Netlify]
```
 from the email subject line of your form submission notification email:

-   If you have an email subject line specified in your HTML form, decide whether to [modify your existing email subject line in the HTML form](https://docs.netlify.com/manage/forms/notifications#remove-netlify-prefix-in-the-html-form) or opt to [use the Netlify UI](https://docs.netlify.com/manage/forms/notifications#customize-the-email-subject-line) instead.
-   If you do not have an email subject line specified in your HTML form, you can just [edit the form notification settings in the Netlify UI](https://docs.netlify.com/manage/forms/notifications#customize-the-email-subject-line). All new forms will not include 
    ```
    [Netlify]
    ```
    .

#### Remove 
```
[Netlify]
```
 prefix in the HTML form

[Section titled “Remove \[Netlify\] prefix in the HTML form”](#remove-netlify-prefix-in-the-html-form "Copy link to this heading")

To remove the 
```
[Netlify]
```
 prefix from your subject line and keep using the HTML form to specify the subject line, add the 
```
data-remove-prefix
```
 attribute to your HTML form’s email subject input field:

```


<formname="contact"method="POST"data-netlify="true">

<inputtype="hidden"name="subject"data-remove-prefix

value="Sales inquiry from mysitename.netlify.app" />

<!-- Add other form fields here -->

</form>




```

In this example, your email subject line is 
```
Sales inquiry from mysitename.netlify.app
```
. This removes 
```
[Netlify]
```
 from your new form notification emails. Learn more about this update in this [support Forums post](https://answers.netlify.com/t/customize-the-email-subject-line-for-form-submission-notifications/91534).

Note that if you have an HTML form with a different email subject specified, that subject will take precedence over any updates you make to the email subject line in the Netlify UI.

## Zapier integrations

[Section titled “Zapier integrations”](#zapier-integrations "Copy link to this heading")

Netlify is available on Zapier, where you can connect Netlify with over 1,000 other applications. You can set up a “Zap” action to be triggered when there is a verified form submission on your website. You can [find out more on our blog](https://www.netlify.com/blog/2018/11/07/automate-your-netlify-sites-with-zapier/), or use one of the templates below to get started:

Start a deploy of your Netlify site after new Netlify form submissions  
Netlify [Use this zap](https://zapier.com/webintent/create-zap?template=29675&utm_source=widget&utm_medium=embed&utm_campaign=zapier-zap-templates&provider=undefined&entry-point-location=partner_embed&referer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F&referrer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F)

Send Gmail emails for new Netlify form submissions  
Gmail + Netlify [Use this zap](https://zapier.com/webintent/create-zap?template=29683&utm_source=widget&utm_medium=embed&utm_campaign=zapier-zap-templates&provider=undefined&entry-point-location=partner_embed&referer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F&referrer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F)

Save new Netlify form submissions to rows in Google Sheets  
Google Sheets + Netlify [Use this zap](https://zapier.com/webintent/create-zap?template=29686&utm_source=widget&utm_medium=embed&utm_campaign=zapier-zap-templates&provider=undefined&entry-point-location=partner_embed&referer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F&referrer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F)

Create Salesforce leads from new Netlify form submissions  
Netlify + Salesforce [Use this zap](https://zapier.com/webintent/create-zap?template=29697&utm_source=widget&utm_medium=embed&utm_campaign=zapier-zap-templates&provider=undefined&entry-point-location=partner_embed&referer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F&referrer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F)

Create Mailchimp subscribers from new Netlify form submissions  
Mailchimp + Netlify [Use this zap](https://zapier.com/webintent/create-zap?template=29777&utm_source=widget&utm_medium=embed&utm_campaign=zapier-zap-templates&provider=undefined&entry-point-location=partner_embed&referer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F&referrer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F)

Create Zendesk tickets for new Netlify form submissions  
Netlify + Zendesk [Use this zap](https://zapier.com/webintent/create-zap?template=29778&utm_source=widget&utm_medium=embed&utm_campaign=zapier-zap-templates&provider=undefined&entry-point-location=partner_embed&referer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F&referrer=https%3A%2F%2Fdocs.netlify.com%2Fforms%2Fnotifications%2F)

## n8n integrations

[Section titled “n8n integrations”](#n8n-integrations "Copy link to this heading")

Netlify is available on [n8n](https://n8n.io/), an open source tool that allows you to connect Netlify with other applications. By using one of n8n’s Netlify nodes, you can create your own automated workflow. To get started, you can use the [Netlify node](https://n8n.io/integrations/netlify/), [Netlify Trigger node](https://n8n.io/integrations/netlify-trigger/), or you can use the existing workflow below:

Add Netlify Form submissions to Airtable  
Netlify Trigger node [Use workflow](https://n8n.io/workflows/1253-add-netlify-form-submissions-to-airtable/)