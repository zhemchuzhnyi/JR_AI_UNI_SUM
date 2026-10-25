---
name: Claude Code Lectures
description: Use when adding, updating, auditing, or structuring the Claude Code lecture notes in JR_AI_UNI_SUM: webinars, levels, lecture summaries, HTML pages, end-of-lecture practices, webinar practices, and control questions.
---

# Claude Code Lectures

This is the working skill for the lecture-notes project in this repository. The canonical structure document is `src/main/README.md`; keep it and this skill in sync when the rules change.

All paths below are relative to the workspace root.

## Structure

```text
src/main/
  index.html          # landing page for the public site
  _headers            # Netlify: serve .md as plain text
  webinar1/
    README.md
    CONTROL_QUESTIONS.md
    level1/
      lecture1/
        summary.txt
        index.html
      ...
    level2/
      lecture1/
      ...
    practice/
      summary.txt
      index.html
  webinar2/
    README.md
    level3/
      CONTROL_QUESTIONS.md
      lecture1/
      ...
    level4/
      README.md
      lecture1/
    practice/
      index.html
      1-calculator/
        summary.txt
        index.html
      2-simulations/
        summary.txt
        index.html
```

## Non-negotiable rules

- A lecture lives at `src/main/webinarN/levelN/lectureN/`.
- Every lecture has both `summary.txt` and `index.html`. Keep them synchronized in meaning.
- Local `lecture1` corresponds to URL `lecture01`. The site may display a lower number (for example, level 4 lecture 1 may be shown as “0 лекция”); folder naming remains local and 1-based.
- Every lecture ends with a short practice. It is part of the lecture, not a separate folder.
- Do not overwrite existing lecture content when adding or updating a practice. Add the practice at the end and preserve the existing sections.
- Never add a duplicate `## Практика` section. There must be exactly one practice section per lecture.
- Use fake data for Git, permissions, secrets, and other risky operations. Prefer a scratch repository or scratch folder.
- Do not add full reference solutions to lectures. A practice should have a goal, steps, and a self-check.
- Webinar-level practices are separate capstone tasks. They do not replace per-lecture practices.
- Do not put secrets, tokens, real customer data, or `.env` contents into notes, examples, prompts, or practice files.

## End-of-lecture practice

Add the practice to both files, at the end of the lecture (normally after “Что запомнить”, before the footer if there is one).

Markdown:

```text
## Практика (15–25 минут)

**Цель:** ...

**Что сделать:**
1. ...
2. ...
3. ...

**Проверка:**
- ...
- ...
```

HTML:

```html
<section>
  <h2>Практика (15–25 минут)</h2>
  <p><strong>Цель:</strong> ...</p>
  <h3>Что сделать</h3>
  <ol>
    <li>...</li>
  </ol>
  <h3>Проверка</h3>
  <ul>
    <li>...</li>
  </ul>
</section>
```

Practice requirements:

- 15–25 minutes.
- 3–5 concrete steps.
- Real commands, prompts, or files where useful.
- A self-check with observable outcomes.
- A safe fallback if the required tool or environment is unavailable.
- Only fake data for destructive or sensitive topics.

## Deployment

The public site is the static content under `src/main`, with the landing page at `src/main/index.html`.

- **Temporary hosting:** Netlify uses `netlify.toml` and publishes `src/main`. This works while the GitHub repository is private. Connect the repo in Netlify or upload a zip of `src/main` contents via Netlify Drop.
- **GitHub Pages (for later):** `.github/workflows/pages.yml` deploys `src/main` on pushes to `main` once Pages is enabled with **Source: GitHub Actions**. Expected URL: `https://zhemchuzhnyi.github.io/JR_AI_UNI_SUM/`.

Keep the landing page links in sync when lectures or practices move. Do not put private repository links on the public landing page unless the repo is public; prefer relative paths to public HTML pages.

## Existing webinar practices

These are separate from per-lecture practice and must remain in place:

- `src/main/webinar1/practice/` — CLAWD Wisdom demo, CLAWD YOLO, CLAWD Runner, deploy.
- `src/main/webinar2/practice/1-calculator/` — split-the-bill calculator walkthrough.
- `src/main/webinar2/practice/2-simulations/` — 100 prisoners and game-theory tournament.
- `src/main/webinar2/practice/index.html` — landing page for the two webinar-2 practices.

## Control questions

- `src/main/webinar1/CONTROL_QUESTIONS.md` — 30 questions across levels 1–2.
- `src/main/webinar2/level3/CONTROL_QUESTIONS.md` — 15 questions for level 3.

When adding a new lecture, consider whether the control-question block needs a new question. Keep answers consistent with the lecture summaries and HTML.

## Adding a new lecture

1. Create `src/main/webinarN/levelN/lectureN/`.
2. Write `summary.txt` and `index.html` in the established dark style, preserving the source lecture’s meaning.
3. Add the end-of-lecture practice to both files using the template above.
4. Update the webinar README and `levelN/README.md` if one exists.
5. Update `src/main/README.md` current-state notes if the inventory changed.
6. Verify HTML validity, practice count, and links.

## Auditing existing lectures

Check all of the following:

1. Every lecture folder has `summary.txt` and `index.html`.
2. The summary and HTML cover the same lecture sections.
3. Exactly one practice section exists in each file.
4. The practice has a goal, steps, and a self-check.
5. The practice is safe: fake data for Git, permissions, secrets, and destructive actions.
6. Webinar-level practice pages still exist and are linked.
7. README links resolve.
8. HTML tags are balanced.
9. No old folder paths or stale links remain.

## Current inventory

- **Webinar 1:** level 1 (lectures 1–5), level 2 (lectures 1–5), webinar practice, control questions.
- **Webinar 2:** level 3 (lectures 1–5), level 4 (lecture 1), two webinar practices, level-3 control questions.
- **Level 4:** further lectures are not added yet.

## Style and content

- Summaries are in Russian and preserve the meaning of the source lecture without becoming a verbatim transcript.
- HTML pages use the same dark visual language as the existing lectures: `main` width about 900–940 px, dark panels, orange accent, readable code blocks.
- Keep `summary.txt` and `index.html` aligned. If one changes, update the other.
- Prefer concrete examples from the lecture (Commerce OS, calculator, evidence log) over generic advice.
- When the source lecture uses a term such as “helpful overreach”, “evidence”, “non-goals”, “constraints”, or “agentic loop”, keep the term and explain it in context.

## Verification

Use a quick structural check after edits:

```bash
cd src/main
python3 - <<'PY'
import glob, re
for f in sorted(glob.glob('webinar*/level*/lecture*/summary.txt')):
    s = open(f, encoding='utf-8').read()
    assert s.count('## Практика') == 1, f
for f in sorted(glob.glob('webinar*/level*/lecture*/index.html')):
    s = open(f, encoding='utf-8').read()
    assert s.count('<h2>Практика') == 1, f
print('practice sections OK')
PY
```

Also check HTML tag balance and README links after structural changes.
