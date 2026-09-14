# Codex Task: Redesign and Update Michael Frueh Jr.'s Portfolio Website

You are updating an existing GitHub Pages portfolio for **Michael Frueh Jr.**, a Computer Science & Engineering student at **The Ohio State University**. The repository/site files are provided in the `site/` directory beside this prompt.

## Primary goal

Redesign and update the portfolio so it feels current, polished, technically credible, recruiter-friendly, and memorable for **Software Engineering, AI Engineering, and Data Analyst / Data-oriented Engineering internships, co-ops, and early-career roles**.

The finished site should make a recruiter understand within roughly 10-15 seconds:

- who Michael is,
- the roles he is targeting,
- the strongest technical skills he has,
- his most relevant projects and technical experience,
- that he has an **incoming Honda Data Services co-op**, and
- that he is **actively looking for a Summer 2027 internship**.

Do not make the site feel like a generic template. Keep it professional and modern, with a strong software/AI/data identity, but avoid excessive neon, gimmicks, or animations that distract from the content.

---

## Files and source-of-truth rules

Work directly inside `site/`.

Important files include:

- `index.html` - current main portfolio page.
- `resume.html` - current web resume page.
- `Michael_Frueh_Jr_ResumeG.pdf` - **NEW resume that must replace the resume currently linked on the site.**
- `Michael_Frueh_Jr_RESUME03.pdf` - older resume; keep only if needed for reference, but do not link to it in the final site.
- `Michael Frueh Resume.pdf` - legacy resume; do not link to it in the final site.
- `2026_Frueh_Michael_2.jpg` - professional headshot option.
- `IMG_7908.jpg` and `IMG_7951.jpg` - additional personal photo options.
- `legbraceteam.jpg` - project/team photo.
- `websiteicon.png` - favicon/site icon.
- `Michael Frueh.png` - existing graphic/image asset.

Use Michael's explicit updates in this prompt as the source of truth for website copy even if an older page or PDF contains stale information. Do **not** invent employers, dates, technologies, awards, metrics, project links, or responsibilities that are not supported by the supplied information.

### Important conflict to handle

The new PDF resume currently states an expected graduation of May 2028, but Michael has explicitly requested that the **website graduation year be updated to 2029**. The website must therefore show **Expected Graduation: 2029**. Do not alter the PDF unless a source-editable resume file is available; simply use the supplied `Michael_Frueh_Jr_ResumeG.pdf` as the downloadable resume.

---

## Required content updates

### 1. Hero / first impression

Rewrite the hero so it targets recruiters for software, AI, and data roles. It should feel concise, confident, and specific rather than generic.

Recommended positioning:

**Michael Frueh Jr.**  
Computer Science & Engineering @ The Ohio State University  
Software Engineering • Applied AI • Data & Automation

Add a clearly visible status badge / callout such as:

> **Open to Summer 2027 Software Engineering, AI Engineering, and Data-focused Internships**

Do not make it sound desperate or overly broad. It should read like professional availability.

Include strong CTAs near the top:

- View Projects
- Download Resume
- GitHub
- LinkedIn
- Contact / Email

Use the professional headshot that works best visually, with preference for `2026_Frueh_Michael_2.jpg` if it creates the strongest recruiter-facing presentation.

Update all stale references such as "class of 2028" to **2029**.

### 2. Career focus

The site should clearly communicate three complementary areas:

- **Software Engineering** - full-stack/mobile/backend development, APIs, testing, OOP, software design.
- **AI Engineering / Applied AI** - AI-enabled applications, OpenAI API, privacy-first AI tooling, prompt engineering where appropriate, AI product development.
- **Data / Automation** - SQLite/data workflows, reporting, data services, Microsoft Graph API, process automation, operational data, and upcoming Honda Data Services experience.

Do not claim tools not present in the supplied resume. In particular, do not add Power BI, Tableau, Pandas, NumPy, AWS, Azure, SQL Server, or other technologies unless they already exist in the site files or are explicitly supported elsewhere in the supplied materials.

### 3. Skills section

Replace the current simplified skills area with a recruiter-scannable technical skills section using these resume-backed skills:

**Languages**
- Java
- Python
- JavaScript
- Dart
- C++
- HTML
- CSS

**Frameworks, APIs & Data**
- FastAPI
- Flutter
- SQLite
- Hive
- REST APIs
- OpenAI API
- Microsoft Graph API

**Developer Tools / Platforms**
- Git
- GitHub
- JUnit
- VS Code
- Eclipse
- Rewst
- NinjaOne
- ConnectWise
- Browser Extension APIs

**Software Engineering**
- Object-oriented programming
- Data structures
- Algorithms
- Debugging
- API integration
- SDLC
- Agile
- Unit testing
- Software automation

Present these in a polished, readable way. Avoid a huge undifferentiated tag cloud.

### 4. Projects

Update the project section so the strongest and most relevant projects come first. Every project card should answer: **What is it? What did Michael build? What technology did he use? Why is it technically interesting?**

#### MicDrop - AI Study Application

Add **MicDrop** as a featured project. Use this factual basis:

- Full-stack AI study application.
- Technologies: **Python, FastAPI, Flutter, Dart, OpenAI API, Hive**.
- Transforms lecture audio and course materials into structured notes, quizzes, and flashcards through REST API integrations.
- Includes persistent storage, search, export, and content-management workflows.
- Uses course context to improve AI-generated study content.

The current website's "LectureNote App" appears to represent an earlier version of this concept. **Replace/rename that project with MicDrop rather than displaying both as separate projects unless the code clearly establishes they are distinct products.**

#### MichaTone - Offline Music Application

Add **MichaTone** as a featured project. Use this factual basis:

- Offline-first music application.
- Technologies: **Flutter, Dart, SQLite, Android**.
- Background playback, search, playlists, queue restoration, analytics, metadata, and local recommendations.
- Code quality verified through static analysis, debug/release builds, and **55 passing tests**.

Make the offline-first/local-data architecture a visible strength.

#### AI Content Shield - Privacy-First Browser Extension

Keep/add this as a strong AI/software project if it is not already represented properly.

Use this factual basis:

- Technologies: **JavaScript, HTML, CSS, Chrome/Firefox Browser Extension APIs**.
- Local-first content-processing and configurable blocking architecture for Chrome and Firefox.
- No accounts, telemetry, or cloud inference by default.
- Evaluation and calibration tooling with **45 passing tests**.
- Benchmarked **9,250 analyses at approximately 0.15 ms per analysis**.

Frame this carefully as an engineering project; do not overstate the accuracy or capabilities of AI-content detection.

#### Honda Launchpad - Autonomous Factory Pallet Mover

Add or retain as a team engineering project:

- Eight-person team.
- Designed and programmed an autonomous prototype.
- Integrated software and hardware and iterated toward a working demonstration.
- `legbraceteam.jpg` is for the Smart Leg Brace project, so do not incorrectly use that photo for Honda Launchpad.

#### Smart Leg Brace

The current site contains this project and `legbraceteam.jpg`. It may remain as a secondary project if the design has room, especially because it shows hardware/team engineering breadth. Do not let it outrank MicDrop, MichaTone, or AI Content Shield for the target roles.

#### Portfolio Site

Do not feature the portfolio itself as one of the top projects unless extra space remains. Recruiters are already viewing it; stronger technical projects should have priority.

### 5. Relevant experience

Rebuild the experience section around technical relevance. Use the following ordering and information:

#### Honda - Data Services Student (Incoming Co-op)
**Marysville, OH | Jan. 25 - May 7, 2027**

- Clearly mark this as **Incoming / Upcoming**.
- Selected to support data and IT initiatives through analysis, stakeholder requirements, project planning, standardized reporting, and process improvement.
- This should be visually prominent because it demonstrates upcoming professional data experience.

#### Perry proTECH - DevOps Engineer Intern
**Lima, OH | Dec. 2025 - May 2026**

Use concise bullets based on the new resume:

- Engineered automation workflows integrating NinjaOne, ConnectWise, and Microsoft Graph API to retrieve device data, evaluate policy overrides, apply end-of-life policies, and generate operational reports.
- Converted recurring support processes into modular, reusable workflow logic and validated behavior against live data.
- Collaborated with engineers on requirements, troubleshooting, test records, and technical documentation.

#### The Ohio State University - IT Help Desk Student Technician
**Columbus, OH | Oct. 2025 - Present**

This is an explicit correction and must be reflected everywhere on the site:

- Location is **Columbus, OH**, not Lima.
- Employment status is **Present**.
- Troubleshoot hardware, software, account, and network incidents.
- Document resolutions, identify recurring issues, and escalate complex problems with complete technical records.

Remove stale site copy that says this job ended in May 2026.

Older nontechnical retail experience does not need to be prominent on the portfolio. The downloadable resume remains the formal record.

### 6. Education

Update education to:

**The Ohio State University - Columbus, OH**  
Bachelor of Science in Computer Science & Engineering  
Artificial Intelligence specialization  
**Expected Graduation: 2029**

If GPA is displayed, use **3.2** because that is what appears on the supplied new resume. Do not make GPA a hero-level statistic; it can live in Education or be omitted from the website if that produces a cleaner presentation.

Relevant coursework may include only what is supported by the supplied resume:

- Software Development & Design
- Data Structures & Algorithms
- Discrete Structures

### 7. Achievements / involvement

Use the strongest resume-backed achievement if helpful:

- **AI Hackathon:** One of **8 winning teams among 70 teams**, collaborating to develop and present a working AI solution under time constraints.

Technical/campus involvement may be displayed compactly:

- ColorStack
- AI Club
- OSU Dev
- Big Data Analytics Association
- Disciples On Campus

Do not add unsupported award names or dollar values from stale HTML. The current `resume.html` includes questionable/outdated highlight text; remove anything not supported by the new resume or explicit instructions.

---

## Resume replacement requirements

The final site must use:

`Michael_Frueh_Jr_ResumeG.pdf`

for every resume-related link or download button.

Required checks:

1. Replace references to `Michael_Frueh_Jr_RESUME03.pdf`.
2. Replace references to `Michael Frueh Resume.pdf`.
3. Make the main navigation resume link useful and obvious.
4. In `resume.html`, either:
   - create a polished recruiter-friendly resume landing page that links to/downloads the new PDF, or
   - embed/preview the PDF while keeping a clear Download PDF button.
5. Make sure the PDF filename works correctly on GitHub Pages, including capitalization.

Do not modify the contents of `Michael_Frueh_Jr_ResumeG.pdf` as part of this website task.

---

## Design direction

Create a major visual improvement over the current site while keeping it credible for recruiters.

### Desired visual style

- Modern software-engineering portfolio.
- Dark or dark-neutral theme is fine, but improve hierarchy and contrast.
- Clean grid, strong spacing, excellent typography.
- Subtle gradients or glass effects only where they add polish.
- Restrained micro-interactions and scroll reveals.
- Professional enough for JPMorgan Chase, Honda, enterprise tech, AI startups, and data teams.
- Strong project cards with concise technical details.
- Clear section separators and consistent visual rhythm.
- Add tasteful visual cues for Software / AI / Data without becoming "cyberpunk."

### Recruiter UX

Optimize for fast scanning:

- Important information must be visible without long paragraphs.
- Avoid vague phrases like "passionate about technology" unless backed by specific work.
- Prefer action-oriented language and concrete technologies.
- Show status labels like **Incoming Co-op**, **Completed**, **In Development**, or **Open to Summer 2027** where helpful.
- Put the strongest projects and experience above less relevant content.
- Use clear external-link icons/text for GitHub, LinkedIn, and resume.
- Keep contact information easy to find.

### Responsive/accessibility quality

- Fully responsive on desktop, tablet, and phone.
- Navigation should not overflow on small screens.
- Use semantic HTML and logical heading structure.
- Good color contrast.
- Keyboard-focus states must be visible.
- Respect `prefers-reduced-motion`.
- Useful `alt` text on meaningful images.
- Avoid layout shift.
- Avoid giant image payloads where practical; use responsive sizing and `loading="lazy"` below the fold.

---

## Technical implementation requirements

This is a static GitHub Pages site. Keep deployment simple.

- Use **HTML, CSS, and vanilla JavaScript** unless the existing repository already includes a build system that clearly justifies something else.
- Do not introduce React, Next.js, npm tooling, or a framework solely for aesthetics.
- Keep it GitHub Pages compatible with relative paths.
- No backend is required.
- Avoid broken asset names and case-sensitivity issues.
- Remove or consolidate obsolete code.
- Keep JavaScript lightweight.
- The site must still work if animations fail.
- Make external links use `target="_blank"` and `rel="noopener noreferrer"` where appropriate.
- Add/update meta description, Open Graph basics if practical, and a useful page title for recruiter search/share previews.
- Keep the favicon.
- Do not expose private information beyond what is already intentionally present in the provided public resume/site.

If using email or phone links, preserve the public contact information already supplied in the new resume/site.

---

## Suggested information architecture

You may improve this if you have a better recruiter-focused structure, but a strong default is:

1. Sticky navigation
2. Hero + "Open to Summer 2027" availability
3. Quick career-focus / proof points
4. Featured Projects - MicDrop, MichaTone, AI Content Shield
5. Additional Project - Honda Launchpad / Smart Leg Brace
6. Experience - Honda, Perry proTECH, OSU IT Help Desk
7. Technical Skills
8. Education + achievements/involvement
9. Contact CTA
10. Footer

The site should not feel overcrowded. It is better to present fewer items well than dump the full resume onto the page.

---

## Content tone

Write copy that is:

- confident but not arrogant,
- concise,
- technically specific,
- natural,
- recruiter-friendly,
- free of buzzword stuffing.

Avoid claiming expertise in areas where the supplied evidence only shows introductory exposure. Use phrases such as "building," "developed," "implemented," "integrated," and "tested" when supported.

A good summary direction is:

> Computer Science & Engineering student at The Ohio State University building software, applied AI, and data-driven automation. Experience spans full-stack AI applications, mobile development, browser extensions, DevOps automation, and IT support, with an incoming Honda Data Services co-op in Spring 2027.

You may improve that wording, but preserve its factual meaning.

---

## QA checklist before finishing

Before reporting completion, inspect the final site and verify all of the following:

- [ ] Site says graduation year **2029** everywhere.
- [ ] Site prominently says Michael is seeking a **Summer 2027 internship**.
- [ ] Target roles include Software Engineering, AI Engineering, and Data/Data Analyst-oriented opportunities.
- [ ] MicDrop is present with the correct tech stack and description.
- [ ] MichaTone is present with the correct tech stack and 55-test detail.
- [ ] AI Content Shield is represented accurately without overstating detection performance.
- [ ] Honda Data Services incoming co-op appears with **Jan. 25 - May 7, 2027**.
- [ ] OSU IT Help Desk says **Columbus, OH | Oct. 2025 - Present**.
- [ ] Perry proTECH says **DevOps Engineer Intern | Dec. 2025 - May 2026**.
- [ ] Skills match the supplied resume and are organized into readable categories.
- [ ] All resume links point to `Michael_Frueh_Jr_ResumeG.pdf`.
- [ ] No final link points to an older resume PDF.
- [ ] No stale "class of 2028" or old IT Help Desk end date remains.
- [ ] No unsupported award/dollar-value claims remain from the old `resume.html`.
- [ ] Navigation works.
- [ ] Project filters, if retained, work with the new categories.
- [ ] All local image paths resolve on a case-sensitive GitHub Pages host.
- [ ] Mobile layout is clean at roughly 375px width.
- [ ] No horizontal scrolling on mobile.
- [ ] All buttons/links have obvious hover and keyboard focus states.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Page has no console errors.
- [ ] No missing images or 404 asset requests.
- [ ] Resume opens/downloads successfully.

---

## Deliverables

Make the changes directly in `site/` and return:

1. The completed updated site files.
2. A concise summary of what changed.
3. A list of any assumptions you had to make.
4. Any remaining items Michael should manually verify before deploying to GitHub Pages.

Do not stop after suggesting changes. **Implement the redesign and content updates fully.**
