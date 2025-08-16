[Skip to content](#_top)

  [![](https://docs.netlify.com/_astro/logo-netlify-small-fullcolor-darkmode.BjxE__QQ.svg) ![](https://docs.netlify.com/_astro/logo-netlify-small-fullcolor-lightmode.DfeiVSqM.svg) Netlify Docs](https://docs.netlify.com/)

-   [Start](https://docs.netlify.com/start/overview)
-   Build
    
      -   Fundamentals
      -   [Build with AI](https://docs.netlify.com/build/build-with-ai/overview)
      -   [Configure builds](https://docs.netlify.com/build/configure-builds/overview)
      -   [Git workflows](https://docs.netlify.com/build/git-workflows/overview)
      -   [Environment variables](https://docs.netlify.com/build/environment-variables/overview)
      -   [Frameworks](https://docs.netlify.com/build/frameworks/overview)
      -   [Post-processing](https://docs.netlify.com/build/post-processing/overview)
      -   Primitives
      -   [Serverless Functions](https://docs.netlify.com/build/functions/overview)
      -   [Edge Functions](https://docs.netlify.com/build/edge-functions/overview)
      -   [Image CDN](https://docs.netlify.com/build/image-cdn/overview)
      -   [Blobs storage](https://docs.netlify.com/build/data-and-storage/netlify-blobs)
      -   [Netlify DB storage](https://docs.netlify.com/build/data-and-storage/netlify-db)
      -   [Caching](https://docs.netlify.com/build/caching/caching-overview)
      -   [Async Workloads](https://docs.netlify.com/build/async-workloads/overview)
    
-   [Deploy](https://docs.netlify.com/deploy/deploy-overview)
-   Manage
    
      -   [Accounts & Billing](https://docs.netlify.com/manage/accounts-and-billing/overview)
      -   [Domains](https://docs.netlify.com/manage/domains/get-started-with-domains)
      -   [Security](https://docs.netlify.com/manage/security/overview)
      -   [Monitoring & Insights](https://docs.netlify.com/manage/monitoring/overview)
      -   [Preview Servers](https://docs.netlify.com/manage/preview-servers/overview)
      -   [Forms](https://docs.netlify.com/manage/forms/setup)
      -   [Visual Editor](https://docs.netlify.com/manage/visual-editor/overview)
      -   [Data & Storage](https://docs.netlify.com/build/data-and-storage/netlify-db)
      -   [Routing & Redirects](https://docs.netlify.com/manage/routing/overview)
    
-   Extend
    
      -   [Install & use](https://docs.netlify.com/extend/install-and-use/overview)
      -   [Develop & share](https://docs.netlify.com/extend/develop-and-share/overview)
      -   [Netlify SDK for extensions](https://developers.netlify.com/sdk)
      -   [Building code agents](https://docs.netlify.com/extend/building-code-agents/overview)
      -   [Framework adapter API](https://docs.netlify.com/build/frameworks/frameworks-api)
    
-   Reference
    
      -   [CLI reference](https://cli.netlify.com)
      -   [Netlify SDK for extensions](https://developers.netlify.com/sdk)
      -   [Visual Editor reference](https://visual-editor-reference.netlify.com)
      -   APIs
      -   [Netlify API](https://open-api.netlify.com)
      -   [Frameworks API](https://docs.netlify.com/build/frameworks/frameworks-api)
      -   [Cache API](https://docs.netlify.com/build/caching/cache-api)
      -   [Blobs API](https://docs.netlify.com/build/data-and-storage/netlify-blobs)
      -   [Serverless Functions API](https://docs.netlify.com/build/functions/api)
      -   [Edge Functions API](https://docs.netlify.com/build/edge-functions/api)
      -   Dev Tool Guides
      -   [API and CLI guides](https://docs.netlify.com/api-and-cli-guides/overview)
      -   [Terraform provider](https://docs.netlify.com/terraform-provider)
      -   [Command Palette](https://docs.netlify.com/command-palette)
    
-   Resources
    
      -   [Troubleshooting](https://docs.netlify.com/resources/troubleshooting/overview)
      -   [Changelog](https://www.netlify.com/changelog/)
      -   [Examples](https://github.com/netlify/examples/)
      -   [Developer tutorials](https://developers.netlify.com)
      -   [Support](https://www.netlify.com/support/)
      -   [Checklists](https://docs.netlify.com/resources/checklists/overview)
      -   [Release phases](https://docs.netlify.com/release-phases)

![User avatar](https://d33wubrfki0l68.cloudfront.net/65a4a71f81cd97ec042c84fb/30a829c28acc9b26c9d7/avatar.jpg)

![User avatar](https://d33wubrfki0l68.cloudfront.net/65a4a71f81cd97ec042c84fb/30a829c28acc9b26c9d7/avatar.jpg)

Forms

Forms

-   [Setup](https://docs.netlify.com/manage/forms/setup/)
-   [Submissions](https://docs.netlify.com/manage/forms/submissions/)
-   [Notifications](https://docs.netlify.com/manage/forms/notifications/)
-   [Spam filters](https://docs.netlify.com/manage/forms/spam-filters/)
-   [Troubleshooting tips](https://docs.netlify.com/manage/forms/troubleshooting-tips/)
-   [Usage and billing](https://docs.netlify.com/manage/forms/usage-and-billing/)

On this page

HTML forms

-   [Top](#_top)
-   [Automatic form detection](#automatic-form-detection)  -   [Enable form detection](#enable-form-detection)
      -   [Disable form detection](#disable-form-detection)
      -   [Re-enable form detection](#re-enable-form-detection)
    
-   [HTML forms](#html-forms)  -   [Submit HTML forms with AJAX](#submit-html-forms-with-ajax)
    
-   [JavaScript forms](#javascript-forms)  -   [Forms for Next.js or SSR frameworks](#forms-for-nextjs-or-ssr-frameworks)
      -   [Work with JavaScript-rendered forms](#work-with-javascript-rendered-forms)
      -   [Submit JavaScript-rendered forms with AJAX](#submit-javascript-rendered-forms-with-ajax)
    
-   [Success messages](#success-messages)  -   [Custom success page](#custom-success-page)
      -   [Custom success alert](#custom-success-alert)
    
-   [File uploads](#file-uploads)  -   [File upload security](#file-upload-security)
      -   [Limitations](#limitations)
      -   [Submit file uploads with AJAX](#submit-file-uploads-with-ajax)
    
-   [Set up notifications](#set-up-notifications)
-   [Review forms usage](#review-forms-usage)
-   [More Forms resources](#more-forms-resources)

## On this page

-   [Top](#_top)
-   [Automatic form detection](#automatic-form-detection)  -   [Enable form detection](#enable-form-detection)
      -   [Disable form detection](#disable-form-detection)
      -   [Re-enable form detection](#re-enable-form-detection)
    
-   [HTML forms](#html-forms)  -   [Submit HTML forms with AJAX](#submit-html-forms-with-ajax)
    
-   [JavaScript forms](#javascript-forms)  -   [Forms for Next.js or SSR frameworks](#forms-for-nextjs-or-ssr-frameworks)
      -   [Work with JavaScript-rendered forms](#work-with-javascript-rendered-forms)
      -   [Submit JavaScript-rendered forms with AJAX](#submit-javascript-rendered-forms-with-ajax)
    
-   [Success messages](#success-messages)  -   [Custom success page](#custom-success-page)
      -   [Custom success alert](#custom-success-alert)
    
-   [File uploads](#file-uploads)  -   [File upload security](#file-upload-security)
      -   [Limitations](#limitations)
      -   [Submit file uploads with AJAX](#submit-file-uploads-with-ajax)
    
-   [Set up notifications](#set-up-notifications)
-   [Review forms usage](#review-forms-usage)
-   [More Forms resources](#more-forms-resources)

1.  Manage /
2.  Forms /

# Forms setup

Copy page View as plain text

-   Copy Markdown
-   View as plain text

Netlify’s serverless form handling allows you to manage forms without extra API calls or additional JavaScript. Once enabled, the built-in form detection feature allows our build system to automatically parse your HTML at deploy time, so there’s no need for you to make an API call or include extra JavaScript on your site.

To get started, enable [automatic form detection](#automatic-form-detection) and then add a 
```
netlify
```
 attribute to your [HTML form](#html-forms).

Wondering how Netlify handles form submissions?

Visit our [form submissions](https://docs.netlify.com/manage/forms/submissions) doc to learn more about the form submissions UI, API endpoints, and more.

## Automatic form detection

[Section titled “Automatic form detection”](#automatic-form-detection "Copy link to this heading")

If you would like Netlify to automatically manage your form submissions, you need to enable form detection.

### Enable form detection

[Section titled “Enable form detection”](#enable-form-detection "Copy link to this heading")

To enable form detection for your site:

1.  In the Netlify UI, go to [**Forms**](https://app.netlify.com/projects/tandemovers/forms).
    
2.  Select **Enable form detection**.

Starting with your next site deploy, Netlify will automatically scan your deploys for forms that require submission handling.

If you previously used Netlify Forms and disabled automatic form detection, follow the steps to [re-enable form detection](#re-enable-form-detection) and start accepting submissions again.

### Disable form detection

[Section titled “Disable form detection”](#disable-form-detection "Copy link to this heading")

You may want to disable form detection if your site doesn’t have forms anymore or if you decide not to use Netlify to manage your forms. Disabling form detection will reduce post processing and may speed up deploys.

To disable form detection for your site:

1.  In the Netlify UI, go to [**Forms \> Usage and configuration \> Form detection**](https://app.netlify.com/projects/tandemovers/forms#form-detection).
    
2.  Select **Disable form detection**.
    
3.  A confirmation prompt will appear. To continue, enter the name of your site and select **Disable form detection**.

Starting with your next site deploy, Netlify will no longer scan your deploys for forms and will disable [form submission](https://docs.netlify.com/manage/forms/submissions#form-submissions-ui) handling for any new or updated forms.

Warning

Disabling form detection is intended only for sites that don’t use Netlify Forms. If your site does use Netlify Forms, we recommend removing forms from your site code or altering your code to handle submissions by other means before disabling form detection.

### Re-enable form detection

[Section titled “Re-enable form detection”](#re-enable-form-detection "Copy link to this heading")

If you previously used Netlify Forms and disabled automatic form detection, follow these steps to re-enable form detection:

1.  In the Netlify UI, go to [**Forms \> Usage and configuration \> Form detection**](https://app.netlify.com/projects/tandemovers/forms#form-detection).
    
2.  Select **Enable form detection**.
    
3.  Redeploy your site.

Once you redeploy your site, Netlify will automatically scan your deploys for forms and start accepting submissions again.

## HTML forms

[Section titled “HTML forms”](#html-forms "Copy link to this heading")

Once you [enable form detection](#enable-form-detection), add an HTML form to your site with a 
```
data-netlify="true"
```
 or a 
```
netlify
```
 attribute in the 
```
<form>
```
 tag. Deploy your site with that form included and you can start receiving [submissions](https://docs.netlify.com/manage/forms/submissions) in your Netlify site admin panel.

Your form’s 
```
name
```
 attribute determines what we call the form in the Netlify UI. If you have more than one form on a site, each form should have a different 
```
name
```
 attribute.

Here’s an example of how to use the 
```
data-netlify="true"
```
 attribute or the 
```
netlify
```
 attribute in your form:

-   [Form with data-netlify attribute](#tab-panel-170)
-   [Form with netlify attribute](#tab-panel-171)

```


<formname="contact"method="POST"data-netlify="true">

<p>

<label>Your Name: <inputtype="text"name="name" /></label>

</p>

<p>

<label>Your Email: <inputtype="email"name="email" /></label>

</p>

<p>

<label>Your Role: <selectname="role[]"multiple>

<optionvalue="leader">Leader</option>

<optionvalue="follower">Follower</option>

</select></label>

</p>

<p>

<label>Message: <textareaname="message"></textarea></label>

</p>

<p>

<buttontype="submit">Send</button>

</p>

</form>




```

```


<formname="contact"method="POST"netlify>

<p>

<label>Your Name: <inputtype="text"name="name" /></label>

</p>

<p>

<label>Your Email: <inputtype="email"name="email" /></label>

</p>

<p>

<label>Your Role: <selectname="role[]"multiple>

<optionvalue="leader">Leader</option>

<optionvalue="follower">Follower</option>

</select></label>

</p>

<p>

<label>Message: <textareaname="message"></textarea></label>

</p>

<p>

<buttontype="submit">Send</button>

</p>

</form>




```

When Netlify parses the static HTML for a form you’ve added, the build system automatically strips the 
```
data-netlify="true"
```
 or 
```
netlify
```
 attribute from the 
```
<form>
```
 tag and injects a hidden input named 
```
form-name
```
. In the resulting HTML that’s deployed, the 
```
data-netlify="true"
```
 or 
```
netlify
```
 attribute is gone, and the hidden 
```
form-name
```
 input’s 
```
value
```
 matches the 
```
name
```
 attribute of 
```
<form>
```
 like this:

```


<inputtype="hidden"name="form-name"value="contact" />




```

### Submit HTML forms with AJAX

[Section titled “Submit HTML forms with AJAX”](#submit-html-forms-with-ajax "Copy link to this heading")

You don’t have to, but you can submit static HTML forms using AJAX.

A static HTML form submitted this way must have 
```
data-netlify=true
```
 or a 
```
netlify
```
 attribute inside its 
```
<form>
```
 tag. For an example of how to set these attributes, review the [HTML forms](#html-forms) section.

Here’s an AJAX form submission example using the 
```
fetch
```
 API for a static HTML form:

```


consthandleSubmit=event=> {

event.preventDefault();

constmyForm=event.target;

constformData=newFormData(myForm);

fetch("/", {

method:"POST",

headers:{"Content-Type":"application/x-www-form-urlencoded"},

body:newURLSearchParams(formData).toString()

})

.then(() =>console.log("Form successfully submitted"))

.catch(error=>alert(error));

};

document.querySelector("form").addEventListener("submit", handleSubmit);




```

Requirements for the request:

-   The body of the request must be URL-encoded. In the above example, the form is passed to a 
    ```
    FormData
    ```
     constructor. That object is then encoded using the 
    ```
    URLSearchParams
    ```
     constructor and converted to a string. Note that Netlify Forms does not support JSON form data at this time.
-   If the form accepts alphanumeric data only, the request should include the header 
    ```
    "Content-Type": "application/x-www-form-urlencoded"
    ```
    . If the form accepts [file uploads](https://docs.netlify.com/manage/forms/setup#file-uploads), including a 
    ```
    Content-Type
    ```
     header is not recommended.

## JavaScript forms

[Section titled “JavaScript forms”](#javascript-forms "Copy link to this heading")

You don’t need to include extra JavaScript on your site to use Netlify Forms. But, if you want to, you can use JavaScript to render a form client-side. You can also submit JavaScript-rendered forms over AJAX.

### Forms for Next.js or SSR frameworks

[Section titled “Forms for Next.js or SSR frameworks”](#forms-for-nextjs-or-ssr-frameworks "Copy link to this heading")

If you’re using a pure JavaScript form or SSR (Server Side Rendering), you must include an HTML form that meets this [HTML form criteria](https://answers.netlify.com/t/support-guide-form-problems-form-debugging-404-when-submitting/92#p-141-form-handling-works-automatically-for-html-forms-that-meet-the-following-requirements-2), including all the input tags with the same names as the JavaScript form.

For instructions and examples specific to Next.js 13.5 and above, visit [breaking changes for the Next.js runtime](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview#v5-breaking-changes).

### Work with JavaScript-rendered forms

[Section titled “Work with JavaScript-rendered forms”](#work-with-javascript-rendered-forms "Copy link to this heading")

The Netlify build system finds your forms by parsing the HTML of your site when the build completes. This means that if you’re using JavaScript to render a form client-side, our build system won’t find it in the pre-built files. You can work around this:

-   Create a hidden HTML form with the 
    ```
    data-netlify="true"
    ```
     attribute or a 
    ```
    netlify
    ```
     attribute and input fields with 
    ```
    name
    ```
     attributes to match the inputs of your JavaScript-rendered form. You need to apply the same work around if you want to use our [reCAPTCHA 2 integration](https://docs.netlify.com/manage/forms/spam-filters#recaptcha-2-challenge), and create a 
    ```
    div
    ```
     element in the hidden HTML with the 
    ```
    data-netlify-recaptcha="true"
    ```
     attribute.
    
-   Add a hidden input to the JavaScript-rendered form or JSX form:
    
    ```
    
    
    <inputtype="hidden"name="form-name"value="name_of_my_form" />
    
    
    
    
    ```

You can also find related tutorials on our blog:

-   [How to Integrate Netlify’s Form Handling in a React App](https://www.netlify.com/blog/2017/07/19/how-to-integrate-netlifys-form-handling-in-a-react-app/)
-   [How to Integrate Netlify forms in a Vue App](https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/)

While the two articles are fairly framework-specific, the code demonstrates how to prerender forms when working with them in a web application.

### Submit JavaScript-rendered forms with AJAX

[Section titled “Submit JavaScript-rendered forms with AJAX”](#submit-javascript-rendered-forms-with-ajax "Copy link to this heading")

To submit a JavaScript-rendered form built with a framework like Gatsby or Nuxt, you can send an AJAX POST request to any path on your site. Requirements for the request:

-   You need to URL-encode your form data in the body of the request.
-   If you haven’t added a hidden 
    ```
    form-name
    ```
     input to your JavaScript-rendered form, you need to send a 
    ```
    form-name
    ```
     attribute in the AJAX POST request body.
-   If the form accepts alphanumeric data only, the request should include the header 
    ```
    "Content-Type": "application/x-www-form-urlencoded"
    ```
    . If the form accepts [file uploads](https://docs.netlify.com/manage/forms/setup#file-uploads), including a 
    ```
    Content-Type
    ```
     header is not recommended.

Here’s an AJAX form submission code sample using the 
```
fetch
```
 API for a JavaScript-rendered form. It uses Gatsby’s 
```
navigate
```
 function to redirect to a custom page on form submission success.

```


consthandleSubmit=event=> {

event.preventDefault();

constmyForm=event.target;

constformData=newFormData(myForm);

fetch("/", {

method:"POST",

headers:{"Content-Type":"application/x-www-form-urlencoded"},

body:newURLSearchParams(formData).toString()

})

.then(() =>navigate("/thank-you/"))

.catch(error=>alert(error));

};




```

For a JavaScript-rendered form, you need to add a hidden 
```
input
```
 with 
```
name="form-name"
```
 to the returned form elements. Here’s an example:

```


return (

<form

data-netlify="true"

name="pizzaOrder"

method="post"

onSubmit={handleSubmit}

>

<inputtype="hidden"name="form-name"value="pizzaOrder" />

<label>

What order did the pizza give to the pineapple?

<inputname="order"type="text"onChange={handleChange} />

</label>

<inputtype="submit" />

</form>

);




```

In the code sample above, a 
```
handleChange
```
 function updates the form’s state, which ultimately gets sent in a POST request to Netlify.

## Success messages

[Section titled “Success messages”](#success-messages "Copy link to this heading")

By default, when visitors complete a form, they are redirected to a page with a generically styled success message with a link back to the form page.

![Generic forms success message displayed.](https://docs.netlify.com/images/forms-default-generic-success-message.png)

### Custom success page

[Section titled “Custom success page”](#custom-success-page "Copy link to this heading")

You can replace the default success page with a custom page you create by adding an 
```
action
```
 attribute to the 
```
<form>
```
 tag, entering the path of your custom page (like 
```
"/pages/success"
```
) as the value. The path must be relative to the site root, starting with a 
```
/
```
. Here’s an example:

```


<form

name="contact"

action="/pages/success"

method="POST"

data-netlify="true"

></form>




```

If you submit your form using AJAX, reference this [Gatsby-specific example](#submit-javascript-rendered-forms-with-ajax) of how to set a custom success page.

### Custom success alert

[Section titled “Custom success alert”](#custom-success-alert "Copy link to this heading")

If you use AJAX to submit the form, you can substitute an alert instead of redirecting to a generic or custom page. Here’s an example for an HTML form:

```


consthandleSubmit=event=> {

event.preventDefault();

constmyForm=event.target;

constformData=newFormData(myForm);

fetch("/", {

method:"POST",

headers:{"Content-Type":"application/x-www-form-urlencoded"},

body:newURLSearchParams(formData).toString()

})

.then(() =>alert("Thank you for your submission"))

.catch(error=>alert(error));

};

document.querySelector("form").addEventListener("submit", handleSubmit);




```

## File uploads

[Section titled “File uploads”](#file-uploads "Copy link to this heading")

For information about interacting with uploaded files, visit the [submissions page](https://docs.netlify.com/manage/forms/submissions/).

Netlify Forms can receive files uploaded with form submissions. To do this, add an input with 
```
type="file"
```
 to any form. Although most browsers will detect the encoding automatically, you can optionally include 
```
enctype="multipart/form-data"
```
 in the 
```
<form>
```
 tag,

Here’s a sample HTML form with a file upload field:

```


<formname="fileForm"enctype="multipart/form-data"data-netlify="true">

<p>

<label>

<span>Name:</span>

<inputname="name"type="text" />

</label>

</p>

<p>

<label>

<span>Add file:</span>

<inputname="file"type="file" />

</label>

</p>

<button>Submit</button>

</form>

<pclass="result"></p>




```

### File upload security

[Section titled “File upload security”](#file-upload-security "Copy link to this heading")

Forms that accept file uploads that contain personally identifiable information (PII) require additional security configuration. We recommend using the [Very Good Security](https://www.netlify.com/integrations/very-good-security/) integration for this type of secure form upload.

### Limitations

[Section titled “Limitations”](#limitations "Copy link to this heading")

Keep the following considerations in mind when working with file uploads in forms.

-   Only one file upload per field is supported. For multiple file uploads, use multiple fields.
-   The form request has a maximum size limit of 8 MB.
-   File uploads time out after 30 seconds.

### Submit file uploads with AJAX

[Section titled “Submit file uploads with AJAX”](#submit-file-uploads-with-ajax "Copy link to this heading")

When submitting a form with a file upload, including a 
```
Content-Type
```
 header is not recommended. The browser should detect and set the 
```
Content-Type
```
 automatically.

Here’s an AJAX form submission code sample using the 
```
fetch
```
 API for the above HTML form with file upload:

```


document.forms.fileForm.addEventListener("submit", event=> {

event.preventDefault();

constresult=document.querySelector(".result");

fetch("/", {

body:newFormData(event.target),

method:"POST"

})

.then(() => {

result.innerText="Success";

})

.catch(error=> {

result.innerText=`Failed: ${error}`;

});

});




```

## Set up notifications

[Section titled “Set up notifications”](#set-up-notifications "Copy link to this heading")

To monitor the content of your form submissions, you can set up notifications to send the content of the form submissions to an email address or to an external service with an HTTP POST request.

Learn more about [forms notifications](https://docs.netlify.com/manage/forms/notifications).

To set up notifications for your site’s form submissions:

1.  For your site go to [**Configuration \> Notifications \> Form submission notifications**](https://app.netlify.com/projects/tandemovers/configuration/notifications#form-submission-notifications), and select **Add notification**.

## Review forms usage

[Section titled “Review forms usage”](#review-forms-usage "Copy link to this heading")

For the last month (or billing period), you can review how many verified form submissions were made and the total storage size of all files uploaded.

1.  For your site, go to [**Forms \> Usage and configuration \> Usage**](https://app.netlify.com/projects/tandemovers/forms#usage).

Learn more about [reviewing and managing forms usage](https://docs.netlify.com/manage/forms/usage-and-billing).

## More Forms resources

[Section titled “More Forms resources”](#more-forms-resources "Copy link to this heading")

-   [Spam filters](https://docs.netlify.com/manage/forms/spam-filters)
-   [Form submissions](https://docs.netlify.com/manage/forms/submissions)
-   [Form submission notifications](https://docs.netlify.com/manage/forms/notifications)
-   [Form-triggered functions](https://docs.netlify.com/build/functions/trigger-on-events)
-   [Troubleshooting tips](https://docs.netlify.com/manage/forms/troubleshooting-tips)
-   [Forms usage and billing](https://docs.netlify.com/manage/forms/usage-and-billing)

Last updated: Jul 14, 2025

[PreviousSet up Preview Server for content sites](https://docs.netlify.com/manage/preview-servers/set-up-preview-server-for-content-sites/)[NextSubmissions](https://docs.netlify.com/manage/forms/submissions/)

#### Did you find this doc useful?

Your feedback helps us improve our docs.

   Do not fill in this field 

What else would you like to tell us about this doc?

Send

-   [Netlify](https://netlify.com/)
-   [Careers](https://netlify.com/careers/)
-   [Blog](https://netlify.com/blog/)
-   [Terms](https://www.netlify.com/legal/terms-of-use/)
-   [Privacy](https://www.netlify.com/privacy/)
-   [](https://www.youtube.com/@NetlifyApp)
-   [](https://x.com/Netlify)
-   [](https://bsky.app/profile/netlify.com)
-   [](https://linkedin.com/company/Netlify)
-   [](https://answers.netlify.com/)

© 2025 Netlify

Search

Clear

Ask Netlify AI

Get instant answers, powered by AI

## Help

-   [
    
    Go to support forums
    
    ](https://answers.netlify.com/)
-   [
    
    Contact support
    
    ](https://www.netlify.com/support/)
-   [
    
    Go to changelog
    
    ](https://netlify.com/changelog/)
-   [
    
    Contact sales
    
    ](https://www.netlify.com/contact/)

## Actions

Toggle theme

Escto close

Tabor↑↓to navigate