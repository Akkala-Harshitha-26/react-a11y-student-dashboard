# Report - Assignment #16: React Accessibility (a11y)

**GitHub repository:** `[PASTE YOUR GITHUB REPO LINK HERE]`

## 1. Assignment Number and Title
Assignment #16 - React Accessibility (a11y) in React

## 2. Objective
[Write in your own words. Idea: audit a React app, find accessibility problems (labels, contrast, modal, focus trap, alt text), fix them, and prove the improvement using axe DevTools, keyboard testing and a screen reader.]

## 3. Tools Used
React, Vite, JavaScript, axe DevTools, eslint-plugin-jsx-a11y, NVDA (Windows), Chrome DevTools. [Add versions you used.]

## 4. Application Description
"Student Dashboard": header navigation, student profile with image, student information form (Name, Email, Department, Phone), and a modal showing student details. [Add more if you want.]

## 5. Initial Accessibility Problems
Problems planted on purpose in the BEFORE version:
1. Missing form labels
2. Missing image alt text
3. Low colour contrast
4. Modal not usable with keyboard
5. No focus trap
6. No focus moved into the modal / not restored on close
7. Missing modal ARIA attributes
8. Semantic HTML issues
9. Focus outline removed

## 6. Before Testing
[Steps you followed and what you observed. Fill from ACCESSIBILITY_TESTING.md.]

## 7. Accessibility Audit
axe DevTools result (BEFORE): 8 total issues - 3 Critical, 5 Serious (recorded by me)
ESLint jsx-a11y result (BEFORE): TO BE TESTED
[List each axe issue you found.]

## 8. Fixes Implemented
Changes made in the same project:
1. Labels: `<label htmlFor>` + input `id` for Name, Email, Department, Phone.
2. Alt text: meaningful alt on the profile image; `alt=""` on the decorative copy in the modal.
3. Contrast: grey text darkened to `#595959`; button colour darkened to `#1f3a93`.
4. Modal: `role="dialog"`, `aria-modal`, `aria-labelledby`; real close `<button>`.
5. Focus: moves into modal on open; Tab/Shift+Tab trapped; Escape closes; focus returns to the opening button.
6. Semantics: header, nav, main, sections, headings, lists, `lang="en"`, skip link.
7. Visible focus outline restored.
[Add your own explanation in your own words for the viva.]

## 9. After Testing
[To be completed after fixing and re-testing.]

## 10. Before vs After Results

| Accessibility Test | Before | After |
|---|---:|---:|
| axe issues | 8 (3 Critical, 5 Serious) | TO BE TESTED |
| Missing labels | TO BE TESTED | TO BE TESTED |
| Missing alt text | TO BE TESTED | TO BE TESTED |
| Contrast issues | TO BE TESTED | TO BE TESTED |
| Keyboard navigation | TO BE TESTED | TO BE TESTED |
| Modal focus trap | TO BE TESTED | TO BE TESTED |
| Escape key | TO BE TESTED | TO BE TESTED |
| Focus restoration | TO BE TESTED | TO BE TESTED |
| Screen reader | TO BE TESTED | TO BE TESTED |

## 11. Screenshots / Evidence
[Insert your own screenshots from the `screenshots/` folder, with a caption for each.]

## 12. Observations
[Write what you noticed, e.g. how the screen reader behaved differently before and after.]

## 13. Conclusion
[Write after testing is complete.]
