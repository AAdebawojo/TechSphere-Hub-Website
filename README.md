# 🌟 TechSphere Hub Academy Website

Welcome to the **TechSphere Hub Academy** website project!

This redesigned website introduces our programmes, learning community and founders, and shares practical ideas through **The Hub Journal**. It includes a modern homepage, a programme directory, detailed bootcamp pages, a blog, a contact page and policy pages—all built using **HTML, CSS and vanilla JavaScript**.

🌍 **Website:** [www.techspherehub.co.uk](https://www.techspherehub.co.uk/)

---

## 📂 Project Structure

The structure below shows the **published repository root**. Copy the **contents of the `website` folder** from the redesign package into this root, then add this `README.md` alongside `index.html`.

```text
/
|-- README.md              # Project documentation
|-- index.html             # Homepage
|-- courses.html           # Programme directory
|-- about.html             # About Us and founders
|-- contact.html           # Contact and registration options
|-- blog.html              # The Hub Journal: article listing
|-- article.html           # Individual article reader
|-- ba courses.html        # Business Analysis Bootcamp
|-- da courses.html        # Data Analyst Bootcamp
|-- qa courses.html        # QA Testing Bootcamp
|-- dm courses.html        # Digital Marketing Bootcamp
|-- privacy_policy.html    # Privacy Policy
|-- refund_policy.html     # Refund Policy
|-- terms.html             # Terms & Conditions
|-- CNAME                  # Custom domain for GitHub Pages
|-- .nojekyll              # Serves the site without Jekyll processing
|-- robots.txt             # Search-engine crawling instructions
|-- sitemap.xml            # Sitemap of static website pages
|-- LICENSE                # Supplied project licence
|-- css/
|   |-- styles.css         # Shared styling and responsive layouts
|-- js/
|   |-- main.js            # Navigation and programme filtering
|   |-- blog.js            # Blog search, filters and article rendering
|   |-- markdown.js        # Supported article formatting
|-- content/
|   |-- blog-posts.js      # Published article data
|-- images/                # Logo, programme and section images
|   |-- blog/              # Article cover images
```
---

## 📄 Pages Overview

### Home Page (`index.html`)

- Introductory hero section and programme call to action.
- Overview of the four bootcamps.
- Introduction to TechSphere Hub Academy.
- Practical learning, community, career support and mentorship benefits.
- Student testimonials.
- Three article previews from The Hub Journal.
- Cohort registration links and a shared footer with social and policy links.

### Programmes Page (`courses.html`)

- Directory of all four bootcamps.
- Topic filters to help visitors explore different pathways.
- Programme summaries, durations and availability or pricing.
- Links to the detailed bootcamp pages.

### About Us Page (`about.html`)

- Introduction to the academy.
- Our mission and vision.
- Founder photographs and biographies.
- Invitation to join a cohort.

### Course Detail Pages

- **Data Analyst Bootcamp** — `da courses.html`
- **Business Analysis Bootcamp** — `ba courses.html`
- **QA Testing Bootcamp** — `qa courses.html`
- **Digital Marketing Bootcamp** — `dm courses.html`

Each course page includes:

- Programme overview and duration.
- Pricing or upcoming availability.
- Expandable curriculum sections.
- Tools, techniques and skills covered.
- Learning and career-support benefits.
- Registration or enquiry links.
- Related programmes to explore.

### Blog Pages (`blog.html` and `article.html`)

**The Hub Journal** includes ten supplied articles covering AI, Power BI, data careers, African technology companies, digital wellbeing and essential digital skills.

Features include:

- Matching cover images for every article.
- Search across article titles, introductions and content.
- Topic filters and estimated reading times.
- Individual article links, such as `article.html?post=egypts-tech-scene`.
- Headings, emphasis, lists and clickable supplied references.
- Automatic contents navigation for longer articles.

Publication dates are omitted where none were supplied. Articles are loaded from `content/blog-posts.js`, so **JavaScript must be enabled** to browse and read them.

### Contact Page (`contact.html`)

- Microsoft Forms cohort registration.
- Email and telephone contact links.
- WhatsApp community invitation.
- Registered business address.

### Policy Pages

- **Privacy Policy** — `privacy_policy.html`
- **Refund Policy** — `refund_policy.html`
- **Terms & Conditions** — `terms.html`

---

## 🛠 Technologies Used

- **HTML5** for page structure and semantic content.
- **CSS3** for styling, Grid and Flexbox layouts, and responsive breakpoints.
- **Vanilla JavaScript** for navigation, filtering and blog interactions.
- **System fonts** using Arial, Helvetica and sans-serif fallbacks.
- **WebP images** for optimised delivery, with the original logo retained as PNG.
- **A lightweight Markdown renderer** for supported article formatting.

✅ No framework, package installation or compilation step is required.

The redesign does not depend on Google Fonts or Font Awesome.

---

## 📱 Responsive Design and Accessibility

- Layouts adapt to desktop, tablet and mobile widths.
- Programme cards, article cards and multi-column sections stack on smaller screens.
- Shared navigation adapts to available screen space.
- Blog cover images display without cropping the embedded text.
- Keyboard focus styles and a skip-to-content link support navigation.
- Article headings and expandable curriculum sections provide structure.
- Reduced-motion preferences are respected.

Review the site in your target browsers and on mobile devices before publishing significant changes.

---

## 📈 How to Run the Project Locally

1. **Download or clone** the repository.
2. Open the project folder.
3. Open `index.html` in Chrome, Edge, Firefox or Safari.
4. Use the navigation links to explore the other pages.

If working from the full redesign package, open `website/index.html` or use `START-HERE.html`.

✅ A server is not required for the current static website.

For an optional local HTTP preview, run the following from the folder containing `index.html`, if Python is installed:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

---

## ✍️ Managing Blog Articles

The complete redesign package includes a **local blog editor** at `tools/blog-editor.html`. Keep the editor beside the original `website` folder so its supporting files remain accessible.

1. Open the editor in your browser.
2. Select an existing article or choose **New article**.
3. Add the title, unique URL slug, topic, optional date, author, introduction, cover image, image description and body text.
4. Choose **Draft** while working, then click **Save article**.
5. Download a **JSON backup** regularly to preserve your drafts and saved articles.
6. When ready, choose **Published** and save again.
7. Select **Export published articles** to download `blog-posts.js`.
8. Replace the copy in your local `website/content/` folder and commit the updated file to the repository’s `content/` folder.

Once deployed, the blog listing, article reader and homepage previews use the updated data.

### Supported Article Formatting

- Separate paragraphs with a blank line.
- Use `## Heading` or `### Subheading` in a separate block.
- Use `**bold text**` for emphasis.
- Use `[link label](https://example.com)` for a link.
- Use `- Item` for bullet lists or `1. Item` for numbered lists.
- Use `> Quoted text` for a blockquote.

Drafts are excluded from the public export. Publication is manual: a future date does not schedule an article. The editor works locally and does not update GitHub automatically.

Keep article slugs unchanged after publication to preserve existing links. If the editor shows an older saved list, back up your work and use **Reload articles from website file**, or import the included JSON backup.

---

## 🔗 External Resources

- **Website:** [TechSphere Hub Academy](https://www.techspherehub.co.uk/)
- **Cohort registration:** [Microsoft Forms](https://forms.cloud.microsoft/e/NUFCftbrpM)
- **Business Analysis registration:** [Microsoft Forms](https://forms.office.com/e/LMijd6Pyqn)
- **GitHub Pages:** [Publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- **Custom domains:** [GitHub Pages domain configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

Website images are stored locally in `images/`, including article covers in `images/blog/`.

---

## 🌍 Deployment Options

This static website can be hosted using **GitHub Pages**, **Cloudflare Pages**, **Netlify** or **Vercel**, subject to each provider’s plan and usage limits.

### Simple Deployment via GitHub Pages

1. Create or open the GitHub repository. Use a **public repository** for GitHub Pages on GitHub Free.
2. Upload the **contents of `website/`**, keeping `index.html` directly in the repository root.
3. Add this `README.md` to the same root.
4. Open **Settings → Pages**.
5. Under **Source**, choose **Deploy from a branch**.
6. Select the **main** branch and **/(root)** folder.
7. Click **Save** and check the deployment result.

Keep `CNAME`, `.nojekyll`, `robots.txt` and `sitemap.xml` alongside the HTML files. Do not upload the entire redesign ZIP or the local support folders.

### Using Your Own Domain

1. Verify domain ownership in GitHub’s Pages settings.
2. In the repository’s **Settings → Pages**, set the custom domain to **www.techspherehub.co.uk**.
3. Ensure the `CNAME` file contains that same domain, without `https://` or a path.
4. Configure DNS using GitHub’s custom-domain documentation. For `www`, the CNAME target is your account’s `<username>.github.io` hostname, without a repository path.
5. If you also want the bare domain `techspherehub.co.uk` to work, configure its DNS records as documented by GitHub.
6. Enable **Enforce HTTPS** when the certificate is ready.

Preserve existing email-related DNS records when updating the website’s domain settings.

---

## 📝 Future Enhancements

- An authenticated online content-management system for blog publishing.
- Individually generated article pages with article-specific metadata available before JavaScript runs.
- A connected contact form with appropriate validation and spam protection.
- Automated deployment checks for broken links and accessibility issues.
- Additional student projects and learner stories as content becomes available.

---

## 🙏 Credits

- **Designed and Developed by:** Ayomikun Adebawojo.
- **Branding and Editorial Content:** TechSphere Hub Academy.
- **Images:** Supplied website and article assets, with the original academy logo retained.

---

🎉 **Happy Learning and Building with TechSphere Hub Academy!** 🚀
