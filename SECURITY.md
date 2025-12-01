## Security Policy

Security and integrity are critical for a GPS-based collision avoidance system. This document explains how we handle security and how to report vulnerabilities.

---

## Supported Versions

Security fixes are generally applied to:

- The latest `main` branch.
- The most recent tagged release (as indicated in `CHANGELOG.md`).

Older versions may not receive security patches; users should keep deployments up to date.

---

## Reporting a Vulnerability

If you discover a security vulnerability:

- **Do not** open a public GitHub issue with sensitive details.
- Instead, contact the maintainers privately using the contact information listed in the main `README.md` or on the official AtoZ Automation Solutions Pvt. Ltd. website.

Please include:

- A description of the vulnerability.
- Steps to reproduce or proof-of-concept.
- Any known affected configurations (e.g. OS, Node.js version, deployment setup).

We aim to:

- Acknowledge receipt as quickly as possible.
- Investigate and validate the report.
- Prepare and release a fix.
- Coordinate a reasonable disclosure timeline with you.

---

## Scope

This policy covers:

- The open-source code in this repository (server and client).
- Configuration guidance and deployment examples contained here.

It does **not** cover:

- Third-party services (hosting providers, managed databases).
- Custom forks or modifications of the code maintained by others.

---

## Hardening Guidelines (High Level)

For secure deployments:

- **Network & Infrastructure**
  - Restrict open ports with a firewall (typically only 22/80/443).
  - Avoid exposing MongoDB or other databases directly to the internet.
  - Use HTTPS/TLS for all web and WebSocket traffic.

- **Application & API**
  - Use authentication and authorization (e.g. JWT + RBAC) for sensitive APIs.
  - Validate and sanitize all incoming data.
  - Apply rate limiting to APIs and real-time endpoints.

- **Data Protection**
  - Encrypt data in transit (TLS) and at rest where feasible.
  - Limit access to location and personal data to authorized personnel/services only.
  - Implement logs and monitoring for suspicious activity.

See `PRIVACY_POLICY.md` and `TERMS_OF_USE.md` for privacy and legal considerations.

---

## Reporting Non-Security Issues

For bugs, feature requests, or other non-security topics, please use:

- GitHub Issues with appropriate templates (bug/feature).
- Discussions or community channels where available.

Thank you for helping keep this project and its users safe.


