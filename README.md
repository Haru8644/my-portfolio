# Haruki Ino - Portfolio

![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?logo=next.js)
![React](https://img.shields.io/badge/React-Component_Based-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility_First-06B6D4?logo=tailwindcss&logoColor=white)
![Azure Deploy](https://img.shields.io/badge/Deploy-Azure_Static_Web_Apps-0078D4?logo=microsoftazure)

This is my bilingual portfolio for Class of 2028 product management and product planning graduate applications, built to present my product thinking, technical interests, and development experience.

The portfolio focuses on projects where I did not only implement features, but also identified operational issues, designed requirements, built full-stack systems, and improved them until they were actually used in practice.

## Live Site

- Portfolio: https://black-mud-02aa94010.6.azurestaticapps.net/
- GitHub: https://github.com/Haru8644/my-portfolio

## About This Portfolio

This portfolio presents my experience as an aspiring product manager, including a product management internship and internal software development and operation.

It highlights my interest in building systems that connect:

- User and business problems
- Product decision-making
- Full-stack implementation
- Operational design
- Continuous improvement after release

The existing Projects cards and modals present **Merpay**, **MeetingRoomBooker**, **Howtelevision scout UX**, and **Speee**, in that order, followed by other projects. The original layout, navigation, carousel, visual styling, and responsive behavior are retained.
Merpay's central payment-failure project reached a prototype and final proposal; separate supporting improvements were released. MeetingRoomBooker is in internal use. Scout UX remains at problem hypotheses and research preparation, focused on participation after scout acceptance. Speee was a three-day team planning exercise, without a live release or measured customer impact. Entria remains at design stage.

## Featured Case Study

### MeetingRoomBooker

MeetingRoomBooker is an internal meeting room reservation system developed to solve recurring duplicate bookings and unclear reservation ownership in daily operations.

Instead of treating the issue as a simple calendar UI problem, I approached it as an operational design problem.  
I designed and implemented features such as duplicate booking prevention, organizer and participant roles, authorization rules, recurring reservations, notifications, and Chatwork integration.

Key points:

- Helped employees spot overlaps and coordinate early, eliminating unexpected clashes first discovered on the meeting day; this does not mean every overlap disappeared
- Described current API-side room validation separately from the observed operational outcome
- Clarified reservation ownership and participant roles
- Added API-side authorization for update and delete operations
- Integrated Chatwork notifications into the daily workflow
- Improved the system through repeated feedback cycles after release

## Tech Stack

### Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend / Application Development Experience

- C#
- ASP.NET Core Web API
- Blazor WebAssembly
- Entity Framework Core
- SQLite
- REST API design

### Infrastructure / Operations

- Azure Static Web Apps
- GitHub Actions
- Linux
- Nginx
- systemd
- VPS deployment experience

## Project Structure

```txt
src
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components
│   ├── common
│   ├── home
│   └── ui
├── context
│   └── LanguageContext.tsx
└── data
    ├── constants.ts
    ├── additionalProjects.ts
    └── types.ts
```

The project separates UI components, application state, and content data so that the portfolio can be updated and maintained without mixing presentation and logic.

## Development

```bash
npm ci
npm run dev
```

The development server runs locally with hot reload, which allows me to iterate quickly on layout, copy, and interaction details while keeping the implementation close to the production environment.

## Quality Checks

```bash
npm run check
git diff --check
```

I use these checks as a personal baseline before updating the deployed portfolio.  
The goal is not only to make the site look polished, but also to keep the codebase maintainable as the content grows.

- `lint` checks for framework and style issues.
- `typecheck` catches TypeScript errors without generating build artifacts.
- `build` verifies that the application can be compiled for production.

For a local preview of the static export, run `npm run build` and then `npm run preview`. Open the printed URL (normally `http://127.0.0.1:4173`) and stop with `Ctrl+C`. `next start` does not serve this static export. The existing Google Fonts setup requires network access during a build without cached fonts.

The Azure workflow still deploys `out/` when `main` is updated. A feature-branch push alone does not update production.

## Technical Decisions

### Why Azure Static Web Apps

Although Vercel is a common choice for Next.js projects, this portfolio is deployed on Azure Static Web Apps.

I chose Azure intentionally because I wanted this portfolio to reflect not only frontend implementation skills, but also my interest in cloud deployment, CI/CD, and production-oriented operations.  
By using Azure Static Web Apps with GitHub Actions, I can keep the deployment flow simple while gaining hands-on experience with the Azure ecosystem.

This also connects to my broader engineering interest: building products that are not only implemented, but also deployed, operated, and improved continuously.

### Component and State Design

The project is structured so that UI components, data definitions, and application state are kept separate.

For example, language switching is handled through React Context instead of being embedded directly inside each component.  
This keeps the UI components focused on presentation and makes it easier to maintain both Japanese and English content without duplicating logic.

The main content is organized as typed data. Additional projects use the existing Project model, with optional stage and role text and a few additional status values. Project detail sections remain inside the existing modal; there are no separate case routes. Language preference is restored after a matching server snapshot and remains usable in memory when storage is unavailable.

### Case Study Presentation

The portfolio is designed to make project backgrounds and decision-making easy to understand.

For MeetingRoomBooker, I added sections such as Product Decisions and Technical Highlights so that readers can understand both the product thinking and the engineering implementation behind the project.  
This connects product decisions with implementation and operation. Merpay proposal work, released supporting improvements, and unvalidated scout UX hypotheses are explicitly distinguished. Internal company materials, confidential metrics, and unpublished screens are not included. MeetingRoomBooker schedule and form screenshots use the demo images in its public README.

## Roadmap

This portfolio is not a one-time showcase. I plan to keep improving it as both a product and a codebase.

Planned improvements include:

- Improving accessibility, including keyboard navigation, semantic structure, and screen reader support
- Further improving Lighthouse scores for performance, accessibility, best practices, and SEO
- Adding more detailed case studies for selected projects, especially MeetingRoomBooker
- Expanding technical documentation around design decisions, architecture, and deployment
- Continuing to refine copy and layout based on feedback from engineers, recruiters, and internship interviews

## License

This repository is maintained as a personal portfolio project.  
The source code and content are intended to represent my own work, experience, and learning process.
