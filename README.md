## AtoZ Vehicle Collision Avoidance System

An open-source, GPS-based collision avoidance and situational awareness platform built on the **MERN stack** (MongoDB, Express/Node.js, React) with real-time communication using **Socket.IO**.

This repository contains the reference implementation developed by **AtoZ Automation Solutions Pvt. Ltd.** and is intended to be:

- a **production-ready baseline** for pilots and deployments,
- a **research and innovation platform** for collision prediction and road safety,
- a **community project** for developers, fleets, schools, and governments.

> This document is a high-level overview. See the other markdown files in the root (e.g. `CONTRIBUTING.md`, `GOVERNANCE.md`, `PRIVACY_POLICY.md`) for details.

---

## Repository Structure

- `client/` – React web client (Create React App).
- `server/` – Node.js + Express + Socket.IO backend with MongoDB.
- (Future) `docs/` – documentation site (e.g. Docusaurus or MkDocs).

---

## Features (Current MVP)

- Real-time **vehicle registration** and **status tracking**.
- **Location tracking** with per-vehicle enable/disable flags.
- Real-time **Socket.IO** updates of:
  - Vehicle lists.
  - Users with location tracking enabled.
- Core **collision risk detection** based on:
  - Distance between vehicles.
  - Relative bearing and heading.
  - Approaching vs receding movement.
- REST API endpoints for:
  - Listing active vehicles.
  - Listing tracked users.
  - Fetching user details by phone number.

---

## Getting Started (Development)

### Prerequisites

- Node.js (LTS)
- npm or yarn
- MongoDB instance (local or remote)

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/vehiclecollision.git
cd vehiclecollision
```

### 2. Configure Environment

Create a `.env` file in the `server/` directory:

```bash
MONGODB_URI=mongodb://localhost:27017/collision-alarm
PORT=5000
```

Adjust according to your MongoDB setup.

### 3. Install Dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 4. Run in Development

In one terminal:

```bash
cd server
npm start
```

In another terminal:

```bash
cd client
npm start
```

- Backend default: `http://localhost:5000`
- Frontend default: `http://localhost:3000`

---

## Production Deployment (High Level)

For a production deployment (e.g. on a Hostinger VPS):

- Run the Node.js backend with **PM2** or a similar process manager.
- Use **Nginx** as a reverse proxy:
  - Terminate HTTPS (TLS / Let’s Encrypt).
  - Proxy `/api` and WebSocket traffic to the Node.js server.
  - Serve the `client` production build as static files.
- Lock down the server with firewall rules (only 22/80/443 as appropriate).
- Use a managed MongoDB service where possible for reliability and backups.

See `SECURITY.md` and `GOVERNANCE.md` for additional operational guidance.

---

## Open-Source Model & Ownership

- Copyright © 2025 **AtoZ Automation Solutions Pvt. Ltd.**
- This program is free software: you can redistribute it and/or modify it under the terms of the **GNU General Public License** as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version (see `LICENSE` for details).
- AtoZ Automation Solutions Pvt. Ltd. retains its **trademarks**, brand names, and logo; see `GOVERNANCE.md` and any published trademark policy for usage rules.

---

## Contributing

Contributions are welcome from individuals, organizations, and research groups.

- Read `CONTRIBUTING.md` for:
  - Development environment setup.
  - Code style and testing requirements.
  - How to submit issues and pull requests.
- All contributors are expected to abide by the `CODE_OF_CONDUCT.md`.
- Depending on how the project is configured, you may be asked to accept a Contributor License Agreement (`CLA.md`) before your first contribution is merged.

---

## Security & Privacy

- For details on how to report security issues, see `SECURITY.md`.
- For data handling, privacy, and consent expectations, see `PRIVACY_POLICY.md` and `TERMS_OF_USE.md`.
- This repository is a reference implementation and does **not** replace your own legal and regulatory compliance obligations. Consult legal counsel before production use.

---

## Roadmap & Governance

- High-level technical and community roadmap: `ROADMAP.md`.
- Release history and important changes: `CHANGELOG.md`.
- Project governance and decision-making: `GOVERNANCE.md`.

If you are interested in large-scale pilots, partnerships, or commercial support, contact AtoZ Automation Solutions Pvt. Ltd. directly.


