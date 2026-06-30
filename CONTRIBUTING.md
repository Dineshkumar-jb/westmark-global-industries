# Contributing to Westmark Global Industries Portal

Thank you for your interest in contributing to the Westmark Global Industries web portal! We appreciate your support in making this platform more stable, secure, and user-friendly.

Please read through these guidelines before submitting a pull request or creating an issue.

---

## 🛠️ How to Contribute

### 1. Reporting Bugs & Requesting Features
- Search the open issues to check if your concern has already been reported.
- If it hasn't, create a new issue using the appropriate template:
  - **Bug Report**: Explain what failed, how to reproduce it, and what you expected to happen.
  - **Feature Request**: Explain the problem, the suggested solution, and any design suggestions.

### 2. Working on Code Changes
1. **Fork the repository** on GitHub.
2. **Create a descriptive feature branch**:
   ```bash
   git checkout -b feature/your-awesome-feature
   # OR for bugs
   git checkout -b bugfix/issue-id-description
   ```
3. **Write clean, documented code**:
   - Adhere to the current design system (custom variables in `src/index.css`).
   - Use semantic HTML tags.
   - Test your changes locally before submitting.

### 3. Submitting a Pull Request (PR)
1. Commit your changes with clear, structured commit messages following conventional formats (e.g., `feat: add filter search to products page` or `fix: correct chatbot layout overlap`).
2. Push your branch to your fork:
   ```bash
   git push origin feature/your-awesome-feature
   ```
3. Open a Pull Request from your branch to our `main` branch.
4. Fill in the Pull Request Template with all details.
5. Wait for the CI checks (automatic Vite build check) to pass.
6. A maintainer will review your code and provide feedback or merge it.

---

## 🎨 Design and Coding Style

- **CSS & Theme**: Do not introduce ad-hoc utility frameworks (like Tailwind) unless explicitly agreed upon. Use the global CSS variables defined in `src/index.css` to maintain brand colors, margins, and fonts.
- **Components**: Keep components focused, modular, and reusable inside `src/components`.
- **Environment variables**: Never commit keys to the repository. Put all sensitive configurations (Firebase, EmailJS keys) inside `.env` (ignored by Git) and reference them via `import.meta.env.*`.

Thank you again for contributing!
