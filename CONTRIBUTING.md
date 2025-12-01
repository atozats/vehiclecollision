## Contributing to AtoZ Vehicle Collision Avoidance System

Thank you for your interest in contributing to the AtoZ Vehicle Collision Avoidance System.

This project is developed and maintained by **AtoZ Automation Solutions Pvt. Ltd.** and the community. We welcome contributions in the form of bug reports, feature requests, code changes, documentation, testing, and community support.

> By participating, you agree to abide by our `CODE_OF_CONDUCT.md`.

---

## Ways to Contribute

- **Bug reports** – problems, crashes, unexpected behavior.
- **Feature requests** – new ideas, UX improvements, integrations.
- **Code contributions** – fixes, refactors, performance, tests.
- **Documentation** – tutorials, architecture diagrams, translations.
- **Security reports** – see `SECURITY.md` for responsible disclosure.

---

## Development Setup

1. **Fork** the repository on GitHub.
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/vehiclecollision.git
   cd vehiclecollision
   ```
3. Install dependencies:
   ```bash
   cd server
   npm install

   cd ../client
   npm install
   ```
4. Create a local `.env` in `server/` (see `README.md`).
5. Run the development servers:
   ```bash
   # Terminal 1
   cd server
   npm start

   # Terminal 2
   cd client
   npm start
   ```

---

## Branching & Pull Requests

- Work from the latest `main` branch.
- Create a feature branch:
  ```bash
  git checkout -b feature/my-new-feature
  ```
- Make small, focused commits with clear messages.
- Ensure code builds and tests pass locally.
- Open a Pull Request (PR) against `main`:
  - Fill in the PR template.
  - Link relevant issues (`Fixes #123`).

Project maintainers will review PRs, request changes if needed, and merge once ready.

---

## Code Style & Quality

- Use the existing style from surrounding code.
- Prefer modern JavaScript features supported by the project.
- Keep functions small and focused.
- Add or update tests where appropriate:
  - Backend: Jest/Mocha (depending on final setup).
  - Frontend: React Testing Library / Jest.
- Avoid introducing new dependencies unless necessary; discuss large changes in an issue or proposal first.

---

## License of Contributions

- The project is licensed under the **GNU General Public License, version 3 (GPL-3.0) or (at your option) any later version**, as described in `LICENSE` and the main `README.md`.
- By contributing code, documentation, or other materials, you agree that your contributions may be distributed under the same GPL terms (and, where a CLA is used, under any additional terms described there).

---

## Commit Messages

- Use descriptive messages, e.g.:
  - `fix: handle missing GPS heading`
  - `feat: add combined collision alert payload`
  - `docs: update privacy policy section`
- Reference issues where applicable:
  - `fix: correct distance units (#123)`

---

## Contributor License Agreement (CLA)

To protect the project and all its users, we may require contributors to agree to a **Contributor License Agreement (CLA)** as described in `CLA.md`. The CLA ensures:

- You have the right to contribute the code.
- AtoZ Automation Solutions Pvt. Ltd. can use and distribute your contributions under the project license.

If a CLA bot or automated check is enabled, your first PR will prompt you to review and accept the agreement.

---

## Reporting Bugs

- Use the **Bug Report** issue template (if available).
- Include:
  - Environment details (OS, browser/mobile, Node, MongoDB).
  - Steps to reproduce, expected vs actual behavior.
  - Logs or screenshots if relevant (sanitize sensitive info).

---

## Proposing Features

- Use the **Feature Request** issue template.
- Explain:
  - The problem or use case.
  - Why this is important (e.g. safety, usability, scalability).
  - Any potential backward compatibility concerns.

For major design changes, open an issue first for discussion before implementing.

---

## Code of Conduct

This project has adopted a `CODE_OF_CONDUCT.md` to foster an open and welcoming environment. Please read it so that you can understand what actions will and will not be tolerated.

---

## Questions & Support

If you have questions:

- Open a GitHub Discussion or issue (as appropriate).
- Or use any official communication channels listed in the main `README.md` or project website.

We appreciate your time and effort in making this collision avoidance system safer and better for everyone.


