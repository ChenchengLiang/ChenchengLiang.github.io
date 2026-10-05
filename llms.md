# Agent retrieval index: Chencheng Liang

- Audience: external AI agents retrieving public information about Chencheng Liang.
- Scope: public profile, academic work, teaching, dated activities, and artwork.
- Site: https://chenchengliang.github.io
- Entry point: https://chenchengliang.github.io/llms.md
- Format: raw Markdown; no JavaScript or page rendering required for this index.

## Retrieval procedure

1. Match the requested information to the route table below; fetch the relevant source first.
2. Use the linked page or document as evidence and cite its URL, rather than citing this index for personal facts.
3. Fetch only additional sources needed for the task. The homepage and `/about/` contain the same profile.
4. Preserve dates and role descriptions from each source. Historical posts are evidence about their dated events, not automatic evidence of a current role.
5. If sources disagree, retain the dates and identify the discrepancy; do not infer missing personal details.

## Topic routes

| Information needed | Public source | Repository source |
| --- | --- | --- |
| Biography, education, research interests, skills, languages, contact email | [Profile](https://chenchengliang.github.io/about/) | `_tabs/about.md`; `index.md` reuses it at `/` |
| Curriculum vitae | [CV PDF](https://chenchengliang.github.io/assets/cv/resume.pdf) | `assets/cv/resume.pdf` |
| Publications, authors, venues, DOI, BibTeX, papers, talks, slides, reviewing service | [Research](https://chenchengliang.github.io/research/) | `_tabs/research.md` |
| Doctoral thesis: Learning to Guide Automated Reasoning: A GNN-Based Framework | [Thesis PDF](https://chenchengliang.github.io/assets/paper-pdf/Thesis.pdf) | `assets/paper-pdf/Thesis.pdf` |
| Doctoral defense presentation | [Defense slides PDF](https://chenchengliang.github.io/assets/slides/defense.pdf) | `assets/slides/defense.pdf` |
| Courses, teaching years, thesis and project supervision | [Teaching](https://chenchengliang.github.io/teaching/) | `_tabs/teaching.md` |
| Recent activities, talks, conferences, projects, teaching updates, personal writing | [Events feed](https://chenchengliang.github.io/updates/) | `updates/index.html`, `_posts/` |
| Complete chronological post lookup | [Archives](https://chenchengliang.github.io/archives/) | `_tabs/archives.md`, `_posts/` |
| Post lookup by topic | [Categories](https://chenchengliang.github.io/categories/) | `categories.md`, post front matter |
| AI-generated cat artwork, collections, usage terms | [Art Collection](https://chenchengliang.github.io/art-collection/) | `_tabs/art collection.md`, `_data/art_collections.yml` |

## Extraction notes

- Profile: education, interests, and skills may be visually collapsed. Their text is already present in the HTML; read it without clicking the controls.
- Contact: use the email published in the Profile body.
- Research: follow the exact PDF, DOI, BibTeX, and slide links attached to the relevant entry. Preserve author order, venue, year, and document type.
- Posts: navigation calls the feed Events, but its route is `/updates/`. Individual post URLs use `/posts/:title/`. Resolve exact URLs through the archive, sitemap, or feed rather than guessing from titles.
- Art: the page embeds collection metadata and image paths in the JSON element `art-gallery-data`. Observe the usage terms on that page.
- Assets: directory listing endpoints are not provided. Follow exact file links from their owning pages; preserve path case and spelling.

## Machine discovery

- [Sitemap](https://chenchengliang.github.io/sitemap.xml): enumerate public page URLs, including individual posts.
- [Atom feed](https://chenchengliang.github.io/feed.xml): retrieve syndicated recent post updates.
- [Public repository](https://github.com/ChenchengLiang/ChenchengLiang.github.io): resolve the repository paths in the table when source access is useful.

## Public resource directories

| Repository directory | Contents | Locate individual resources through |
| --- | --- | --- |
| `assets/cv/` | CV | Profile |
| `assets/paper-pdf/` | Publications and theses | Research; Profile for the master's thesis |
| `assets/slides/` | Talk and defense slides | Research |
| `assets/bib/` | BibTeX files (`.txt`) | Research |
| `assets/img/posts/` | Dated post images | Owning post |
| `assets/video/` | Post videos | Owning post |
| `assets/img/cats/` | Artwork images | Art Collection and its embedded JSON |
