# Student Dashboard - React Accessibility (a11y) Assignment

**Assignment #16 - React Accessibility (a11y) in React**
Task: Audit a React app and fix issues: missing labels, low contrast, non-keyboard-accessible modal, missing focus trap and alt text. Test with a screen reader.

**GitHub repository:** `[PASTE YOUR GITHUB REPO LINK HERE]`

## Current status
**Version: AFTER (fixes applied in code, re-testing pending).**
The project started as an intentionally inaccessible version (audited first: axe found 8 issues - 3 Critical, 5 Serious). The fixes below are now in the same project. AFTER test results are still **TO BE TESTED** (see `ACCESSIBILITY_TESTING.md`).

## Tech used
React 18, Vite, JavaScript, eslint-plugin-jsx-a11y, axe DevTools, NVDA (Windows), Browser DevTools.

## How to run
```bash
npm install
npm run dev      # open the URL shown (usually http://localhost:5173)
npm run lint     # runs eslint-plugin-jsx-a11y
```

## Project structure
```
student-dashboard-accessibility/
├── public/profile.svg            profile image
├── screenshots/                  put your evidence screenshots here
├── src/
│   ├── components/
│   │   ├── Header.jsx            top navigation
│   │   ├── ProfileCard.jsx       student profile + image
│   │   ├── StudentForm.jsx       form (name, email, department, phone)
│   │   └── StudentModal.jsx      student details modal
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── ACCESSIBILITY_TESTING.md      testing checklist (fill with your results)
├── REPORT.md                     academic report
├── eslint.config.js
└── package.json
```

## Planted accessibility problems (BEFORE version) - all fixed in this version
1. Form inputs without labels (Name, Email); Department and Phone labels not linked to their fields
2. Profile images with no `alt`
3. Low colour contrast (subtitle, roll number, hint text, "View student details" button)
4. Modal close control is a `<div>`, so it cannot be used with the keyboard; Escape does nothing
5. No focus trap: Tab leaves the modal into the page behind it
6. Focus does not move into the modal, and does not return to the button on close
7. Modal has no `role="dialog"`, `aria-modal` or accessible name
8. Semantic HTML issues: no `<header>`, `<nav>`, `<main>`; nav items are `<span>`; wrong heading levels; no `lang` on `<html>`
9. Focus outline removed with CSS (`outline: none`)

## Results
See `ACCESSIBILITY_TESTING.md` and `REPORT.md`. Results are added only after real testing.

## Fixes implemented
| Problem | Fix |
|---|---|
| Missing labels | Every input has a `<label htmlFor>` linked to the input `id`; correct `type` and `autoComplete` added |
| Missing alt | Informative profile image has meaningful alt; the duplicate image in the modal has `alt=""` (decorative) |
| Low contrast | Grey text changed to `#595959`; button background changed to dark blue `#1f3a93` with white text |
| Keyboard modal | Close control is a real `<button>`; modal opens from a real button |
| Focus trap | `keydown` handler wraps Tab / Shift+Tab inside the modal |
| Focus management | Focus moves into the modal on open and returns to the opening button on close |
| Escape key | Escape closes the modal |
| Modal ARIA | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` (accessible name) |
| Semantics | `<header>`, `<nav>`, `<main>`, `<section>`, proper h1/h2 headings, `<ul>` + `<a href>` links, `<dl>` for details, `lang="en"`, skip link |
| Focus indicator | `outline: none` removed; `:focus-visible` outline added |
| Status message | Save message uses `role="status"` so it is announced |
